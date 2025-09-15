import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Play, Heart, Plus, Share, Star, Clock, Calendar, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/hooks/use-toast";
import Navbar from "@/components/Navbar";

// Mock anime data - in real app this would come from API
const animeData = {
  1: {
    id: 1,
    title: "Attack on Titan",
    originalTitle: "Shingeki no Kyojin",
    genre: ["Action", "Drama", "Fantasy"],
    rating: 9.0,
    year: 2013,
    status: "Completed",
    episodes: 75,
    duration: "24 min per episode",
    studio: "Wit Studio / MAPPA",
    image: "https://cdn.myanimelist.net/images/anime/10/47347.jpg",
    bannerImage: "https://cdn.myanimelist.net/images/anime/10/47347l.jpg",
    description: "Centuries ago, mankind was slaughtered to near extinction by monstrous humanoid creatures called titans, forcing humans to hide in fear behind enormous concentric walls. What makes these giants truly terrifying is that their taste for human flesh is not born out of hunger but what appears to be out of pleasure. To ensure their survival, the remnants of humanity began living within defensive barriers, resulting in one hundred years without a single titan encounter. However, that fragile calm is soon shattered when a colossal titan manages to breach the supposedly impregnable outer wall, reigniting the fight for survival against the man-eating abominations.",
    episodes_list: [
      { number: 1, title: "To You, in 2000 Years", duration: "24:42" },
      { number: 2, title: "That Day", duration: "24:15" },
      { number: 3, title: "A Dim Light Amid Despair", duration: "24:28" },
      { number: 4, title: "The Night of the Closing Ceremony", duration: "24:33" },
      { number: 5, title: "First Battle", duration: "24:25" }
    ]
  }
};

const AnimeDetails = () => {
  const { id } = useParams();
  const { toast } = useToast();
  const [isFavorite, setIsFavorite] = useState(false);
  const [isInWatchlist, setIsInWatchlist] = useState(false);

  // Get anime data (fallback for demo purposes)
  const anime = animeData[Number(id) as keyof typeof animeData] || animeData[1];

  const handleAddToFavorites = () => {
    setIsFavorite(!isFavorite);
    toast({
      title: isFavorite ? "Removed from Favorites" : "Added to Favorites",
      description: isFavorite 
        ? `${anime.title} has been removed from your favorites` 
        : `${anime.title} has been added to your favorites`
    });
  };

  const handleAddToWatchlist = () => {
    setIsInWatchlist(!isInWatchlist);
    toast({
      title: isInWatchlist ? "Removed from Watchlist" : "Added to Watchlist",
      description: isInWatchlist 
        ? `${anime.title} has been removed from your watchlist` 
        : `${anime.title} has been added to your watchlist`
    });
  };

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    toast({
      title: "Link Copied",
      description: "Anime link has been copied to clipboard"
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <div className="relative h-96 overflow-hidden">
        <img
          src={anime.image}
          alt={anime.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
        
        {/* Back Button */}
        <div className="absolute top-4 left-4 z-10">
          <Link to="/dashboard">
            <Button variant="secondary" size="sm" className="bg-card/80 backdrop-blur-md">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back
            </Button>
          </Link>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 -mt-32 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Poster */}
          <div className="lg:col-span-3">
            <Card className="border-muted shadow-anime-glow sticky top-4">
              <CardContent className="p-0">
                <img
                  src={anime.image}
                  alt={anime.title}
                  className="w-full aspect-[3/4] object-cover rounded-lg"
                />
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-9">
            {/* Title and Actions */}
            <div className="mb-6">
              <h1 className="text-4xl font-bold mb-2 bg-anime-gradient bg-clip-text text-transparent">
                {anime.title}
              </h1>
              <p className="text-xl text-muted-foreground mb-4">{anime.originalTitle}</p>
              
              {/* Action Buttons */}
              <div className="flex flex-wrap gap-3 mb-6">
                <Button size="lg" className="bg-anime-gradient hover:shadow-anime-glow">
                  <Play className="mr-2 h-5 w-5" />
                  Watch Now
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  onClick={handleAddToWatchlist}
                  className={isInWatchlist ? "border-primary text-primary" : ""}
                >
                  <Plus className="mr-2 h-5 w-5" />
                  {isInWatchlist ? "In Watchlist" : "Add to Watchlist"}
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  onClick={handleAddToFavorites}
                  className={isFavorite ? "border-red-500 text-red-500" : ""}
                >
                  <Heart className={`mr-2 h-5 w-5 ${isFavorite ? "fill-current" : ""}`} />
                  {isFavorite ? "Favorited" : "Add to Favorites"}
                </Button>
                <Button variant="outline" size="lg" onClick={handleShare}>
                  <Share className="mr-2 h-5 w-5" />
                  Share
                </Button>
              </div>

              {/* Genres */}
              <div className="flex flex-wrap gap-2 mb-6">
                {anime.genre.map(g => (
                  <Badge key={g} variant="secondary" className="px-3 py-1">
                    {g}
                  </Badge>
                ))}
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                <Card className="border-muted">
                  <CardContent className="p-4 text-center">
                    <Star className="w-6 h-6 text-yellow-500 mx-auto mb-2 fill-current" />
                    <div className="font-bold text-lg">{anime.rating}</div>
                    <div className="text-sm text-muted-foreground">Rating</div>
                  </CardContent>
                </Card>

                <Card className="border-muted">
                  <CardContent className="p-4 text-center">
                    <Calendar className="w-6 h-6 text-primary mx-auto mb-2" />
                    <div className="font-bold text-lg">{anime.year}</div>
                    <div className="text-sm text-muted-foreground">Year</div>
                  </CardContent>
                </Card>

                <Card className="border-muted">
                  <CardContent className="p-4 text-center">
                    <Users className="w-6 h-6 text-secondary mx-auto mb-2" />
                    <div className="font-bold text-lg">{anime.episodes}</div>
                    <div className="text-sm text-muted-foreground">Episodes</div>
                  </CardContent>
                </Card>

                <Card className="border-muted">
                  <CardContent className="p-4 text-center">
                    <Clock className="w-6 h-6 text-accent mx-auto mb-2" />
                    <div className="font-bold text-lg">24m</div>
                    <div className="text-sm text-muted-foreground">Duration</div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Tabs */}
            <Tabs defaultValue="overview" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="episodes">Episodes</TabsTrigger>
                <TabsTrigger value="details">Details</TabsTrigger>
              </TabsList>

              <TabsContent value="overview" className="mt-6">
                <Card className="border-muted">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-4">Synopsis</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {anime.description}
                    </p>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="episodes" className="mt-6">
                <Card className="border-muted">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-4">Episodes</h3>
                    <div className="space-y-3">
                      {anime.episodes_list.map((episode) => (
                        <div 
                          key={episode.number}
                          className="flex items-center justify-between p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors cursor-pointer group"
                        >
                          <div className="flex items-center gap-4">
                            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center text-primary-foreground font-semibold">
                              {episode.number}
                            </div>
                            <div>
                              <h4 className="font-medium group-hover:text-primary transition-colors">
                                {episode.title}
                              </h4>
                              <p className="text-sm text-muted-foreground">
                                Duration: {episode.duration}
                              </p>
                            </div>
                          </div>
                          <Button size="sm" variant="ghost" className="opacity-0 group-hover:opacity-100 transition-opacity">
                            <Play className="w-4 h-4" />
                          </Button>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="details" className="mt-6">
                <Card className="border-muted">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-4">Details</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-medium text-muted-foreground mb-2">Studio</h4>
                        <p className="mb-4">{anime.studio}</p>
                        
                        <h4 className="font-medium text-muted-foreground mb-2">Status</h4>
                        <p className="mb-4">{anime.status}</p>
                        
                        <h4 className="font-medium text-muted-foreground mb-2">Episodes</h4>
                        <p>{anime.episodes}</p>
                      </div>
                      
                      <div>
                        <h4 className="font-medium text-muted-foreground mb-2">Duration</h4>
                        <p className="mb-4">{anime.duration}</p>
                        
                        <h4 className="font-medium text-muted-foreground mb-2">Year</h4>
                        <p className="mb-4">{anime.year}</p>
                        
                        <h4 className="font-medium text-muted-foreground mb-2">Rating</h4>
                        <p>{anime.rating}/10</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnimeDetails;