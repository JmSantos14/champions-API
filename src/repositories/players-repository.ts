import { PlayerModel } from "../models/player-model";
import { StatisticsModel } from "../models/statistics-model";


const database: PlayerModel[] = [
    {
      "id": 1,
      "name": "Kylian Mbappé",
      "club": "Real Madrid",
      "nationality": "France",
      "position": "ST",
      "statistics": {
        "Overall": 91
      }
    },
    {
      "id": 2,
      "name": "Rodri",
      "club": "Manchester City",
      "nationality": "Spain",
      "position": "CDM",
      "statistics": {
        "Overall": 91
      }
    },
    {
      "id": 3,
      "name": "Erling Haaland",
      "club": "Manchester City",
      "nationality": "Norway",
      "position": "ST",
      "statistics": {
        "Overall": 91
      }
    },
    {
      "id": 4,
      "name": "Aitana Bonmatí",
      "club": "Barcelona",
      "nationality": "Spain",
      "position": "CM",
      "statistics": {
        "Overall": 91
      }
    },
    {
      "id": 5,
      "name": "Jude Bellingham",
      "club": "Real Madrid",
      "nationality": "England",
      "position": "CM",
      "statistics": {
        "Overall": 90
      }
    },
    {
      "id": 6,
      "name": "Alexia Putellas",
      "club": "Barcelona",
      "nationality": "Spain",
      "position": "CM",
      "statistics": {
        "Overall": 90
      }
    },
    {
      "id": 7,
      "name": "Vinícius Júnior",
      "club": "Real Madrid",
      "nationality": "Brazil",
      "position": "LW",
      "statistics": {
        "Overall": 90
      }
    },
    {
      "id": 8,
      "name": "Caroline Graham Hansen",
      "club": "Barcelona",
      "nationality": "Norway",
      "position": "RW",
      "statistics": {
        "Overall": 90
      }
    },
    {
      "id": 9,
      "name": "Kevin De Bruyne",
      "club": "Manchester City",
      "nationality": "Belgium",
      "position": "CM",
      "statistics": {
        "Overall": 90
      }
    },
    {
      "id": 10,
      "name": "Sam Kerr",
      "club": "Chelsea",
      "nationality": "Australia",
      "position": "ST",
      "statistics": {
        "Overall": 90
      }
    },
    {
      "id": 11,
      "name": "Harry Kane",
      "club": "Bayern Munich",
      "nationality": "England",
      "position": "ST",
      "statistics": {
        "Overall": 90
      }
    },
    {
      "id": 12,
      "name": "Lionel Messi",
      "club": "Inter Miami",
      "nationality": "Argentina",
      "position": "RW",
      "statistics": {
        "Overall": 88
      }
    },
    {
      "id": 13,
      "name": "Lautaro Martínez",
      "club": "Inter Milan",
      "nationality": "Argentina",
      "position": "ST",
      "statistics": {
        "Overall": 89
      }
    },
    {
      "id": 14,
      "name": "Virgil van Dijk",
      "club": "Liverpool",
      "nationality": "Netherlands",
      "position": "CB",
      "statistics": {
        "Overall": 89
      }
    },
    {
      "id": 15,
      "name": "Alisson",
      "club": "Liverpool",
      "nationality": "Brazil",
      "position": "GK",
      "statistics": {
        "Overall": 89
      }
    },
    {
      "id": 16,
      "name": "Thibaut Courtois",
      "club": "Real Madrid",
      "nationality": "Belgium",
      "position": "GK",
      "statistics": {
        "Overall": 89
      }
    },
    {
      "id": 17,
      "name": "Gianluigi Donnarumma",
      "club": "Paris Saint-Germain",
      "nationality": "Italy",
      "position": "GK",
      "statistics": {
        "Overall": 89
      }
    },
    {
      "id": 18,
      "name": "Ada Hegerberg",
      "club": "Lyon",
      "nationality": "Norway",
      "position": "ST",
      "statistics": {
        "Overall": 89
      }
    },
    {
      "id": 19,
      "name": "Mapi León",
      "club": "Barcelona",
      "nationality": "Spain",
      "position": "CB",
      "statistics": {
        "Overall": 89
      }
    },
    {
      "id": 20,
      "name": "Marc-André ter Stegen",
      "club": "Barcelona",
      "nationality": "Germany",
      "position": "GK",
      "statistics": {
        "Overall": 89
      }
    },
    {
      "id": 21,
      "name": "Debinha",
      "club": "KC Current",
      "nationality": "Brazil",
      "position": "CM",
      "statistics": {
        "Overall": 88
      }
    },
    {
      "id": 22,
      "name": "Kadidiatou Diani",
      "club": "Lyon",
      "nationality": "France",
      "position": "RW",
      "statistics": {
        "Overall": 88
      }
    },
    {
      "id": 23,
      "name": "Antoine Griezmann",
      "club": "Atlético Madrid",
      "nationality": "France",
      "position": "CF",
      "statistics": {
        "Overall": 88
      }
    },
    {
      "id": 24,
      "name": "Rúben Dias",
      "club": "Manchester City",
      "nationality": "Portugal",
      "position": "CB",
      "statistics": {
        "Overall": 88
      }
    },
    {
      "id": 25,
      "name": "Robert Lewandowski",
      "club": "Barcelona",
      "nationality": "Poland",
      "position": "ST",
      "statistics": {
        "Overall": 88
      }
    },
    {
      "id": 26,
      "name": "Patri Guijarro",
      "club": "Barcelona",
      "nationality": "Spain",
      "position": "CM",
      "statistics": {
        "Overall": 88
      }
    },
    {
      "id": 27,
      "name": "Federico Valverde",
      "club": "Real Madrid",
      "nationality": "Uruguay",
      "position": "CM",
      "statistics": {
        "Overall": 88
      }
    },
    {
        "id": 28,
        "name": "Bruno Fernandes",
        "club": "Manchester United",
        "nationality": "Portugal",
        "position": "CAM",
        "statistics": {
        "Overall": 87
        }
    },
    {
        "id": 29,
        "name": "Lamine Yamal",
        "club": "Barcelona",
        "nationality": "Spain",
        "position": "RW",
        "statistics": {
        "Overall": 81
        }
    },
    {
        "id": 30,
        "name": "Achraf Hakimi",
        "club": "Paris Saint-Germain",
        "nationality": "Morocco",
        "position": "RB",
        "statistics": {
        "Overall": 84
        }
    },
    {
        "id": 31,
        "name": "Raphinha",
        "club": "Barcelona",
        "nationality": "Brazil",
        "position": "LW",
        "statistics": {
        "Overall": 84
        }
    },
    {
        "id": 32,
        "name": "Jamal Musiala",
        "club": "Bayern Munich",
        "nationality": "Germany",
        "position": "CAM",
        "statistics": {
        "Overall": 87
        }
    },
    {
        "id": 33,
        "name": "Beth Mead",
        "club": "Arsenal",
        "nationality": "England",
        "position": "LW",
        "statistics": {
        "Overall": 88
        }
    },
    {
        "id": 34,
        "name": "Irene Paredes",
        "club": "Barcelona",
        "nationality": "Spain",
        "position": "CB",
        "statistics": {
        "Overall": 88
        }
    },
    {
        "id": 35,
        "name": "Ewa Pajor",
        "club": "Wolfsburg",
        "nationality": "Poland",
        "position": "ST",
        "statistics": {
        "Overall": 87
        }
    },
    {
        "id": 36,
        "name": "Jan Oblak",
        "club": "Atlético Madrid",
        "nationality": "Slovenia",
        "position": "GK",
        "statistics": {
        "Overall": 90
        }
    },
    {
        "id": 37,
        "name": "Christiane Endler",
        "club": "Lyon",
        "nationality": "Chile",
        "position": "GK",
        "statistics": {
        "Overall": 88
        }
    },
    {
        "id": 38,
        "name": "Katie McCabe",
        "club": "Arsenal",
        "nationality": "Ireland",
        "position": "LW",
        "statistics": {
        "Overall": 85
        }
    },
    {
        "id": 39,
        "name": "Nicolo Barella",
        "club": "Inter Milan",
        "nationality": "Italy",
        "position": "CM",
        "statistics": {
        "Overall": 88
        }
    },
    {
        "id": 40,
        "name": "Sakina Karchaoui",
        "club": "PSG",
        "nationality": "France",
        "position": "LB",
        "statistics": {
        "Overall": 87
        }
    },
    {
        "id": 41,
        "name": "Mariona Caldentey",
        "club": "Barcelona",
        "nationality": "Spain",
        "position": "RW",
        "statistics": {
        "Overall": 88
        }
    },
    {
        "id": 42,
        "name": "Julián Álvarez",
        "club": "Manchester City",
        "nationality": "Argentina",
        "position": "ST",
        "statistics": {
        "Overall": 85
        }
    },
    {
        "id": 43,
        "name": "Lindsey Horan",
        "club": "NWSL",
        "nationality": "USA",
        "position": "CM",
        "statistics": {
        "Overall": 90
        }
    },
    {
      "id": 44,
      "name": "Mohamed Salah",
      "club": "Liverpool",
      "nationality": "Egypt",
      "position": "RW",
      "statistics": {
        "Overall": 89
      }
    },
    {
      "id": 45,
      "name": "Martin Ødegaard",
      "club": "Arsenal",
      "nationality": "Norway",
      "position": "CM",
      "statistics": {
        "Overall": 89
      }
    },
    {
      "id": 46,
      "name": "Marie Katoto",
      "club": "Paris Saint-Germain",
      "nationality": "France",
      "position": "ST",
      "statistics": {
        "Overall": 88
      }
    },
    {
      "id": 47,
      "name": "Sophia Smith",
      "club": "Portland Thorns",
      "nationality": "USA",
      "position": "ST",
      "statistics": {
        "Overall": 89
      }
    },
    {
      "id": 48,
      "name": "Bernardo Silva",
      "club": "Manchester City",
      "nationality": "Portugal",
      "position": "CM",
      "statistics": {
        "Overall": 88
      }
    },
    {
      "id": 49,
      "name": "Neymar Jr",
      "club": "Al Hilal",
      "nationality": "Brazil",
      "position": "LW",
      "statistics": {
        "Overall": 87
      }
    },
    {
      "id": 50,
      "name": "Cristiano Ronaldo",
      "club": "Al Nassr",
      "nationality": "Portugal",
      "position": "ST",
      "statistics": {
        "Overall": 86
      }
    }
  ]
  

export const findAllPlayers = async (): Promise<PlayerModel[]> => {
    return database;
}

export const findPlayerById = async (
    id:number
): Promise<PlayerModel | undefined> => {
    return database.find((player) => player.id === id);
}

export const insertPlayer = async (player:PlayerModel) => {
  database.push()
};

export const deleteOnePlayer = async (id: number) => {
  const index = database.findIndex((p) => p.id === id);

  if (index !== -1){
    database.splice(index, 1)
    return true
  }
  return false
}

export const findAndModifyPlayer = async (id: number, statistics:StatisticsModel): Promise<PlayerModel> => {
  const playerIndex = database.findIndex(p => p.id === id)

  if (playerIndex !== -1){
    database[playerIndex].statistics = statistics
  }

  return database[playerIndex]
}