const moviesdata = [
    {
        id: 1,
        category: 'movie',
        name: 'Deadpool & Wolverine',
        description: 'Deadpool travels back in time with the intention of recruiting Wolverine in battle against a common enemy: Paradox.',
        releaseDate: 
        {
            month: "July",
            year: 2024
        },
        director: 'Shawn Levy',
        genre: 'Superhero, action, black humor, comedy, adventure',
        ageRate: 'R',
        trailer: 'https://www.youtube.com/watch?v=73_1biulkYk',
        images:
        {
            poster1: 'https://cdn.marvel.com/content/1x/dp3_1sht_digital_srgb_ka_swords_v5_resized.jpg',
            poster2: 'https://m.media-amazon.com/images/M/MV5BZTk5ODY0MmQtMzA3Ni00NGY1LThiYzItZThiNjFiNDM4MTM3XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg',
            poster3: 'https://i.pinimg.com/736x/38/87/7f/38877f366b91e849052d78ecf248f986.jpg',
            posterH: 'https://www.joblo.com/wp-content/uploads/2024/06/deadpool_and_wolverine_posters_imax-1280x720.jpg',
        }
    },
    {
        id: 2,
        category: 'movie',
        name: 'Inside Out 2',
        description: 'Riley navigates through a new stage of her life as new emotions emerge, making things more complicated than ever.',
        releaseDate: 
        {
            month: "June",
            year: 2024
        },
        director: 'Kelsey Mann',
        genre: 'Animation, comedy, family, adventure, fantasy',
        ageRate: 'PG',
        trailer: 'https://www.youtube.com/watch?v=LEjhY15eCx0',
        images:
        {
            poster1: 'https://i.redd.it/li9lt5lrgcqc1.jpeg',
            poster2: 'https://mamasgeeky.com/wp-content/uploads/2024/05/Dolby-Poster-Inside-Out-2.jpeg',
            poster3: 'https://lumiere-a.akamaihd.net/v1/images/harbor_teaser_poster_united_kingdom_dc9a9914.jpeg?region=0,0,770,1100',
            posterH: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/846a9086-8a40-43e0-aa10-2fc7d6d73730/dhkrox9-099789c8-72d5-4783-b12d-3eb28cbf4eda.jpg/v1/fill/w_1280,h_721,q_75,strp/inside_out_2__2024__textless_poster__05_by_mintmovi3_dhkrox9-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzIxIiwicGF0aCI6IlwvZlwvODQ2YTkwODYtOGE0MC00M2UwLWFhMTAtMmZjN2Q2ZDczNzMwXC9kaGtyb3g5LTA5OTc4OWM4LTcyZDUtNDc4My1iMTJkLTNlYjI4Y2JmNGVkYS5qcGciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.Ez17GOJRiX4FkzX4gE7edoidyRDVvAl86z2KdhYUtqU',
        }
    },
    {
        id: 3,
        category: 'movie',
        name: 'The Garfield Movie',
        description: 'A lazy cat named Garfield causes mischief as his love for lasagna and hatred for Mondays get him into wild adventures.',
        releaseDate: 
        {
            month: "May",
            year: 2024
        },
        director: 'Mark Dindal',
        genre: 'Animation, comedy, family',
        ageRate: 'PG',
        trailer: 'https://www.youtube.com/watch?v=IeFWNtMo1Fs',
        images:
        {
            poster1: 'https://image.tmdb.org/t/p/original/p6AbOJvMQhBmffd0PIv0u8ghWeY.jpg',
            poster2: 'https://m.media-amazon.com/images/I/71BtMdFDTGL.jpg',
            poster3: 'https://assets.comicbook.com/2023/06/garfield-2024-poster-1280x720.jpg',
            posterH: 'https://i.ytimg.com/vi/IeFWNtMo1Fs/maxresdefault.jpg',
        }
    },
    {
        id: 4,
        category: 'movie',
        name: 'Wonka',
        description: 'The origin story of Willy Wonka and how he became the famous chocolatier we know today.',
        releaseDate: 
        {
            month: "December",
            year: 2023
        },
        director: 'Paul King',
        genre: 'Adventure, fantasy, musical',
        ageRate: 'PG',
        trailer: 'https://youtu.be/otNh9bTjXWg?si=Gb6WlGbUVDM3b0Ht',
        images:
        {
            poster1: 'https://m.media-amazon.com/images/I/91M3tCQaJPL.jpg',
            poster2: 'https://m.media-amazon.com/images/I/81fCjzKaBTL.jpg',
            poster3: 'https://image.tmdb.org/t/p/original/cDkMUi0i85qgjlRqq92k2yzRHA2.jpg',
            posterH: 'https://waghostwriter.com/wp-content/uploads/2024/01/WonkaLandscape-1200x800.jpg',
        }
    },
    {
        id: 5,
        category: 'movie',
        name: 'The Hunger Games: The Ballad of Songbirds & Snakes',
        description: 'A prequel that explores the early life of Coriolanus Snow and his rise to power in Panem.',
        releaseDate: 
        {
            month: "November",
            year: 2023
        },
        director: 'Francis Lawrence',
        genre: 'Action, drama, science fiction',
        ageRate: 'PG-13',
        trailer: 'https://www.youtube.com/watch?v=RDE6Uz73A7g',
        images:
        {
            poster1: 'https://m.media-amazon.com/images/I/81DOzFUMpSL.jpg',
            poster2: 'https://posterspy.com/wp-content/uploads/2023/05/SNOW-GOLDEN-POSTER.jpg',
            poster3: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/5a7382a8-7e17-48bb-9295-77dc9a4f446f/dg5pjwc-105a2ced-be3f-4d7d-8224-fbb11837ec55.jpg/v1/fill/w_1920,h_2989,q_75,strp/the_ballad_of_songbirds_and_snakes___poster_2_by_rosereystock_dg5pjwc-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzVhNzM4MmE4LTdlMTctNDhiYi05Mjk1LTc3ZGM5YTRmNDQ2ZlwvZGc1cGp3Yy0xMDVhMmNlZC1iZTNmLTRkN2QtODIyNC1mYmIxMTgzN2VjNTUuanBnIiwiaGVpZ2h0IjoiPD0yOTg5Iiwid2lkdGgiOiI8PTE5MjAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uud2F0ZXJtYXJrIl0sIndtayI6eyJwYXRoIjoiXC93bVwvNWE3MzgyYTgtN2UxNy00OGJiLTkyOTUtNzdkYzlhNGY0NDZmXC9yb3NlcmV5c3RvY2stNC5wbmciLCJvcGFjaXR5Ijo5NSwicHJvcG9ydGlvbnMiOjAuNDUsImdyYXZpdHkiOiJjZW50ZXIifX0.1dVjuHKwIlNEHlmDOcWxTrCBg9RW_cPpmUiTBUDgC5o',
            posterH: 'https://sportshub.cbsistatic.com/i/2023/04/27/05177ca4-daa9-4091-8b2b-7422d4df6c6b/the-hunger-games-the-ballad-of-songbirds-and-snakes.jpg',
        }
    },
    {
        id: 6,
        category: 'movie',
        name: 'Five Nights at Freddy\'s',
        description: 'A troubled security guard begins working at Freddy Fazbear\'s Pizza, where he discovers a terrifying secret.',
        releaseDate:
        {
            month: "October",
            year: 2023
        },
        director: 'Emma Tammi',
        genre: 'Horror, thriller',
        ageRate: 'PG-13',
        trailer: 'https://www.youtube.com/watch?v=FRffQncR1HQ',
        images:
        {
            poster1: 'https://sm.ign.com/ign_latam/gallery/f/five-night/five-nights-at-freddys-character-posters_ucuc.jpg',
            poster2: 'https://posterspy.com/wp-content/uploads/2023/05/FNAF-Movie-Poster-1.jpg',
            posterH: 'https://i0.wp.com/codigoespagueti.com/wp-content/uploads/2023/05/fnaf-poster-1.jpg',

        }
    },
    {
        id: 7,
        category: 'movie',
        name: 'The Boy and the Heron',
        description: 'A young boy embarks on a mystical journey guided by a talking heron, exploring life, death, and everything in between.',
        releaseDate: 
        {
            month: "July",
            year: 2023
        },
        director: 'Hayao Miyazaki',
        genre: 'Animation, drama, fantasy',
        ageRate: 'PG-13',
        trailer: 'https://www.youtube.com/watch?v=t5khm-VjEu4',
        images:
        {
            poster1: 'https://preview.redd.it/official-poster-for-hayao-miyazakis-the-boy-and-the-heron-v0-aywymvtucsub1.jpg?auto=webp&s=488a50a85766712acb0ab735f05c866520b0daa6',
            poster2: 'https://cdn.posteritati.com/posters/000/000/071/022/the-boy-and-the-heron-md-web.jpg',
            poster3: 'https://posterspy.com/wp-content/uploads/2024/02/The-Boy-The-Heron-2.jpg',
            posterH: 'https://es.gizmodo.com/app/uploads/2023/12/65a922cfa0e4e551717d80d8329fa09a.jpg',
        }
    },
    {
        id: 8,
        category: 'movie',
        name: 'Spider-Man: Across the Spider-Verse',
        description: 'Miles Morales embarks on a journey across the multiverse, teaming up with Gwen Stacy and other Spider-People to face a powerful new enemy.',
        releaseDate: 
        {
            month: "June",
            year: 2023
        },
        director: 'Joaquim Dos Santos, Kemp Powers, Justin K. Thompson',
        genre: 'Animation, action, adventure, superhero',
        ageRate: 'PG',
        trailer: 'https://www.youtube.com/watch?v=cqGjhVJWtEg',
        images:
        {
            poster1: 'https://m.media-amazon.com/images/M/MV5BNThiZjA3MjItZGY5Ni00ZmJhLWEwN2EtOTBlYTA4Y2E0M2ZmXkEyXkFqcGc@._V1_.jpg',
            poster2: 'https://i.ebayimg.com/00/s/MTYwMFgxMDc5/z/YM0AAOSwtJlkT8-9/$_57.JPG?set_id=880000500F',
            poster3: 'https://i.redd.it/jslybcg0gyr81.jpg',
            posterH: 'https://gizmodo.com/app/uploads/2023/01/461ef09d460b5b4e4365c2826823db04.jpg',
        }
    },
    {
        id: 9,
        category: 'movie',
        name: 'Guardians of the Galaxy Vol. 3',
        description: 'The Guardians face a new enemy while dealing with Rocket\'s past, as their bond is tested like never before.',
        releaseDate: 
        {
            month: "May",
            year: 2023
        },
        director: 'James Gunn',
        genre: 'Action, adventure, comedy, superhero',
        ageRate: 'PG-13',
        trailer: 'https://www.youtube.com/watch?v=JqcncLPi9zw',
        images:
        {
            poster1: 'https://image.tmdb.org/t/p/original/r2J02Z2OpNTctfOSN1Ydgii51I3.jpg',
            poster2: 'https://artofthemovies.co.uk/cdn/shop/products/IMG_0661-1_1024x1024@2x.jpg?v=1673620887',
            poster3: 'https://www.comingsoon.net/wp-content/uploads/sites/3/2023/04/guardians-of-the-galaxy-vol-3-poster-1.png?w=819',
            posterH: 'https://www.vitalthrills.com/wp-content/uploads/2023/04/guardians-of-the-galaxy-volume-3.jpg.webp',
        }
    },
    {
        id: 10,
        category: 'movie',
        name: 'The Super Mario Bros. Movie',
        description: 'Mario and Luigi must save Princess Peach and the Mushroom Kingdom from the evil Bowser in this animated adventure.',
        releaseDate: 
        {
            month: "April",
            year: 2023
        },
        director: 'Aaron Horvath, Michael Jelenic',
        genre: 'Animation, adventure, family, fantasy, comedy',
        ageRate: 'PG',
        trailer: 'https://www.youtube.com/watch?v=TnGl01FkMMo',
        images:
        {
            poster1: 'https://m.media-amazon.com/images/I/91zqGNzwk5L.jpg',
            poster2: 'https://posterspy.com/wp-content/uploads/2023/03/Mario-movie-poster.jpg',
            poster3: 'https://i.ebayimg.com/images/g/x9oAAOSwhKdj~RYh/s-l1200.jpg',
            posterH: 'https://static1.colliderimages.com/wordpress/wp-content/uploads/2022/10/super-mario-movie-poster.jpeg',
        }
    },
    {
        id: 11,
        category: 'movie',
        name: 'Puss in Boots: The Last Wish',
        description: 'Puss in Boots sets off on a journey to find the mythical Last Wish and restore his nine lives.',
        releaseDate: 
        {
            month: "December",
            year: 2022
        },
        director: 'Joel Crawford',
        genre: 'Animation, adventure, comedy, family, fantasy',
        ageRate: 'PG',
        trailer: 'https://www.youtube.com/watch?v=RqrXhwS33yc',
        images:
        {
            poster1: 'https://image.tmdb.org/t/p/original/zAWqAwEKRyklzXGEOQP6AssYnd9.jpg',
            poster2: 'https://m.media-amazon.com/images/I/61f0y511coL.jpg',
            poster3: 'https://image.tmdb.org/t/p/original/jGOSeZ5wzh1PSfjTgYkWGGM4DZp.jpg',
            posterH: 'https://i.ytimg.com/vi/d_tG6YF4EX4/maxresdefault.jpg',
        }
    },
    {
        id: 12,
        category: 'movie',
        name: 'Avatar: The Way of Water',
        description: 'Jake Sully and Neytiri must protect their family and their world as a new threat emerges from the depths of the ocean.',
        releaseDate: 
        {
            month: "December",
            year: 2022
        },
        director: 'James Cameron',
        genre: 'Action, adventure, fantasy, science fiction',
        ageRate: 'PG-13',
        trailer: 'https://www.youtube.com/watch?v=1f65r8BUZ5I',
        images:
        {
            poster1: 'https://m.media-amazon.com/images/I/81i4rPiuBML.jpg',
            poster2: 'https://filmartgallery.com/cdn/shop/products/Avatar-The-Way-of-Water-Vintage-Movie-Poster-Original-1-Sheet-27x41.jpg?v=1672117307',
            poster3: 'https://m.media-amazon.com/images/I/71DlLjNU0HL.jpg',
            posterH: 'https://static1.colliderimages.com/wordpress/wp-content/uploads/2022/11/avatar-the-way-of-water-poster.jpg',
        }
    },
    {
        id: 13,
        category: 'movie',
        name: 'Black Panther: Wakanda Forever',
        description: 'In the wake of King T’Challa’s death, the people of Wakanda must fight to protect their nation from intervening world powers and a new underwater threat.',
        releaseDate: 
        {
            month: "November",
            year: 2022
        },
        director: 'Ryan Coogler',
        genre: 'Action, adventure, superhero',
        ageRate: 'PG-13',
        trailer: 'https://www.youtube.com/watch?v=GDWauwXOoik',
        images:
        {
            poster1: 'https://www.mubis.es/media/users/7286/307233/poster-y-trailer-de-black-panther-wakanda-forever-original.jpg',
            poster2: 'https://i.redd.it/dj4o5b6ywcx91.jpg',
            poster3: 'https://i.ebayimg.com/images/g/PdYAAOSwztVj7qLN/s-l1200.jpg',
            posterH: 'https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/media/image/2023/02/black-panther-wakanda-forever-2948854.jpg?tf=3840x',
        }
    },
    {
        id: 14,
        category: 'movie',
        name: 'Guillermo del Toro\'s Pinocchio',
        description: 'Guillermo del Toro\'s stop-motion adaptation of Pinocchio, set in fascist Italy, follows the wooden boy on a journey of life and mortality.',
        releaseDate: 
        {
            month: "December",
            year: 2022
        },
        director: 'Guillermo del Toro',
        genre: 'Animation, drama, fantasy, musical',
        ageRate: 'PG',
        trailer: 'https://www.youtube.com/watch?v=-WgZ_IQU0Ks',
        images:
        {
            poster1: 'https://s3.amazonaws.com/nightjarprod/content/uploads/sites/130/2022/11/08133251/sY8LF0D10YhoVmCflxfQOCPOkeM.jpg',
            poster2: 'https://m.media-amazon.com/images/M/MV5BNjBhZjNkNDItODcxMS00ZGNmLTk3ODUtOGU1NWI3N2Q3YmM1XkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_FMjpg_UX1000_.jpg',
            poster3: 'https://i.pinimg.com/736x/34/e9/e7/34e9e73e5907bf36229b5daba96b882b.jpg',
            posterH: 'https://occ-0-8407-999.1.nflxso.net/dnm/api/v6/E8vDc_W8CLv7-yMQu8KMEC7Rrr8/AAAABclC4SZWYNQVDU3dNAJdmJ4r2Ix4xQYUYeopSJZYotEcJenrpjjPgSolBe_BLgSszDr_iNClo8WD2mM7c6SaURKj9srcYQDCwFwu.jpg?r=73d',
        }
    },
    {
        id: 15,
        category: 'movie',
        name: 'The Whale',
        description: 'A reclusive English teacher suffering from severe obesity attempts to reconnect with his estranged teenage daughter for one last chance at redemption.',
        releaseDate: 
        {
            month: "December",
            year: 2022
        },
        director: 'Darren Aronofsky',
        genre: 'Drama, psychological, tragedy',
        ageRate: 'R',
        trailer: 'https://www.youtube.com/watch?v=nWiQodhMvz4',
        images:
        {
            poster1: 'https://cdn11.bigcommerce.com/s-yzgoj/images/stencil/1280x1280/products/2892524/5970740/MOVAB78365__89209.1679612109.jpg?c=2',
            poster2: 'https://image.tmdb.org/t/p/original/7bq9uQXqDwO4Z1RPd4D3bbAk9Pl.jpg',
            posterH: 'https://i.ytimg.com/vi/dXyD1AgnK7s/maxresdefault.jpg',
        }
    },

]