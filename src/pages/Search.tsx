import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { Search as SearchIcon, Filter, Grid, List, Star, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Navbar from "@/components/Navbar";
import { animeDatabase } from "@/data/animeDatabase";

const Search = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedGenre, setSelectedGenre] = useState("all");
  const [sortBy, setSortBy] = useState("rating");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  const genres = ["all", "Action", "Adventure", "Drama", "Fantasy", "Romance", "Comedy", "Supernatural", "School"];

  const filteredAnime = useMemo(() => {
    let results = animeDatabase.filter(anime =>
      anime.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      anime.description.toLowerCase().includes(searchQuery.toLowerCase())
    );

    if (selectedGenre !== "all") {
      results = results.filter(anime => anime.genre.includes(selectedGenre));
    }

    results.sort((a, b) => {
      switch (sortBy) {
        case "rating":
          return b.rating - a.rating;
        case "year":
          return b.year - a.year;
        case "title":
          return a.title.localeCompare(b.title);
        default:
          return 0;
      }
    });

    return results;
  }, [searchQuery, selectedGenre, sortBy]);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="container mx-auto px-4 py-8">
        {/* Search Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2 bg-anime-gradient bg-clip-text text-transparent">
            Search Anime
          </h1>
          <p className="text-muted-foreground">
            Discover your next favorite anime from our extensive collection
          </p>
        </div>

        {/* Search and Filters */}
        <div className="bg-card p-6 rounded-lg border border-muted mb-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
            {/* Search Input */}
            <div className="md:col-span-5 relative">
              <SearchIcon className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search anime titles, descriptions..."
                className="pl-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            {/* Genre Filter */}
            <div className="md:col-span-2">
              <Select value={selectedGenre} onValueChange={setSelectedGenre}>
                <SelectTrigger>
                  <SelectValue placeholder="All Genres" />
                </SelectTrigger>
                <SelectContent>
                  {genres.map(genre => (
                    <SelectItem key={genre} value={genre}>
                      {genre === "all" ? "All Genres" : genre}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Sort By */}
            <div className="md:col-span-2">
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger>
                  <SelectValue placeholder="Sort By" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="rating">Rating</SelectItem>
                  <SelectItem value="year">Year</SelectItem>
                  <SelectItem value="title">Title</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* View Mode */}
            <div className="md:col-span-3 flex gap-2">
              <Button
                variant={viewMode === "grid" ? "secondary" : "outline"}
                size="sm"
                onClick={() => setViewMode("grid")}
                className="flex-1"
              >
                <Grid className="w-4 h-4 mr-2" />
                Grid
              </Button>
              <Button
                variant={viewMode === "list" ? "secondary" : "outline"}
                size="sm"
                onClick={() => setViewMode("list")}
                className="flex-1"
              >
                <List className="w-4 h-4 mr-2" />
                List
              </Button>
            </div>
          </div>
        </div>

        {/* Results */}
        <div className="mb-4 flex items-center justify-between">
          <p className="text-muted-foreground">
            Found {filteredAnime.length} anime{filteredAnime.length !== 1 ? 's' : ''}
          </p>
        </div>

        {/* Grid View */}
        {viewMode === "grid" && (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
            {filteredAnime.map((anime) => (
              <Link key={anime.id} to={`/anime/${anime.id}`}>
                <Card className="group cursor-pointer hover:shadow-anime-glow transition-all duration-300 hover:scale-105 border-muted hover:border-primary">
                  <CardContent className="p-0">
                    <div className="relative aspect-[3/4] overflow-hidden rounded-t-lg">
                      <img
                        src={anime.image}
                        alt={anime.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="absolute top-2 right-2">
                        <Badge variant="secondary" className="text-xs">
                          <Star className="w-3 h-3 mr-1 fill-current" />
                          {anime.rating}
                        </Badge>
                      </div>
                      <div className="absolute bottom-4 left-4 right-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 opacity-0 group-hover:opacity-100">
                        <Button size="sm" className="w-full bg-anime-gradient hover:shadow-anime-glow">
                          <Play className="mr-2 h-3 w-3" />
                          Watch
                        </Button>
                      </div>
                    </div>
                    <div className="p-3">
                      <h3 className="font-semibold text-sm mb-1 line-clamp-2 group-hover:text-primary transition-colors">
                        {anime.title}
                      </h3>
                      <p className="text-muted-foreground text-xs">{anime.year} • {anime.episodes} episodes</p>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        )}

        {/* List View */}
        {viewMode === "list" && (
          <div className="space-y-4">
            {filteredAnime.map((anime) => (
              <Link key={anime.id} to={`/anime/${anime.id}`}>
                <Card className="group cursor-pointer hover:shadow-anime-glow transition-all duration-300 border-muted hover:border-primary">
                  <CardContent className="p-4">
                    <div className="flex gap-4">
                      <div className="relative w-20 h-28 overflow-hidden rounded-lg flex-shrink-0">
                        <img
                          src={anime.image}
                          alt={anime.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between mb-2">
                          <h3 className="font-semibold text-lg group-hover:text-primary transition-colors">
                            {anime.title}
                          </h3>
                          <div className="flex items-center gap-2 ml-4">
                            <Badge variant="secondary" className="text-xs">
                              <Star className="w-3 h-3 mr-1 fill-current" />
                              {anime.rating}
                            </Badge>
                            <Button size="sm" className="bg-anime-gradient hover:shadow-anime-glow">
                              <Play className="mr-1 h-3 w-3" />
                              Watch
                            </Button>
                          </div>
                        </div>
                        <p className="text-muted-foreground text-sm mb-3 line-clamp-2">
                          {anime.description}
                        </p>
                        <div className="flex flex-wrap gap-2 mb-2">
                          {anime.genre.map(g => (
                            <Badge key={g} variant="outline" className="text-xs">
                              {g}
                            </Badge>
                          ))}
                        </div>
                        <div className="text-sm text-muted-foreground">
                          {anime.year} • {anime.episodes} episodes • {anime.status}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        )}

        {/* No Results */}
        {filteredAnime.length === 0 && (
          <div className="text-center py-16">
            <div className="w-24 h-24 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
              <SearchIcon className="w-12 h-12 text-muted-foreground" />
            </div>
            <h3 className="text-xl font-semibold mb-2">No anime found</h3>
            <p className="text-muted-foreground mb-4">
              Try adjusting your search criteria or browse our categories
            </p>
            <Link to="/browse">
              <Button className="bg-anime-gradient hover:shadow-anime-glow">
                Browse Categories
              </Button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Search;