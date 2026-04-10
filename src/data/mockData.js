export const books = [
  { id: 1, title: "The Great Gatsby", author: "F. Scott Fitzgerald", image: "https://images.bwbcovers.com/171/F-Scott-Fitzgerald-The-Great-Gatsby-Fitzgerald-F-Scott-9781716075735.jpg", points: 45, condition: "Like New", genre: "Classic", location: "Lahore" },
  { id: 2, title: "To Kill a Mockingbird", author: "Harper Lee", image: "https://bfbooks.com/cdn/shop/files/To_Kill_a_Mockingbird_Harper_Lee_processed.jpg?v=1751405957&width=1920", points: 50, condition: "Good", genre: "Classic", location: "Karachi" },
  { id: 3, title: "1984", author: "George Orwell", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaZHuowZi2K6OB48JkLGolGrM1qcLnK6jdiw&s", points: 40, condition: "Fair", genre: "Dystopian", location: "Islamabad" },
  { id: 4, title: "Pride and Prejudice", author: "Jane Austen", image: "https://m.media-amazon.com/images/I/712P0p5cXIL._AC_UF1000,1000_QL80_.jpg", points: 35, condition: "Good", genre: "Romance", location: "Lahore" },
  { id: 5, title: "Moby-Dick", author: "Herman Melville", image: "https://readings-storage.s3.ap-south-1.amazonaws.com/images/9780785846215.webp", points: 30, condition: "Worn", genre: "Adventure", location: "Peshawar" },
  { id: 6, title: "The Hobbit", author: "J.R.R. Tolkien", image: "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1439554741i/26098210.jpg", points: 60, condition: "Like New", genre: "Fantasy", location: "Karachi" },
  { id: 7, title: "War and Peace", author: "Leo Tolstoy", image: "", points: 55, condition: "Good", genre: "Historical", location: "Lahore" },
  { id: 8, title: "The Catcher in the Rye", author: "J.D. Salinger", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDo1iXWjJW35glflGfFF4kj68yrJevSvc7h7NY58k63g&s", points: 42, condition: "Good", genre: "Fiction", location: "Islamabad" },
  { id: 9, title: "Brave New World", author: "Aldous Huxley", image: "https://www.theliterarygiftcompany.com/cdn/shop/products/brave-new-world-poster-633-p.jpeg?v=1491915748", points: 38, condition: "Fair", genre: "Dystopian", location: "Lahore" },
  { id: 10, title: "Jane Eyre", author: "Charlotte Brontë", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEmP9waLz5UXKKEHudiAtHeSOukJ22jqH3nY8BNxQw7Q&s", points: 44, condition: "Like New", genre: "Classic", location: "Rawalpindi" },
  { id: 11, title: "The Lord of the Rings", author: "J.R.R. Tolkien", image: "https://images.fathomevents.com/image/upload/w_1200,dpr_2,f_auto,q_auto/v1764089981/Events/2026/2107/1000x1480_LOTR_ROTK_FE_Ticketing.jpg.jpg", points: 70, condition: "Good", genre: "Fantasy", location: "Karachi" },
  { id: 12, title: "The Alchemist", author: "Paulo Coelho", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYuzKZYP9UJFEVkwebS_3HsahePk9y8FmLUQ&s", points: 48, condition: "Like New", genre: "Philosophy", location: "Lahore" },
];

export const forums = [
  { id: 1, title: "The Midnight Library – Chapter Debates", book: "The Midnight Library", author: "Matt Haig", posts: 142, members: 89, tags: ["Fiction", "Philosophy"], lastActivity: "2h ago" },
  { id: 2, title: "Atomic Habits Reading Group", book: "Atomic Habits", author: "James Clear", posts: 98, members: 204, tags: ["Self-Help", "Productivity"], lastActivity: "5h ago" },
  { id: 3, title: "1984 Interpretations & Modern Parallels", book: "1984", author: "George Orwell", posts: 317, members: 156, tags: ["Dystopian", "Politics"], lastActivity: "1h ago" },
  { id: 4, title: "The Alchemist – Spiritual Journey Discussion", book: "The Alchemist", author: "Paulo Coelho", posts: 203, members: 118, tags: ["Philosophy", "Inspiration"], lastActivity: "3h ago" },
];

export const transactions = [
  { id: 1, type: "earned", book: "The Hobbit", points: 60, date: "Apr 08, 2026", status: "completed" },
  { id: 2, type: "spent", book: "Atomic Habits", points: -55, date: "Apr 06, 2026", status: "completed" },
  { id: 3, type: "earned", book: "1984", points: 40, date: "Apr 03, 2026", status: "completed" },
  { id: 4, type: "spent", book: "The Alchemist", points: -48, date: "Mar 29, 2026", status: "pending" },
];

export const exchangeStalls = [
  { id: 1, name: "Liberty Book Corner", owner: "Ahmed K.", lat: 31.558, lng: 74.357, books: 24, open: true },
  { id: 2, name: "Gulberg Reads", owner: "Sara M.", lat: 31.512, lng: 74.343, books: 18, open: true },
  { id: 3, name: "DHA Bookshelf", owner: "Usman T.", lat: 31.481, lng: 74.393, books: 31, open: false },
];

export const qrHistory = [
  { city: "Karachi", reader: "Anonymous", duration: "8 days", note: "A masterpiece. Changed my perspective on simplicity.", date: "Jan 2026" },
  { city: "Lahore", reader: "BookLover92", duration: "12 days", note: "Read during a train journey. Highly recommend chapter 9.", date: "Feb 2026" },
  { city: "Islamabad", reader: "Anonymous", duration: "5 days", note: "Couldn't put it down. The ending surprised me.", date: "Mar 2026" },
];

export const messages = [
  { id: 1, user: "Ahmed K.", avatar: "A", lastMsg: "Is the book still available?", time: "2m", unread: 2 },
  { id: 2, user: "Sara M.", avatar: "S", lastMsg: "Thanks for the exchange!", time: "1h", unread: 0 },
  { id: 3, user: "Usman T.", avatar: "U", lastMsg: "Can we meet at Liberty?", time: "3h", unread: 1 },
];