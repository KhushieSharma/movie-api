import { prisma } from "../src/config/db.js";
const creatorId="a6354077-cdb2-464f-877d-5c48607cec07";
const movies = [
  {
    title: "Inception",
    overview: "A thief who steals secrets through dream-sharing technology is given a chance to erase his past by planting an idea into a target's subconscious.",
    releaseYear: 2010,
    genre: ["Sci-Fi", "Action", "Thriller"],
    runtime: 148,
    posterUrl: "https://image.tmdb.org/t/p/w500/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg",
    createdBy:creatorId,
  },
  {
    title: "Parasite",
    overview: "Greed and class discrimination threaten the newly formed symbiotic relationship between the wealthy Park family and the destitute Kim clan.",
    releaseYear: 2019,
    genre: ["Drama", "Thriller"],
    runtime: 132,
    posterUrl: "https://image.tmdb.org/t/p/w500/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg",
    createdBy:creatorId,
  },
  {
    title: "The Dark Knight",
    overview: "When the menace known as the Joker wreaks havoc on Gotham, Batman must accept one of the greatest psychological tests of his ability to fight injustice.",
    releaseYear: 2008,
    genre: ["Action", "Crime", "Drama"],
    runtime: 152,
    posterUrl: "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
    createdBy:creatorId,
  },
  {
    title: "Spirited Away",
    overview: "During her family's move to the suburbs, a sullen ten-year-old girl wanders into a world ruled by gods and witches.",
    releaseYear: 2001,
    genre: ["Animation", "Fantasy", "Adventure"],
    runtime: 125,
    posterUrl: "https://image.tmdb.org/t/p/w500/39wmItIWsg5sZMyRUHLkWBcuVCM.jpg",
    createdBy:creatorId,
  },
  {
    title: "Interstellar",
    overview: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival as Earth becomes uninhabitable.",
    releaseYear: 2014,
    genre: ["Sci-Fi", "Drama", "Adventure"],
    runtime: 169,
    posterUrl: "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
    createdBy:creatorId,
  },
  {
    title: "The Grand Budapest Hotel",
    overview: "The adventures of a legendary concierge at a famous European hotel and the lobby boy who becomes his trusted friend.",
    releaseYear: 2014,
    genre: ["Comedy", "Drama"],
    runtime: 99,
    posterUrl: "https://image.tmdb.org/t/p/w500/eWdyYQreja6JGCzqHWXpWHDrrPo.jpg",
    createdBy:creatorId,
  },
  {
    title: "Whiplash",
    overview: "A promising young drummer enrolls at a cutthroat music conservatory where his dreams are mentored by an instructor who will stop at nothing.",
    releaseYear: 2014,
    genre: ["Drama", "Music"],
    runtime: 106,
    posterUrl: "https://image.tmdb.org/t/p/w500/7fn624j5lj3xTme2SgiLCeuedmO.jpg",
    createdBy:creatorId,
  },
  {
    title: "Mad Max: Fury Road",
    overview: "In a post-apocalyptic wasteland, a woman rebels against a tyrannical ruler in search for her homeland with the aid of a group of female prisoners.",
    releaseYear: 2015,
    genre: ["Action", "Adventure", "Sci-Fi"],
    runtime: 120,
    posterUrl: "https://image.tmdb.org/t/p/w500/hA2ple9q4qnwxp3hKVNhroipsir.jpg",
    createdBy:creatorId,
  },
  {
    title: "The Social Network",
    overview: "As Harvard student Mark Zuckerberg creates the social networking site that would become Facebook, he is sued by the twins who claimed he stole their idea.",
    releaseYear: 2010,
    genre: ["Drama", "Biography"],
    runtime: 120,
    posterUrl: "https://image.tmdb.org/t/p/w500/n0ybibhJtQ5icDqTp8eRytcIHJx.jpg",
    createdBy:creatorId,
  },
  {
    title: "Everything Everywhere All at Once",
    overview: "A middle-aged Chinese immigrant is swept up in an insane adventure in which she alone can save the multiverse by exploring other universes.",
    releaseYear: 2022,
    genre: ["Sci-Fi", "Comedy", "Adventure"],
    runtime: 139,
    posterUrl: "https://image.tmdb.org/t/p/w500/w3LxiVYdWWRvEVdn5RYq6jIqkb1.jpg",
    createdBy:creatorId,
  }
];
const main=async()=>{
    console.log("Seeding database...");
    for (const movie of movies) {
        await prisma.movie.create({
            data: movie,
        });
        console.log(`Created movie: ${movie.title}`);
    }   
    console.log("Seeding completed.");
};
main().catch((err)=>{
    console.error("Error seeding database:", err);
    process.exit(1);
}).finally(async()=>{
    await prisma.$disconnect();
})
