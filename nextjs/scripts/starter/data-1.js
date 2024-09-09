// const data = [
//     {
//         id: 1,
//         title: "The Lord of the Rings",
//         publicationDate: "1954-07-29",
//         author: "J. R. R. Tolkien",
//         genres: [
//             "fantasy",
//             "high-fantasy",
//             "adventure",
//             "fiction",
//             "novels",
//             "literature",
//         ],
//         hasMovieAdaptation: true,
//         pages: 1216,
//         translations: {
//             spanish: "El señor de los anillos",
//             chinese: "魔戒",
//             french: "Le Seigneur des anneaux",
//         },
//         reviews: {
//             goodreads: {
//                 rating: 4.52,
//                 ratingsCount: 630994,
//                 reviewsCount: 13417,
//             },
//             librarything: {
//                 rating: 4.53,
//                 ratingsCount: 47166,
//                 reviewsCount: 452,
//             },
//         },
//     },
//     {
//         id: 2,
//         title: "The Cyberiad",
//         publicationDate: "1965-01-01",
//         author: "Stanislaw Lem",
//         genres: [
//             "science fiction",
//             "humor",
//             "speculative fiction",
//             "short stories",
//             "fantasy",
//         ],
//         hasMovieAdaptation: false,
//         pages: 295,
//         translations: {},
//         reviews: {
//             goodreads: {
//                 rating: 4.16,
//                 ratingsCount: 11663,
//                 reviewsCount: 812,
//             },
//             librarything: {
//                 rating: 4.13,
//                 ratingsCount: 2434,
//                 reviewsCount: 0,
//             },
//         },
//     },
//     {
//         id: 3,
//         title: "Dune",
//         publicationDate: "1965-01-01",
//         author: "Frank Herbert",
//         genres: ["science fiction", "novel", "adventure"],
//         hasMovieAdaptation: true,
//         pages: 658,
//         translations: {
//             spanish: "",
//         },
//         reviews: {
//             goodreads: {
//                 rating: 4.25,
//                 ratingsCount: 1142893,
//                 reviewsCount: 49701,
//             },
//         },
//     },
//     {
//         id: 4,
//         title: "Harry Potter and the Philosopher's Stone",
//         publicationDate: "1997-06-26",
//         author: "J. K. Rowling",
//         genres: ["fantasy", "adventure"],
//         hasMovieAdaptation: true,
//         pages: 223,
//         translations: {
//             spanish: "Harry Potter y la piedra filosofal",
//             korean: "해리 포터와 마법사의 돌",
//             bengali: "হ্যারি পটার এন্ড দ্য ফিলোসফার্স স্টোন",
//             portuguese: "Harry Potter e a Pedra Filosofal",
//         },
//         reviews: {
//             goodreads: {
//                 rating: 4.47,
//                 ratingsCount: 8910059,
//                 reviewsCount: 140625,
//             },
//             librarything: {
//                 rating: 4.29,
//                 ratingsCount: 120941,
//                 reviewsCount: 1960,
//             },
//         },
//     },
//     {
//         id: 5,
//         title: "A Game of Thrones",
//         publicationDate: "1996-08-01",
//         author: "George R. R. Martin",
//         genres: ["fantasy", "high-fantasy", "novel", "fantasy fiction"],
//         hasMovieAdaptation: true,
//         pages: 835,
//         translations: {
//             korean: "왕좌의 게임",
//             polish: "Gra o tron",
//             portuguese: "A Guerra dos Tronos",
//             spanish: "Juego de tronos",
//         },
//         reviews: {
//             goodreads: {
//                 rating: 4.44,
//                 ratingsCount: 2295233,
//                 reviewsCount: 59058,
//             },
//             librarything: {
//                 rating: 4.36,
//                 ratingsCount: 38358,
//                 reviewsCount: 1095,
//             },
//         },
//     },
// ];
//
// function getBooks() {
//     return data;
// }
//
// function getBook(id) {
//     return data.find((d) => d.id === id);
// }
//
// // Destructuting
//
// // const book = getBook(3);
// //
// // const { title, author, pages, genres, reviews, translations, hasMovieAdaptation, publicationDate } = book;
// // console.log(title + " by " + author + " has " + pages + " pages. It was published in " + publicationDate);
// //
// // const otherGenres = book.genres.filter((g) => g !== "fantasy");
// // console.log(otherGenres);
// //
// // const [...otherGenres2] = genres;
// // console.log(otherGenres2);
// //
// // const newGenres = [...genres, "epic fantasy"];
// // console.log(newGenres);
// //
// // const updateBook = { ...book, moviePublicationDate: '2001-01-01' };
// //
// // console.log(updateBook);
// //
// // function getTotalReviewCount(book) {
// //     return book.reviews.goodreads.reviewsCount ?? 0 + book.reviews.librarything?.reviewsCount ?? 0;
// // }
// //
// // console.log(getTotalReviewCount(book));
//
// const books = getBooks();
//
// console.log("Map array");
//
// const essentials = books.map((book) => ({
//     title: book.title,
//     author: book.author,
//     pages: book.pages,
//     genres: book.genres,
// }));
//
// console.log(essentials);
//
// console.log("Filter array");
//
// const longBoooks = books.filter((book) => book.pages > 500).filter(book => book.hasMovieAdaptation)
//
// console.log(longBoooks)
// console.log(longBoooks.map((book) => book.title))
//
// // Reduce Array
// console.log("Reduce array");
//
// const totalPages = books.reduce((total, book) => total + book.pages, 0);
// console.log(totalPages);
//
// console.log("Sort");
//
// const unsorted = [4, 1, 6, 123, 432, 1321, 45, 465, 452, 45, 234, 278, 36, 7423, 132];
// const sorted = unsorted.slice().sort((a, b) => a - b);
// console.log(unsorted);
// console.log(sorted);
//
// const sortedBooks = books.slice().sort((a, b) => a.pages - b.pages);
// console.log(sortedBooks.map((book) => ({
//     title: book.title,
//     pages: book.pages,
// })));
//
// // Mutable and imutable data
//
// // 1) Add book object to array
//
// const newBook = {
//     id: 6,
//     title: 'Harry Potter and the Philosopher\'s Stone',
//     author: 'J. K. Rowling',
//     publicationDate: '1997-06-26',
//     pages: 320,
//     genres: ['fantasy', 'young-adult fiction', 'fantasy fiction'],
//     hasMovieAdaptation: true,
//     reviews: {
//         goodreads: {
//             rating: 4.5,
//             ratingsCount: 0,
//             reviewsCount: 0,
//         },
//         librarything: {
//             rating: 0,
//             ratingsCount: 0,
//             reviewsCount: 0,
//         },
//     },
//     translations: {
//         spanish: 'Harry Potter y la piedra filosofal',
//     },
// };
//
//
// // 2) Delete
// console.log("******************************************************************")
// const booksAfterAdd = [...books, newBook];
// console.log(booksAfterAdd);
//
// console.log("******************************************************************")
// const bookAfterDelete = booksAfterAdd.filter((book) => book.id !== 3)
// console.log(bookAfterDelete);
//
// // 3) Update
//
// console.log("******************************************************************")
// const updatedBooks = bookAfterDelete.map((book) =>
//     book.id === 1 ? { ...book, pages: 1234 } : book);
// console.log(updatedBooks);

// Asynchromise Promises
// fetch('http://localhost:8000/api/todos')
//     .then(response => response.json())
//     .then(json => console.log(json))
//
// console.log("Vidoje");

async function getTodos() {
    const res = await fetch('http://localhost:8000/api/todos');
    const data = await res.json();
    return data;
}

const data = await getTodos();
console.log(data);


