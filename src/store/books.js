const books = [
  {
    id: 1,
    title: 'To Kill a Mockingbird',
    author: 'Harper Lee',
    price: 1200,
    image: 'https://m.media-amazon.com/images/I/81aY1lxk+9L._AC_UY436_FMwebp_QL65_.jpg',
    category: 'Fiction',
    description: 'The unforgettable novel of a childhood in a sleepy Southern town and the crisis of conscience that rocked it. Set in the mid-1930s Alabama, this classic story focuses on the Finch family.',
    rating: 4.8,
    available: true,
    featured: true
  },
  {
    id: 2,
    title: '1984',
    author: 'George Orwell',
    price: 1285,
    image: 'https://m.media-amazon.com/images/I/91VsLImyJgL._AC_UL640_FMwebp_QL65_.jpg',
    category: 'Science Fiction',
    description: 'Winston Smith wrestles with oppression in Oceania, a place where the Party scrutinizes human actions with ever-watchful Big Brother. Defying a ban on individuality, Winston dares to express his thoughts in a diary and pursues a relationship with Julia.',
    rating: 4.7,
    available: true,
    featured: true
  },
  {
    id: 3,
    title: 'Pride and Prejudice',
    author: 'Jane Austen',
    price: 799,
    image: 'https://m.media-amazon.com/images/I/71GspoOXkeL._AC_UY436_FMwebp_QL65_.jpg',
    category: 'Romance',
    description: 'Since its immediate success in 1813, Pride and Prejudice has remained one of the most popular novels in the English language. Jane Austen called this brilliant novel "her own darling child."',
    rating: 4.5,
    available: true,
    featured: false
  },
  {
    id: 4,
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    price: 483,
    image: 'https://m.media-amazon.com/images/I/71X7HnBk6VL._AC_UY436_FMwebp_QL65_.jpg',
    category: 'Fiction',
    description: 'The Great Gatsby, F. Scott Fitzgerald\'s third book, stands as the supreme achievement of his career. This exemplary novel of the Jazz Age has been acclaimed by generations of readers.',
    rating: 4.3,
    available: true,
    featured: true
  },
  {
    id: 5,
    title: 'Moby Dick',
    author: 'Herman Melville',
    price: 340,
    image: 'https://m.media-amazon.com/images/I/91LBt4KFGEL._AC_UL640_FMwebp_QL65_.jpg',
    category: 'Adventure',
    description: 'First published in 1851, Melville\'s masterpiece is, in Elizabeth Hardwick\'s words, "the greatest novel in American literature."',
    rating: 4.2,
    available: true,
    featured: false
  },
  {
    id: 6,
    title: 'The Catcher in the Rye',
    author: 'J.D. Salinger',
    price: 605,
    image: 'https://m.media-amazon.com/images/I/71nXPGovoTL._AC_UL640_FMwebp_QL65_.jpg',
    category: 'Fiction',
    description: 'The hero-narrator of The Catcher in the Rye is an ancient child of sixteen, a native New Yorker named Holden Caulfield. Through circumstances that tend to preclude adult, secondhand description, he leaves his prep school in Pennsylvania and goes underground in New York City for three days.',
    rating: 4.1,
    available: true,
    featured: false
  },
  {
    id: 7,
    title: 'War and Peace',
    author: 'Leo Tolstoy',
    price: 1321,
    image: 'https://m.media-amazon.com/images/I/81W6BFaJJWL._AC_UL640_FMwebp_QL65_.jpg',
    category: 'Historical Fiction',
    description: 'Epic in scale, War and Peace delineates in graphic detail events leading up to Napoleon\'s invasion of Russia, and the impact of the Napoleonic era on Tsarist society, as seen through the eyes of five Russian aristocratic families.',
    rating: 4.7,
    available: true,
    featured: false
  },
  {
    id: 8,
    title: 'The Hobbit',
    author: 'J.R.R. Tolkien',
    price: 1023,
    image: 'https://m.media-amazon.com/images/I/61Ng-W9EhBL._AC_UY436_FMwebp_QL65_.jpg',
    category: 'Fantasy',
    description: 'A glorious account of a magnificent adventure, filled with suspense and seasoned with a quiet humor that is irresistible. All those, young or old, who love a fine adventurous tale, beautifully told, will take The Hobbit to their hearts.',
    rating: 4.8,
    available: true,
    featured: true
  },
  {
    id: 9,
    title: 'The Divine Comedy',
    author: 'Dante Alighieri',
    price: 1200,
    image: 'https://m.media-amazon.com/images/I/91YRDOLJNGL._AC_UL640_FMwebp_QL65_.jpg',
    category: 'Poetry',
    description: 'The Divine Comedy describes Dante\'s descent into Hell with Virgil as a guide; his ascent of Mount Purgatory and encounter with his dead love, Beatrice; and finally, his arrival in Heaven.',
    rating: 4.5,
    available: true,
    featured: false
  },
  {
    id: 10,
    title: 'Crime and Punishment',
    author: 'Fyodor Dostoevsky',
    price: 999,
    image: 'https://m.media-amazon.com/images/I/51Vg24nKbPL._AC_UL640_FMwebp_QL65_.jpg',
    category: 'Fiction',
    description: 'Raskolnikov, a destitute and desperate former student, wanders through the slums of St Petersburg and commits a random murder without remorse or regret. He imagines himself to be a great man, a Napoleon: acting for a higher purpose beyond conventional moral law.',
    rating: 4.6,
    available: true,
    featured: false
  },
  {
    id: 11,
    title: 'The Lord of the Rings',
    author: 'J.R.R. Tolkien',
    price: 3599,
    image: 'https://m.media-amazon.com/images/I/91K8TYMlpfL._AC_UY436_FMwebp_QL65_.jpg',
    category: 'Fantasy',
    description: 'One Ring to rule them all, One Ring to find them, One Ring to bring them all and in the darkness bind them. In ancient times the Rings of Power were crafted by the Elven-smiths, and Sauron, the Dark Lord, forged the One Ring, filling it with his own power so that he could rule all others.',
    rating: 4.9,
    available: true,
    featured: true
  },
  {
    id: 12,
    title: 'Don Quixote',
    author: 'Miguel de Cervantes',
    price: 1375,
    image: 'https://m.media-amazon.com/images/I/81kIVgGfc+L._AC_UL640_FMwebp_QL65_.jpg',
    category: 'Classic',
    description: 'Alonso Quixano, a retired country gentleman in his fifties, lives in an unnamed section of La Mancha with his niece and a housekeeper. He has become obsessed with books of chivalry, and believes their every word to be true, despite the fact that many of the events in them are clearly impossible.',
    rating: 4.4,
    available: true,
    featured: false
  },
  {
    id: 13,
    title: 'Anna Karenina',
    author: 'Leo Tolstoy',
    price: 680,
    image: 'https://m.media-amazon.com/images/I/61RXEyMctkL._AC_UL640_FMwebp_QL65_.jpg',
    category: 'Fiction',
    description: 'Anna Karenina tells of the doomed love affair between the sensuous and rebellious Anna and the dashing officer, Count Vronsky. Tragedy unfolds as Anna rejects her passionless marriage and thereby exposes herself to the hypocrisies of society.',
    rating: 4.6,
    available: true,
    featured: false
  },
  {
    id: 14,
    title: 'Brave New World',
    author: 'Aldous Huxley',
    price: 890,
    image: 'https://m.media-amazon.com/images/I/71GNqqXuN3L._AC_UL640_FMwebp_QL65_.jpg',
    category: 'Science Fiction',
    description: 'Brave New World is a dystopian novel written in 1931. It is set in a future World State in which citizens are environmentally engineered into an intelligence-based social hierarchy.',
    rating: 4.3,
    available: true,
    featured: false
  },
  {
    id: 15,
    title: 'The Odyssey',
    author: 'Homer',
    price: 970,
    image: 'https://m.media-amazon.com/images/I/81g0AATkO9L._AC_UL640_FMwebp_QL65_.jpg',
    category: 'Epic',
    description: 'The Odyssey is one of two major ancient Greek epic poems attributed to Homer. The "Odyssey" is partly a sequel to the "Iliad", and is fundamental to the modern Western canon.',
    rating: 4.5,
    available: true,
    featured: false
  },
  {
    id: 16,
    title: 'The Brothers Karamazov',
    author: 'Fyodor Dostoevsky',
    price: 1299,
    image: 'https://m.media-amazon.com/images/I/81XwoNcQbwS._AC_UL640_FMwebp_QL65_.jpg',
    category: 'Fiction',
    description: 'The Brothers Karamazov is a passionate philosophical novel set in 19th-century Russia, that enters deeply into the ethical debates of God, free will, and morality.',
    rating: 4.7,
    available: true,
    featured: false
  },
  {
    id: 17,
    title: 'Wuthering Heights',
    author: 'Emily Brontë',
    price: 750,
    image: 'https://m.media-amazon.com/images/I/81T34Sem-tL._AC_UL640_FMwebp_QL65_.jpg',
    category: 'Romance',
    description: 'Wuthering Heights is Emily Brontë\'s only novel. Written between October 1845 and June 1846, Wuthering Heights was published in 1847 under the pseudonym "Ellis Bell"; Brontë died the following year, aged 30.',
    rating: 4.2,
    available: true,
    featured: false
  },
  {
    id: 18,
    title: 'The Iliad',
    author: 'Homer',
    price: 1525,
    image: 'https://m.media-amazon.com/images/I/71FVVdj9w4L._AC_UL640_FMwebp_QL65_.jpg',
    category: 'Epic',
    description: 'The Iliad is an ancient Greek epic poem in dactylic hexameter, traditionally attributed to Homer. Set during the Trojan War, the ten-year siege of the city of Troy (Ilium) by a coalition of Greek states.',
    rating: 4.4,
    available: true,
    featured: false
  },
  {
    id: 19,
    title: 'Jane Eyre',
    author: 'Charlotte Brontë',
    price: 1500,
    image: 'https://m.media-amazon.com/images/I/81DlCcNrsPL._AC_UY436_FMwebp_QL65_.jpg',
    category: 'Romance',
    description: 'Jane Eyre follows the experiences of its eponymous heroine, including her growth to adulthood and her love for Mr. Rochester, the brooding master of Thornfield Hall.',
    rating: 4.6,
    available: true,
    featured: true
  },
  {
    id: 20,
    title: 'The Count of Monte Cristo',
    author: 'Alexandre Dumas',
    price: 1499,
    image: 'https://m.media-amazon.com/images/I/81cHjc6E43L._AC_UY436_FMwebp_QL65_.jpg',
    category: 'Adventure',
    description: 'In The Count of Monte Cristo, Edmond Dantès is betrayed by his enemies and thrown into a secret dungeon on an island fortress. He escapes and, using a hidden treasure, transforms himself into the mysterious Count of Monte Cristo, and systematically destroys those who betrayed him.',
    rating: 4.8,
    available: true,
    featured: false
  },
  {
    id: 21,
    title: 'Great Expectations',
    author: 'Charles Dickens',
    price: 950,
    image: 'https://m.media-amazon.com/images/I/91YGY4wTVCL._AC_UY436_FMwebp_QL65_.jpg',
    category: 'Fiction',
    description: 'Great Expectations is the thirteenth novel by Charles Dickens and his penultimate completed novel, which depicts the education of an orphan nicknamed Pip.',
    rating: 4.3,
    available: true,
    featured: false
  },
  {
    id: 22,
    title: 'One Hundred Years of Solitude',
    author: 'Gabriel García Márquez',
    price: 890,
    image: 'https://m.media-amazon.com/images/I/81YaMSbhEVL._AC_UL640_FMwebp_QL65_.jpg',
    category: 'Magical Realism',
    description: 'One Hundred Years of Solitude tells the story of the rise and fall, birth and death of the mythical town of Macondo through the history of the Buendía family.',
    rating: 4.7,
    available: true,
    featured: true
  },
  {
    id: 23,
    title: 'The Picture of Dorian Gray',
    author: 'Oscar Wilde',
    price: 799,
    image: 'https://m.media-amazon.com/images/I/61FdXlJX0-L._AC_UL640_FMwebp_QL65_.jpg',
    category: 'Gothic',
    description: 'Enthralled by his own exquisite portrait, Dorian Gray exchanges his soul for eternal youth and beauty. Influenced by his friend Lord Henry Wotton, he is drawn into a corrupt double life, indulging his desires in secret while remaining a gentleman in the eyes of polite society.',
    rating: 4.4,
    available: true,
    featured: false
  },
  {
    id: 24,
    title: 'The Grapes of Wrath',
    author: 'John Steinbeck',
    price: 981,
    image: 'https://m.media-amazon.com/images/I/71Xe9Hmy16L._AC_UY436_FMwebp_QL65_.jpg',
    category: 'Fiction',
    description: 'The Grapes of Wrath is set during the Great Depression and focuses on a poor family of tenant farmers driven from their home by drought, economic hardship, and changes in the agriculture industry.',
    rating: 4.5,
    available: true,
    featured: false
  },
  {
    id: 25,
    title: 'Frankenstein',
    author: 'Mary Shelley',
    price: 500,
    image: 'https://m.media-amazon.com/images/I/91HvX42+65L._AC_UY436_FMwebp_QL65_.jpg',
    category: 'Gothic',
    description: 'Mary Shelley\'s Frankenstein; or, The Modern Prometheus is a Gothic novel that tells the story of Victor Frankenstein, a young scientist who creates a hideous, sapient creature in an unorthodox scientific experiment.',
    rating: 4.3,
    available: true,
    featured: false
  },
  {
    id: 26,
    title: 'The Three Musketeers',
    author: 'Alexandre Dumas',
    price: 999,
    image: 'https://m.media-amazon.com/images/I/81Z9MND-KJL._AC_UY436_FMwebp_QL65_.jpg',
    category: 'Adventure',
    description: 'The Three Musketeers is a novel by Alexandre Dumas. Set in the 17th century, it recounts the adventures of a young man named d\'Artagnan after he leaves home to travel to Paris, to join the Musketeers of the Guard.',
    rating: 4.6,
    available: true,
    featured: false
  },
  {
    id: 27,
    title: 'Les Misérables',
    author: 'Victor Hugo',
    price: 1570,
    image: 'https://m.media-amazon.com/images/I/811Htj5rRkL._AC_UY436_FMwebp_QL65_.jpg',
    category: 'Historical Fiction',
    description: 'Les Misérables is a French historical novel by Victor Hugo, first published in 1862, that is considered one of the greatest novels of the 19th century.',
    rating: 4.7,
    available: true,
    featured: false
  },
  {
    id: 28,
    title: 'Dracula',
    author: 'Bram Stoker',
    price: 2413,
    image: 'https://m.media-amazon.com/images/I/91xwlp1gLBL._AC_UY436_FMwebp_QL65_.jpg',
    category: 'Gothic',
    description: 'Dracula is an 1897 Gothic horror novel by Irish author Bram Stoker. It introduced the character of Count Dracula and established many conventions of subsequent vampire fantasy.',
    rating: 4.4,
    available: true,
    featured: false
  },
  {
    id: 29,
    title: 'Alice\'s Adventures in Wonderland',
    author: 'Lewis Carroll',
    price: 1428,
    image: 'https://m.media-amazon.com/images/I/81Yg3oFfy-L._AC_UY436_FMwebp_QL65_.jpg',
    category: 'Fantasy',
    description: 'Alice\'s Adventures in Wonderland is an 1865 novel by English author Lewis Carroll. It tells of a young girl named Alice, who falls through a rabbit hole into a subterranean fantasy world populated by peculiar, anthropomorphic creatures.',
    rating: 4.5,
    available: true,
    featured: false
  },
  {
    id: 30,
    title: 'The Old Man and the Sea',
    author: 'Ernest Hemingway',
    price: 968,
    image: 'https://m.media-amazon.com/images/I/81K+1PTwQ2L._AC_UL640_FMwebp_QL65_.jpg',
    category: 'Fiction',
    description: 'The Old Man and the Sea is a short novel written by the American author Ernest Hemingway in 1951 in Bimini, Bahamas, and published in 1952. It was the last major work of fiction by Hemingway that was published during his lifetime.',
    rating: 4.3,
    available: true,
    featured: false
  },
  {
    id: 31,
    title: 'The Art of War',
    author: 'Sun Tzu',
    price: 1317,
    image: 'https://m.media-amazon.com/images/I/71xJdnydklL._AC_UL640_FMwebp_QL65_.jpg',
    category: 'Philosophy',
    description: 'The Art of War is an ancient Chinese military treatise dating from the Late Spring and Autumn Period. The work, which is attributed to the ancient Chinese military strategist Sun Tzu, is composed of 13 chapters.',
    rating: 4.8,
    available: true,
    featured: true
  },
  {
    id: 32,
    title: 'The Prince',
    author: 'Niccolò Machiavelli',
    price: 725,
    image: 'https://m.media-amazon.com/images/I/51KV9QHeUBL._AC_UY436_FMwebp_QL65_.jpg',
    category: 'Philosophy',
    description: 'The Prince is a 16th-century political treatise written by Italian diplomat and political theorist Niccolò Machiavelli as an instruction guide for new princes and royals.',
    rating: 4.5,
    available: true,
    featured: false
  },
  {
    id: 33,
    title: 'Madame Bovary',
    author: 'Gustave Flaubert',
    price: 1200,
    image: 'https://m.media-amazon.com/images/I/71gay59C7IL._AC_UL640_FMwebp_QL65_.jpg',
    category: 'Fiction',
    description: 'Madame Bovary is the debut novel of French writer Gustave Flaubert, published in 1856. The story focuses on a doctor\'s wife, Emma Bovary, who has adulterous affairs and lives beyond her means in order to escape the banalities and emptiness of provincial life.',
    rating: 4.2,
    available: true,
    featured: false
  }
]

export default books
