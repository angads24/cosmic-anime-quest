import { Link } from "react-router-dom";
import { ChevronRight, Play, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navbar from "@/components/Navbar";

const categories = [
  {
    id: "action",
    title: "Action",
    description: "High-octane adventures and intense battles",
    color: "bg-red-500",
    anime: [
      {
        id: 1,
        title: "Attack on Titan",
        image: "https://cdn.myanimelist.net/images/anime/10/47347.jpg",
        rating: 9.0
      },
      {
        id: 2,
        title: "Demon Slayer",
        image: "https://cdn.myanimelist.net/images/anime/1286/99889.jpg",
        rating: 8.7
      },
      {
        id: 5,
        title: "Jujutsu Kaisen",
        image: "https://cdn.myanimelist.net/images/anime/1171/109222.jpg",
        rating: 8.6
      }
    ]
  },
  {
    id: "romance",
    title: "Romance",
    description: "Heart-warming love stories and relationships",
    color: "bg-pink-500",
    anime: [
      {
        id: 3,
        title: "Your Name",
        image: "https://cdn.myanimelist.net/images/anime/5/87048.jpg",
        rating: 8.4
      }
    ]
  },
  {
    id: "fantasy",
    title: "Fantasy",
    description: "Magical worlds and supernatural adventures",
    color: "bg-purple-500",
    anime: [
      {
        id: 4,
        title: "Spirited Away",
        image: "https://cdn.myanimelist.net/images/anime/6/79597.jpg",
        rating: 9.3
      },
      {
        id: 8,
        title: "Princess Mononoke",
        image: "https://cdn.myanimelist.net/images/anime/7/75919.jpg",
        rating: 8.4
      }
    ]
  },
  {
    id: "adventure",
    title: "Adventure",
    description: "Epic journeys and thrilling quests",
    color: "bg-green-500",
    anime: [
      {
        id: 6,
        title: "One Piece",
        image: "https://cdn.myanimelist.net/images/anime/6/73245.jpg",
        rating: 9.0
      }
    ]
  },
  {
    id: "school",
    title: "School",
    description: "Stories set in academic environments",
    color: "bg-blue-500",
    anime: [
      {
        id: 7,
        title: "My Hero Academia",
        image: "https://cdn.myanimelist.net/images/anime/10/78745.jpg",
        rating: 8.5
      }
    ]
  }
];

const popularAnime = [
  {
    id: 1,
    title: "Attack on Titan",
    image: "https://cdn.myanimelist.net/images/anime/10/47347.jpg",
    rating: 9.0,
    genre: "Action, Drama"
  },
  {
    id: 4,
    title: "Spirited Away", 
    image: "https://cdn.myanimelist.net/images/anime/6/79597.jpg",
    rating: 9.3,
    genre: "Adventure, Family"
  },
  {
    id: 6,
    title: "One Piece",
    image: "https://cdn.myanimelist.net/images/anime/6/73245.jpg",
    rating: 9.0,
    genre: "Action, Adventure"
  },
  {
    id: 2,
    title: "Demon Slayer",
    image: "https://cdn.myanimelist.net/images/anime/1286/99889.jpg",
    rating: 8.7,
    genre: "Action, Supernatural"
  },
  {
    id: 5,
    title: "Jujutsu Kaisen",
    image: "https://cdn.myanimelist.net/images/anime/1171/109222.jpg",
    rating: 8.6,
    genre: "Action, School"
  },
  {
    id: 7,
    title: "My Hero Academia",
    image: "https://cdn.myanimelist.net/images/anime/10/78745.jpg",
    rating: 8.5,
    genre: "Action, School"
  }
];

const Browse = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2 bg-anime-gradient bg-clip-text text-transparent">
            Browse Categories
          </h1>
          <p className="text-muted-foreground">
            Explore anime by your favorite genres and discover new series
          </p>
        </div>

        {/* Categories Grid */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Categories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category) => (
              <Card key={category.id} className="group cursor-pointer hover:shadow-anime-glow transition-all duration-300 hover:scale-105 border-muted hover:border-primary">
                <CardContent className="p-0">
                  <div className="relative aspect-video overflow-hidden rounded-t-lg">
                    {/* Category Header */}
                    <div className={`${category.color} p-6 text-white`}>
                      <h3 className="text-xl font-bold mb-2">{category.title}</h3>
                      <p className="text-white/90 text-sm">{category.description}</p>
                    </div>
                    
                    {/* Sample Anime */}
                    <div className="absolute bottom-0 left-0 right-0 flex -space-x-2 p-4">
                      {category.anime.slice(0, 3).map((anime, index) => (
                        <div 
                          key={anime.id}
                          className="w-12 h-16 rounded border-2 border-white overflow-hidden relative"
                          style={{ zIndex: 3 - index }}
                        >
                          <img
                            src={anime.image}
                            alt={anime.title}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Category Footer */}
                  <div className="p-4 flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">
                      {category.anime.length} anime
                    </span>
                    <Button variant="ghost" size="sm" className="group-hover:text-primary">
                      Explore
                      <ChevronRight className="ml-1 w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Most Popular Section */}
        <section>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-semibold">Most Popular</h2>
            <Link to="/search">
              <Button variant="ghost" className="text-primary hover:text-primary-foreground hover:bg-primary">
                View All
                <ChevronRight className="ml-1 h-4 w-4" />
              </Button>
            </Link>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {popularAnime.map((anime, index) => (
              <Link key={anime.id} to={`/anime/${anime.id}`}>
                <Card className="group cursor-pointer hover:shadow-anime-glow transition-all duration-300 hover:scale-105 border-muted hover:border-secondary">
                  <CardContent className="p-0">
                    <div className="relative aspect-[3/4] overflow-hidden rounded-t-lg">
                      <img
                        src={anime.image}
                        alt={anime.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      
                      {/* Ranking Badge */}
                      <div className="absolute top-2 left-2">
                        <div className="bg-primary text-primary-foreground w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">
                          {index + 1}
                        </div>
                      </div>
                      
                      {/* Rating Badge */}
                      <div className="absolute top-2 right-2">
                        <Badge variant="secondary" className="text-xs">
                          <Star className="w-3 h-3 mr-1 fill-current" />
                          {anime.rating}
                        </Badge>
                      </div>
                      
                      {/* Hover Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="absolute bottom-4 left-4 right-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 opacity-0 group-hover:opacity-100">
                        <Button size="sm" className="w-full bg-anime-gradient hover:shadow-anime-glow">
                          <Play className="mr-2 h-3 w-3" />
                          Watch
                        </Button>
                      </div>
                    </div>
                    
                    <div className="p-3">
                      <h3 className="font-semibold text-sm mb-1 line-clamp-2 group-hover:text-secondary transition-colors">
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

        {/* Quick Browse Actions */}
        <section className="mt-16">
          <div className="bg-card rounded-lg p-8 border border-muted">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-semibold mb-2">Can't find what you're looking for?</h2>
              <p className="text-muted-foreground">Try these options to discover more anime</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Link to="/search" className="group">
                <Button variant="outline" className="w-full h-16 text-left justify-start border-primary/20 hover:border-primary hover:bg-primary hover:text-primary-foreground group-hover:shadow-anime-glow transition-all duration-300">
                  <div>
                    <div className="font-semibold">Advanced Search</div>
                    <div className="text-xs opacity-80">Search by genre, year, rating</div>
                  </div>
                </Button>
              </Link>
              
              <Link to="/dashboard" className="group">
                <Button variant="outline" className="w-full h-16 text-left justify-start border-secondary/20 hover:border-secondary hover:bg-secondary hover:text-secondary-foreground group-hover:shadow-anime-glow transition-all duration-300">
                  <div>
                    <div className="font-semibold">My Watchlist</div>
                    <div className="text-xs opacity-80">Continue watching your anime</div>
                  </div>
                </Button>
              </Link>
              
              <Button variant="outline" className="w-full h-16 text-left justify-start border-accent/20 hover:border-accent hover:bg-accent hover:text-accent-foreground hover:shadow-anime-glow transition-all duration-300">
                <div>
                  <div className="font-semibold">Random Anime</div>
                  <div className="text-xs opacity-80">Discover something new</div>
                </div>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Browse;