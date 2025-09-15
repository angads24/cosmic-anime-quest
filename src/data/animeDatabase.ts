export interface Anime {
  id: number;
  title: string;
  originalTitle?: string;
  genre: string[];
  rating: number;
  year: number;
  status: string;
  episodes: number;
  duration?: string;
  studio?: string;
  image: string;
  bannerImage?: string;
  description: string;
  episodes_list?: Array<{
    number: number;
    title: string;
    duration: string;
  }>;
}

export const animeDatabase: Anime[] = [
  {
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
    description: "Centuries ago, mankind was slaughtered to near extinction by monstrous humanoid creatures called titans, forcing humans to hide in fear behind enormous concentric walls.",
    episodes_list: [
      { number: 1, title: "To You, in 2000 Years", duration: "24:42" },
      { number: 2, title: "That Day", duration: "24:15" },
      { number: 3, title: "A Dim Light Amid Despair", duration: "24:28" },
    ]
  },
  {
    id: 2,
    title: "Demon Slayer",
    originalTitle: "Kimetsu no Yaiba",
    genre: ["Action", "Supernatural", "Historical"],
    rating: 8.7,
    year: 2019,
    status: "Ongoing",
    episodes: 32,
    duration: "24 min per episode",
    studio: "Ufotable",
    image: "https://cdn.myanimelist.net/images/anime/1286/99889.jpg",
    description: "A young boy becomes a demon slayer to save his sister who was turned into a demon.",
    episodes_list: [
      { number: 1, title: "Cruelty", duration: "24:30" },
      { number: 2, title: "Trainer Sakonji Urokodaki", duration: "24:15" },
    ]
  },
  {
    id: 3,
    title: "Your Name",
    originalTitle: "Kimi no Na wa",
    genre: ["Romance", "Drama", "Supernatural"],
    rating: 8.4,
    year: 2016,
    status: "Movie",
    episodes: 1,
    duration: "106 min",
    studio: "CoMix Wave Films",
    image: "https://cdn.myanimelist.net/images/anime/5/87048.jpg",
    description: "Two teenagers share a profound, magical connection upon discovering they are swapping bodies.",
    episodes_list: [
      { number: 1, title: "Your Name", duration: "106:00" },
    ]
  },
  {
    id: 4,
    title: "Spirited Away",
    originalTitle: "Sen to Chihiro no Kamikakushi",
    genre: ["Adventure", "Family", "Fantasy"],
    rating: 9.3,
    year: 2001,
    status: "Movie",
    episodes: 1,
    duration: "125 min",
    studio: "Studio Ghibli",
    image: "https://cdn.myanimelist.net/images/anime/6/79597.jpg",
    description: "A ten-year-old girl enters a world ruled by gods, witches, and spirits.",
    episodes_list: [
      { number: 1, title: "Spirited Away", duration: "125:00" },
    ]
  },
  {
    id: 5,
    title: "Jujutsu Kaisen",
    originalTitle: "Jujutsu Kaisen",
    genre: ["Action", "School", "Supernatural"],
    rating: 8.6,
    year: 2020,
    status: "Ongoing",
    episodes: 24,
    duration: "24 min per episode",
    studio: "MAPPA",
    image: "https://cdn.myanimelist.net/images/anime/1171/109222.jpg",
    description: "Students fight cursed spirits in modern Japan while attending Tokyo Jujutsu High.",
    episodes_list: [
      { number: 1, title: "Ryomen Sukuna", duration: "24:20" },
      { number: 2, title: "For Myself", duration: "24:15" },
    ]
  },
  {
    id: 6,
    title: "One Piece",
    originalTitle: "One Piece",
    genre: ["Action", "Adventure", "Comedy"],
    rating: 9.0,
    year: 1999,
    status: "Ongoing",
    episodes: 1000,
    duration: "24 min per episode",
    studio: "Toei Animation",
    image: "https://cdn.myanimelist.net/images/anime/6/73245.jpg",
    description: "Monkey D. Luffy and his crew search for the ultimate treasure known as One Piece.",
    episodes_list: [
      { number: 1, title: "I'm Luffy! The Man Who's Gonna Be King of the Pirates!", duration: "24:30" },
      { number: 2, title: "Enter the Great Swordsman!", duration: "24:15" },
    ]
  },
  {
    id: 7,
    title: "My Hero Academia",
    originalTitle: "Boku no Hero Academia",
    genre: ["Action", "School", "Superhero"],
    rating: 8.5,
    year: 2016,
    status: "Ongoing",
    episodes: 138,
    duration: "24 min per episode",
    studio: "Bones",
    image: "https://cdn.myanimelist.net/images/anime/10/78745.jpg",
    description: "A boy without superpowers dreams of becoming a hero in a world where superpowers are the norm.",
    episodes_list: [
      { number: 1, title: "Izuku Midoriya: Origin", duration: "24:20" },
      { number: 2, title: "What It Takes to Be a Hero", duration: "24:15" },
    ]
  },
  {
    id: 8,
    title: "Princess Mononoke",
    originalTitle: "Mononoke-hime",
    genre: ["Adventure", "Drama", "Fantasy"],
    rating: 8.4,
    year: 1997,
    status: "Movie",
    episodes: 1,
    duration: "134 min",
    studio: "Studio Ghibli",
    image: "https://cdn.myanimelist.net/images/anime/7/75919.jpg",
    description: "A prince seeks a cure while caught between warring factions of humans and forest gods.",
    episodes_list: [
      { number: 1, title: "Princess Mononoke", duration: "134:00" },
    ]
  },
  {
    id: 9,
    title: "Naruto",
    originalTitle: "Naruto",
    genre: ["Action", "Adventure", "Martial Arts"],
    rating: 8.3,
    year: 2002,
    status: "Completed",
    episodes: 720,
    duration: "23 min per episode",
    studio: "Pierrot",
    image: "https://cdn.myanimelist.net/images/anime/13/17405.jpg",
    description: "A young ninja seeks recognition from his peers and dreams of becoming the Hokage.",
    episodes_list: [
      { number: 1, title: "Enter: Naruto Uzumaki!", duration: "23:30" },
      { number: 2, title: "My Name is Konohamaru!", duration: "23:15" },
    ]
  },
  {
    id: 10,
    title: "Death Note",
    originalTitle: "Death Note",
    genre: ["Supernatural", "Thriller", "Psychological"],
    rating: 9.0,
    year: 2006,
    status: "Completed",
    episodes: 37,
    duration: "23 min per episode",
    studio: "Madhouse",
    image: "https://cdn.myanimelist.net/images/anime/9/9453.jpg",
    description: "A high school student finds a supernatural notebook that can kill anyone whose name is written in it.",
    episodes_list: [
      { number: 1, title: "Rebirth", duration: "23:45" },
      { number: 2, title: "Confrontation", duration: "23:30" },
    ]
  },
  {
    id: 11,
    title: "One Punch Man",
    originalTitle: "One Punch Man",
    genre: ["Action", "Comedy", "Superhero"],
    rating: 8.8,
    year: 2015,
    status: "Ongoing",
    episodes: 24,
    duration: "24 min per episode",
    studio: "Madhouse / J.C.Staff",
    image: "https://cdn.myanimelist.net/images/anime/12/76049.jpg",
    description: "A superhero who can defeat any enemy with a single punch struggles with finding worthy opponents.",
    episodes_list: [
      { number: 1, title: "The Strongest Man", duration: "24:20" },
      { number: 2, title: "The Lone Cyborg", duration: "24:15" },
    ]
  },
  {
    id: 12,
    title: "Fullmetal Alchemist: Brotherhood",
    originalTitle: "Hagane no Renkinjutsushi: Fullmetal Alchemist",
    genre: ["Action", "Adventure", "Dark Fantasy"],
    rating: 9.1,
    year: 2009,
    status: "Completed",
    episodes: 64,
    duration: "24 min per episode",
    studio: "Bones",
    image: "https://cdn.myanimelist.net/images/anime/1223/96541.jpg",
    description: "Two brothers use alchemy in their quest to find the Philosopher's Stone to restore their bodies.",
    episodes_list: [
      { number: 1, title: "Fullmetal Alchemist", duration: "24:30" },
      { number: 2, title: "The First Day", duration: "24:20" },
    ]
  }
];

export const getAnimeById = (id: number): Anime | undefined => {
  return animeDatabase.find(anime => anime.id === id);
};