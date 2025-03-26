const tracks = [
  {
    "date": "2024-04-28",
    "city": "Seoul",
    "country": "Korea",
    "flag": "🇰🇷",
    "lat": "37.5544195428278",
    "lng": "-233.00939226",
    "id": "1"
  },
  {
    "date": "2024-04-29",
    "city": "Vancouver",
    "country": "Canada",
    "flag": "🇨🇦",
    "lat": "49.2796603533452",
    "lng": "-123.123562998208",
    "id": "2"
  },
  {
    "date": "2024-08-16",
    "city": "Joffre Lake",
    "country": "Canada",
    "flag": "🇨🇦",
    "lat": "50.3484796994622",
    "lng": "-122.478821027274",
    "id": "3"
  },
  {
    "date": "2024-08-16",
    "city": "Whistler",
    "country": "Canada",
    "flag": "🇨🇦",
    "lat": "50.1159217161507",
    "lng": "-122.954016563136",
    "id": "4"
  },
  {
    "date": "2024-08-16",
    "city": "Vancouver",
    "country": "Canada",
    "flag": "🇨🇦",
    "lat": "49.2796603533452",
    "lng": "-123.123562998208",
    "id": "5"
  },
  {
    "date": "2024-08-27",
    "city": "Seattle",
    "country": "USA",
    "flag": "🇺🇸",
    "lat": "47.6109115956694",
    "lng": "-122.33362763568",
    "id": "6"
  },
  {
    "date": "2024-08-28",
    "city": "New York",
    "country": "USA",
    "flag": "🇺🇸",
    "lat": "40.7204468948152",
    "lng": "-74.0035491929461",
    "id": "7"
  },
  {
    "date": "2024-08-31",
    "city": "Boston",
    "country": "USA",
    "flag": "🇺🇸",
    "lat": "42.3552815494616",
    "lng": "-71.0562064082999",
    "id": "8"
  },
  {
    "date": "2024-09-07",
    "city": "Vancouver",
    "country": "Canada",
    "flag": "🇨🇦",
    "lat": "49.2796603533452",
    "lng": "-123.123562998208",
    "id": "9"
  },
  {
    "date": "2024-09-24",
    "city": "Calgary",
    "country": "Canada",
    "flag": "🇨🇦",
    "lat": "51.0469096940761",
    "lng": "-114.075580340426",
    "id": "10"
  },
  {
    "date": "2024-09-25",
    "city": "Banff National Park",
    "country": "Canada",
    "flag": "🇨🇦",
    "lat": "51.4937826603243",
    "lng": "-115.92622188901",
    "id": "11"
  },
  {
    "date": "2024-09-27",
    "city": "Vancouver",
    "country": "Canada",
    "flag": "🇨🇦",
    "lat": "49.2796603533452",
    "lng": "-123.123562998208",
    "id": "12"
  },
  {
    "date": "2024-10-07",
    "city": "Toronto",
    "country": "Canada",
    "flag": "🇨🇦",
    "lat": "43.6436357743366",
    "lng": "-79.3945476803301",
    "id": "13"
  },
  {
    "date": "2024-10-07",
    "city": "Niagara Falls",
    "country": "Canada",
    "flag": "🇨🇦",
    "lat": "43.0856158452861",
    "lng": "-79.0871735991087",
    "id": "14"
  },
  {
    "date": "2024-10-07",
    "city": "Toronto",
    "country": "Canada",
    "flag": "🇨🇦",
    "lat": "43.6436357743366",
    "lng": "-79.3945476803301",
    "id": "15"
  },
  {
    "date": "2024-10-09",
    "city": "Montréal",
    "country": "Canada",
    "flag": "🇨🇦",
    "lat": "45.5119289073486",
    "lng": "-73.5663143513421",
    "id": "16"
  },
  {
    "date": "2024-10-09",
    "city": "Québec",
    "country": "Canada",
    "flag": "🇨🇦",
    "lat": "46.8142783076314",
    "lng": "-71.2124024993547",
    "id": "17"
  },
  {
    "date": "2024-10-11",
    "city": "Montréal",
    "country": "Canada",
    "flag": "🇨🇦",
    "lat": "45.5119289073486",
    "lng": "-73.5663143513421",
    "id": "18"
  },
  {
    "date": "2024-10-12",
    "city": "Vancouver",
    "country": "Canada",
    "flag": "🇨🇦",
    "lat": "49.2796603533452",
    "lng": "-123.123562998208",
    "id": "19"
  },
  {
    "date": "2024-11-26",
    "city": "Boston",
    "country": "USA",
    "flag": "🇺🇸",
    "lat": "42.3552815494616",
    "lng": "-71.0562064082999",
    "id": "20"
  },
  {
    "date": "2024-12-03",
    "city": "Vancouver",
    "country": "Canada",
    "flag": "🇨🇦",
    "lat": "49.2796603533452",
    "lng": "-123.123562998208",
    "id": "21"
  },
  {
    "date": "2025-01-16",
    "city": "Yellowknife",
    "country": "Canada",
    "flag": "🇨🇦",
    "lat": "62.4554745153287",
    "lng": "-114.370544564045",
    "id": "22"
  },
  {
    "date": "2025-01-19",
    "city": "Vancouver",
    "country": "Canada",
    "flag": "🇨🇦",
    "lat": "49.2796603533452",
    "lng": "-123.123562998208",
    "id": "23"
  },
  {
    "date": "2025-01-23",
    "city": "Whistler",
    "country": "Canada",
    "flag": "🇨🇦",
    "lat": "50.1159217161507",
    "lng": "-122.954016563136",
    "id": "24"
  },
  {
    "date": "2025-01-23",
    "city": "Vancouver",
    "country": "Canada",
    "flag": "🇨🇦",
    "lat": "49.2796603533452",
    "lng": "-123.123562998208",
    "id": "25"
  },
  {
    "date": "2025-01-29",
    "city": "Vancouver",
    "country": "Canada",
    "flag": "🇨🇦",
    "lat": "49.2796603533452",
    "lng": "-123.123562998208",
    "id": "26"
  },
  {
    "date": "2025-01-30",
    "city": "Mexico City",
    "country": "Mexico",
    "flag": "🇲🇽",
    "lat": "19.4379593797547",
    "lng": "-99.1312331254851",
    "id": "27"
  },
  {
    "date": "2025-01-30",
    "city": "Guanajuato",
    "country": "Mexico",
    "flag": "🇲🇽",
    "lat": "21.0192132306132",
    "lng": "-101.258343855532",
    "id": "28"
  },
  {
    "date": "2025-02-01",
    "city": "San Miguel de Allende",
    "country": "Mexico",
    "flag": "🇲🇽",
    "lat": "20.915030376214",
    "lng": "-100.744642964875",
    "id": "29"
  },
  {
    "date": "2025-02-02",
    "city": "Queretaro",
    "country": "Mexico",
    "flag": "🇲🇽",
    "lat": "20.5888207305212",
    "lng": "-100.388839315971",
    "id": "30"
  },
  {
    "date": "2025-02-02",
    "city": "Ixmiquilpan",
    "country": "Mexico",
    "flag": "🇲🇽",
    "lat": "20.4831429797886",
    "lng": "-99.2163336749433",
    "id": "31"
  },
  {
    "date": "2025-02-03",
    "city": "Tolantongo",
    "country": "Mexico",
    "flag": "🇲🇽",
    "lat": "20.6486491657715",
    "lng": "-98.9946963502519",
    "id": "32"
  },
  {
    "date": "2025-02-03",
    "city": "Ixmiquilpan",
    "country": "Mexico",
    "flag": "🇲🇽",
    "lat": "20.4831429797886",
    "lng": "-99.2163336749433",
    "id": "33"
  },
  {
    "date": "2025-02-04",
    "city": "Queretaro",
    "country": "Mexico",
    "flag": "🇲🇽",
    "lat": "20.5888207305212",
    "lng": "-100.388839315971",
    "id": "34"
  },
  {
    "date": "2025-02-05",
    "city": "Mexico City",
    "country": "Mexico",
    "flag": "🇲🇽",
    "lat": "19.4379593797547",
    "lng": "-99.1312331254851",
    "id": "35"
  },
  {
    "date": "2025-02-08",
    "city": "Oaxaca",
    "country": "Mexico",
    "flag": "🇲🇽",
    "lat": "17.074145629765",
    "lng": "-96.7261797755934",
    "id": "36"
  },
  {
    "date": "2025-02-10",
    "city": "Cancun",
    "country": "Mexico",
    "flag": "🇲🇽",
    "lat": "21.1646433393188",
    "lng": "-86.851924685514",
    "id": "37"
  },
  {
    "date": "2025-02-13",
    "city": "Playa del Carmen",
    "country": "Mexico",
    "flag": "🇲🇽",
    "lat": "20.6299567946537",
    "lng": "-87.0772696694587",
    "id": "38"
  },
  {
    "date": "2025-02-14",
    "city": "Tulum",
    "country": "Mexico",
    "flag": "🇲🇽",
    "lat": "20.2103714802465",
    "lng": "-87.4647489523491",
    "id": "39"
  },
  {
    "date": "2025-02-18",
    "city": "Bacalar",
    "country": "Mexico",
    "flag": "🇲🇽",
    "lat": "18.678131823462714",
    "lng": "-88.39209987694892",
    "id": "40"
  },
  {
    "date": "2025-02-21",
    "city": "Chetumal",
    "country": "Mexico",
    "flag": "🇲🇽",
    "lat": "18.49564",
    "lng": "-88.29593",
    "id": "41"
  },
  {
    "date": "2025-02-21",
    "city": "San Pedro",
    "country": "Belize",
    "flag": "🇧🇿",
    "lat": "17.92060",
    "lng": "-87.96177",
    "id": "42"
  },
  {
    "date": "2025-02-21",
    "city": "Caye Caulker",
    "country": "Belize",
    "flag": "🇧🇿",
    "lat": "17.74628",
    "lng": "-88.02339",
    "id": "43"
  },
  {
    "date": "2025-02-24",
    "city": "Belize City",
    "country": "Belize",
    "flag": "🇧🇿",
    "lat": "17.49952",
    "lng": "-88.19756",
    "id": "44"
  },
  {
    "date": "2025-02-24",
    "city": "Guatemala-Belize Border Customs",
    "country": "Belize",
    "flag": "🇧🇿",
    "lat": "17.05776",
    "lng": "-89.14912",
    "id": "45"
  },
  {
    "date": "2025-02-24",
    "city": "Flores",
    "country": "Guatemala",
    "flag": "🇬🇹",
    "lat": "16.92977",
    "lng": "-89.89154",
    "id": "46"
  },
  {
    "date": "2025-02-25",
    "city": "Guatemala City",
    "country": "Guatemala",
    "flag": "🇬🇹",
    "lat": "14.62778",
    "lng": "-90.51520",
    "id": "47"
  },
  {
    "date": "2025-02-25",
    "city": "Antigua",
    "country": "Guatemala",
    "flag": "🇬🇹",
    "lat": "14.55632",
    "lng": "-90.73307",
    "id": "48"
  },
  {
    "date": "2025-02-27",
    "city": "Acatenango Base Camp",
    "country": "Guatemala",
    "flag": "🇬🇹",
    "lat": "14.49963",
    "lng": "-90.88018",
    "id": "49"
  },
  {
    "date": "2025-02-28",
    "city": "Acatenango",
    "country": "Guatemala",
    "flag": "🇬🇹",
    "lat": "14.49985",
    "lng": "-90.87495",
    "id": "50"
  },
  {
    "date": "2025-02-28",
    "city": "Acatenango Base Camp",
    "country": "Guatemala",
    "flag": "🇬🇹",
    "lat": "14.49963",
    "lng": "-90.88018",
    "id": "51"
  },
  {
    "date": "2025-02-28",
    "city": "Antigua",
    "country": "Guatemala",
    "flag": "🇬🇹",
    "lat": "14.55632",
    "lng": "-90.73307",
    "id": "52"
  },
  {
    "date": "2025-02-28",
    "city": "Panajachel",
    "country": "Guatemala",
    "flag": "🇬🇹",
    "lat": "14.73807",
    "lng": "-91.15609",
    "id": "53"
  },
  {
    "date": "2025-03-01",
    "city": "San Juan La Laguna",
    "country": "Guatemala",
    "flag": "🇬🇹",
    "lat": "14.69457",
    "lng": "-91.28717",
    "id": "54"
  },
  {
    "date": "2025-03-01",
    "city": "San Pedro La Laguna",
    "country": "Guatemala",
    "flag": "🇬🇹",
    "lat": "14.69398",
    "lng": "-91.27253",
    "id": "55"
  },
  {
    "date": "2025-03-01",
    "city": "Panajachel",
    "country": "Guatemala",
    "flag": "🇬🇹",
    "lat": "14.73807",
    "lng": "-91.15609",
    "id": "56"
  },
  {
    "date": "2025-03-02",
    "city": "Guatemala City",
    "country": "Guatemala",
    "flag": "🇬🇹",
    "lat": "14.62778",
    "lng": "-90.51520",
    "id": "57"
  },
  {
    "date": "2025-03-02",
    "city": "Panama City",
    "country": "Panama",
    "flag": "🇵🇦",
    "lat": "8.97110",
    "lng": "-79.53500",
    "id": "58"
  },
  {
    "date": "2025-03-03",
    "city": "Quito",
    "country": "Ecuador",
    "flag": "🇪🇨",
    "lat": "-0.22011",
    "lng": "-78.51150",
    "id": "59"
  },
  {
    "date": "2025-03-03",
    "city": "Ciudad Mitad del Mundo",
    "country": "Ecuador",
    "flag": "🇪🇨",
    "lat": "-0.00321",
    "lng": "-78.45377",
    "id": "60"
  },
  {
    "date": "2025-03-03",
    "city": "Quito",
    "country": "Ecuador",
    "flag": "🇪🇨",
    "lat": "-0.22011",
    "lng": "-78.51150",
    "id": "61"
  },
  {
    "date": "2025-03-04",
    "city": "Nueva Loja",
    "country": "Ecuador",
    "flag": "🇪🇨",
    "lat": "0.08734",
    "lng": "-76.88292",
    "id": "62"
  },
  {
    "date": "2025-03-04",
    "city": "Cuyabeno Wildelife Reserve Boat Launch",
    "country": "Ecuador",
    "flag": "🇪🇨",
    "lat": "-0.03013",
    "lng": "-76.31560",
    "id": "63"
  },
  {
    "date": "2025-03-04",
    "city": "Tucan Lodge",
    "country": "Ecuador",
    "flag": "🇪🇨",
    "lat": "-0.06492",
    "lng": "-76.16937",
    "id": "64"
  },
  {
    "date": "2025-03-07",
    "city": "Cuyabeno Wildelife Reserve Boat Launch",
    "country": "Ecuador",
    "flag": "🇪🇨",
    "lat": "-0.03013",
    "lng": "-76.31560",
    "id": "65"
  },
  {
    "date": "2025-03-07",
    "city": "Nueva Loja",
    "country": "Ecuador",
    "flag": "🇪🇨",
    "lat": "0.08734",
    "lng": "-76.88292",
    "id": "66"
  },
  {
    "date": "2025-03-08",
    "city": "Cuenca",
    "country": "Ecuador",
    "flag": "🇪🇨",
    "lat": "-2.89975",
    "lng": "-79.00590",
    "id": "67"
  },
  {
    "date": "2025-03-09",
    "city": "Peru Border Care Center Binacional",
    "country": "Peru",
    "flag": "🇵🇪",
    "lat": "-3.51074",
    "lng": "-80.24994",
    "id": "68"
  },
  {
    "date": "2025-03-09",
    "city": "Chiclayo",
    "country": "Peru",
    "flag": "🇵🇪",
    "lat": "-6.77112",
    "lng": "-79.84371",
    "id": "69"
  },
  {
    "date": "2025-03-09",
    "city": "Trujillo",
    "country": "Peru",
    "flag": "🇵🇪",
    "lat": "-8.11726",
    "lng": "-79.02659",
    "id": "70"
  },
  {
    "date": "2025-03-09",
    "city": "Chimbote",
    "country": "Peru",
    "flag": "🇵🇪",
    "lat": "-9.06350",
    "lng": "-78.58722",
    "id": "71"
  },
  {
    "date": "2025-03-10",
    "city": "Huaraz",
    "country": "Peru",
    "flag": "🇵🇪",
    "lat": "-9.52571",
    "lng": "-77.52766",
    "id": "72"
  },
  {
    "date": "2025-03-11",
    "city": "Laguna 69",
    "country": "Peru",
    "flag": "🇵🇪",
    "lat": "-9.01165",
    "lng": "-77.61066",
    "id": "73"
  },
  {
    "date": "2025-03-11",
    "city": "Huaraz",
    "country": "Peru",
    "flag": "🇵🇪",
    "lat": "-9.52571",
    "lng": "-77.52766",
    "id": "74"
  },
  {
    "date": "2025-03-13",
    "city": "Lima",
    "country": "Peru",
    "flag": "🇵🇪",
    "lat": "-12.05191",
    "lng": "-77.04515",
    "id": "75"
  },
  {
    "date": "2025-03-14",
    "city": "Ica",
    "country": "Peru",
    "flag": "🇵🇪",
    "lat": "-14.07425",
    "lng": "-75.73519",
    "id": "76"
  },
  {
    "date": "2025-03-14",
    "city": "Huacachina",
    "country": "Peru",
    "flag": "🇵🇪",
    "lat": "-14.08792",
    "lng": "-75.76387",
    "id": "77"
  },
  {
    "date": "2025-03-15",
    "city": "Ica",
    "country": "Peru",
    "flag": "🇵🇪",
    "lat": "-14.07425",
    "lng": "-75.73519",
    "id": "78"
  },
  {
    "date": "2025-03-16",
    "city": "Paracas",
    "country": "Peru",
    "flag": "🇵🇪",
    "lat": "-13.83509",
    "lng": "-76.24952",
    "id": "79"
  },
  {
    "date": "2025-03-16",
    "city": "Ica",
    "country": "Peru",
    "flag": "🇵🇪",
    "lat": "-14.07425",
    "lng": "-75.73519",
    "id": "80"
  },
  {
    "date": "2025-03-17",
    "city": "Nasca",
    "country": "Peru",
    "flag": "🇵🇪",
    "lat": "-14.82848",
    "lng": "-74.94374",
    "id": "81"
  },
  {
    "date": "2025-03-17",
    "city": "Ica",
    "country": "Peru",
    "flag": "🇵🇪",
    "lat": "-14.07425",
    "lng": "-75.73519",
    "id": "82"
  },
  {
    "date": "2025-03-18",
    "city": "Lima",
    "country": "Peru",
    "flag": "🇵🇪",
    "lat": "-12.05191",
    "lng": "-77.04515",
    "id": "83"
  },
  {
    "date": "2025-03-18",
    "city": "Cusco",
    "country": "Peru",
    "flag": "🇵🇪",
    "lat": "-13.51511",
    "lng": "-71.97545",
    "id": "84"
  },
  {
    "date": "2025-03-20",
    "city": "Vinicunca",
    "country": "Peru",
    "flag": "🇵🇪",
    "lat": "-13.86941",
    "lng": "-71.30295",
    "id": "85"
  },
  {
    "date": "2025-03-20",
    "city": "Cusco",
    "country": "Peru",
    "flag": "🇵🇪",
    "lat": "-13.51511",
    "lng": "-71.97545",
    "id": "86"
  },
  {
    "date": "2025-03-21",
    "city": "Ollantaytambo",
    "country": "Peru",
    "flag": "🇵🇪",
    "lat": "-13.25808",
    "lng": "-72.26412",
    "id": "87"
  },
  {
    "date": "2025-03-21",
    "city": "Aguas Calientes",
    "country": "Peru",
    "flag": "🇵🇪",
    "lat": "-13.15477",
    "lng": "-72.52500",
    "id": "88"
  },
  {
    "date": "2025-03-22",
    "city": "Machu Picchu",
    "country": "Peru",
    "flag": "🇵🇪",
    "lat": "-13.16317",
    "lng": "-72.54516",
    "id": "89"
  },
  {
    "date": "2025-03-22",
    "city": "Aguas Calientes",
    "country": "Peru",
    "flag": "🇵🇪",
    "lat": "-13.15477",
    "lng": "-72.52500",
    "id": "90"
  },
  {
    "date": "2025-03-22",
    "city": "Ollantaytambo",
    "country": "Peru",
    "flag": "🇵🇪",
    "lat": "-13.25808",
    "lng": "-72.26412",
    "id": "91"
  },
  {
    "date": "2025-03-22",
    "city": "Cusco",
    "country": "Peru",
    "flag": "🇵🇪",
    "lat": "-13.51511",
    "lng": "-71.97545",
    "id": "92"
  },
  {
    "date": "2025-03-23",
    "city": "Puno",
    "country": "Peru",
    "flag": "🇵🇪",
    "lat": "-15.84092",
    "lng": "-70.02192",
    "id": "93"
  },
  {
    "date": "2025-03-23",
    "city": "Control Migratorio Kasani Perú",
    "country": "Peru",
    "flag": "🇵🇪",
    "lat": "-16.22672",
    "lng": "-69.09545",
    "id": "94"
  },
  {
    "date": "2025-03-23",
    "city": "Kasani, Bolivia Immigration Office",
    "country": "Bolivia",
    "flag": "🇧🇴",
    "lat": "-16.22506",
    "lng": "-69.09582",
    "id": "95"
  },
  {
    "date": "2025-03-23",
    "city": "Copacabana",
    "country": "Bolivia",
    "flag": "🇧🇴",
    "lat": "-16.16537",
    "lng": "-69.08800",
    "id": "96"
  },
  {
    "date": "2025-03-24",
    "city": "La Paz",
    "country": "Bolivia",
    "flag": "🇧🇴",
    "lat": "-16.49461",
    "lng": "-68.12183",
    "id": "97"
  },
  {
    "date": "2025-03-26",
    "city": "Uyuni",
    "country": "Bolivia",
    "flag": "🇧🇴",
    "lat": "-20.46171",
    "lng": "-66.82161",
    "id": "98"
  },
  {
    "date": "2025-03-26",
    "city": "Salar de Uyuni",
    "country": "Bolivia",
    "flag": "🇧🇴",
    "lat": "-20.16076",
    "lng": "-67.41783",
    "id": "99"
  },
  {
    "date": "2025-03-26",
    "city": "Uyuni",
    "country": "Bolivia",
    "flag": "🇧🇴",
    "lat": "-20.46171",
    "lng": "-66.82161",
    "id": "100"
  }
];

export default tracks;