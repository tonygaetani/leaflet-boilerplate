/////////////////////////////
// sketchy globals go here //
/////////////////////////////
// initialize our map
const map = L.map("map", {
  center: [41, -69], // center map to the waters off beautiful naussett
  zoom: 3, // set the zoom level
});
// add a baselayer to the map
const OpenStreetMap = L.tileLayer(
  "http://a.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}.png",
  {
    maxZoom: 19,
    attribution:
      '&copy; <a href="https://raw.githubusercontent.com/CartoDB/basemap-styles/master/LICENSE.md">Carto CDN</a>',
  }
).addTo(map);
// game variables
const game = {
  currentFlag: undefined,
  previousFlag: undefined,
  currentLine: undefined,
  rounds: 0,
  score: 0,
  flags: [
    {
      name: "Tokyo, Japan",
      latlng: {
        lat: 35.6839,
        lng: 139.7744,
      },
      iso: "JP",
    },
    {
      name: "Jakarta, Indonesia",
      latlng: {
        lat: -6.2146,
        lng: 106.8451,
      },
      iso: "ID",
    },
    {
      name: "Manila, Philippines",
      latlng: {
        lat: 14.6,
        lng: 120.9833,
      },
      iso: "PH",
    },
    {
      name: "Seoul, South Korea",
      latlng: {
        lat: 37.56,
        lng: 126.99,
      },
      iso: "KR",
    },
    {
      name: "Mexico City, Mexico",
      latlng: {
        lat: 19.4333,
        lng: -99.1333,
      },
      iso: "MX",
    },
    {
      name: "Cairo, Egypt",
      latlng: {
        lat: 30.0444,
        lng: 31.2358,
      },
      iso: "EG",
    },
    {
      name: "Beijing, China",
      latlng: {
        lat: 39.904,
        lng: 116.4075,
      },
      iso: "CN",
    },
    {
      name: "Moscow, Russia",
      latlng: {
        lat: 55.7558,
        lng: 37.6178,
      },
      iso: "RU",
    },
    {
      name: "Bangkok, Thailand",
      latlng: {
        lat: 13.75,
        lng: 100.5167,
      },
      iso: "TH",
    },
    {
      name: "Dhaka, Bangladesh",
      latlng: {
        lat: 23.7289,
        lng: 90.3944,
      },
      iso: "BD",
    },
    {
      name: "Buenos Aires, Argentina",
      latlng: {
        lat: -34.5997,
        lng: -58.3819,
      },
      iso: "AR",
    },
    {
      name: "Kinshasa, Congo (Kinshasa)",
      latlng: {
        lat: -4.3317,
        lng: 15.3139,
      },
      iso: "CD",
    },
    {
      name: "Tehran, Iran",
      latlng: {
        lat: 35.7,
        lng: 51.4167,
      },
      iso: "IR",
    },
    {
      name: "London, United Kingdom",
      latlng: {
        lat: 51.5072,
        lng: -0.1275,
      },
      iso: "GB",
    },
    {
      name: "Paris, France",
      latlng: {
        lat: 48.8566,
        lng: 2.3522,
      },
      iso: "FR",
    },
    {
      name: "Lima, Peru",
      latlng: {
        lat: -12.06,
        lng: -77.0375,
      },
      iso: "PE",
    },
    {
      name: "Luanda, Angola",
      latlng: {
        lat: -8.8383,
        lng: 13.2344,
      },
      iso: "AO",
    },
    {
      name: "Kuala Lumpur, Malaysia",
      latlng: {
        lat: 3.1478,
        lng: 101.6953,
      },
      iso: "MY",
    },
    {
      name: "Hanoi, Vietnam",
      latlng: {
        lat: 21.0245,
        lng: 105.8412,
      },
      iso: "VN",
    },
    {
      name: "Bogotá, Colombia",
      latlng: {
        lat: 4.6126,
        lng: -74.0705,
      },
      iso: "CO",
    },
    {
      name: "Dar es Salaam, Tanzania",
      latlng: {
        lat: -6.8,
        lng: 39.2833,
      },
      iso: "TZ",
    },
    {
      name: "Hong Kong, Hong Kong",
      latlng: {
        lat: 22.3069,
        lng: 114.1831,
      },
      iso: "HK",
    },
    {
      name: "Santiago, Chile",
      latlng: {
        lat: -33.45,
        lng: -70.6667,
      },
      iso: "CL",
    },
    {
      name: "Riyadh, Saudi Arabia",
      latlng: {
        lat: 24.65,
        lng: 46.71,
      },
      iso: "SA",
    },
    {
      name: "Baghdad, Iraq",
      latlng: {
        lat: 33.35,
        lng: 44.4167,
      },
      iso: "IQ",
    },
    {
      name: "Khartoum, Sudan",
      latlng: {
        lat: 15.6031,
        lng: 32.5265,
      },
      iso: "SD",
    },
    {
      name: "Madrid, Spain",
      latlng: {
        lat: 40.4167,
        lng: -3.7167,
      },
      iso: "ES",
    },
    {
      name: "Nairobi, Kenya",
      latlng: {
        lat: -1.2864,
        lng: 36.8172,
      },
      iso: "KE",
    },
    {
      name: "Rangoon, Myanmar",
      latlng: {
        lat: 16.795,
        lng: 96.16,
      },
      iso: "MM",
    },
    {
      name: "Washington, United States",
      latlng: {
        lat: 38.9047,
        lng: -77.0163,
      },
      iso: "US",
    },
    {
      name: "Singapore, Singapore",
      latlng: {
        lat: 1.3,
        lng: 103.8,
      },
      iso: "SG",
    },
    {
      name: "Abidjan, Côte d'Ivoire",
      latlng: {
        lat: 5.3364,
        lng: -4.0267,
      },
      iso: "CI",
    },
    {
      name: "Kabul, Afghanistan",
      latlng: {
        lat: 34.5328,
        lng: 69.1658,
      },
      iso: "AF",
    },
    {
      name: "Amman, Jordan",
      latlng: {
        lat: 31.95,
        lng: 35.9333,
      },
      iso: "JO",
    },
    {
      name: "Berlin, Germany",
      latlng: {
        lat: 52.5167,
        lng: 13.3833,
      },
      iso: "DE",
    },
    {
      name: "Algiers, Algeria",
      latlng: {
        lat: 36.7764,
        lng: 3.0586,
      },
      iso: "DZ",
    },
    {
      name: "Addis Ababa, Ethiopia",
      latlng: {
        lat: 9.0272,
        lng: 38.7369,
      },
      iso: "ET",
    },
    {
      name: "Brasília, Brazil",
      latlng: {
        lat: -15.7939,
        lng: -47.8828,
      },
      iso: "BR",
    },
    {
      name: "Kuwait City, Kuwait",
      latlng: {
        lat: 29.375,
        lng: 47.98,
      },
      iso: "KW",
    },
    {
      name: "Kyiv, Ukraine",
      latlng: {
        lat: 50.45,
        lng: 30.5236,
      },
      iso: "UA",
    },
    {
      name: "Sanaa, Yemen",
      latlng: {
        lat: 15.35,
        lng: 44.2,
      },
      iso: "YE",
    },
    {
      name: "Guatemala City, Guatemala",
      latlng: {
        lat: 14.6099,
        lng: -90.5252,
      },
      iso: "GT",
    },
    {
      name: "Rome, Italy",
      latlng: {
        lat: 41.8931,
        lng: 12.4828,
      },
      iso: "IT",
    },
    {
      name: "La Paz, Bolivia",
      latlng: {
        lat: -16.4942,
        lng: -68.1475,
      },
      iso: "BO",
    },
    {
      name: "Pyongyang, North Korea",
      latlng: {
        lat: 39.03,
        lng: 125.73,
      },
      iso: "KP",
    },
    {
      name: "Antananarivo, Madagascar",
      latlng: {
        lat: -18.9386,
        lng: 47.5214,
      },
      iso: "MG",
    },
    {
      name: "Santo Domingo, Dominican Republic",
      latlng: {
        lat: 18.4764,
        lng: -69.8933,
      },
      iso: "DO",
    },
    {
      name: "Tashkent, Uzbekistan",
      latlng: {
        lat: 41.3,
        lng: 69.2667,
      },
      iso: "UZ",
    },
    {
      name: "Ouagadougou, Burkina Faso",
      latlng: {
        lat: 12.3686,
        lng: -1.5275,
      },
      iso: "BF",
    },
    {
      name: "Yaoundé, Cameroon",
      latlng: {
        lat: 3.8578,
        lng: 11.5181,
      },
      iso: "CM",
    },
    {
      name: "Accra, Ghana",
      latlng: {
        lat: 5.6037,
        lng: -0.187,
      },
      iso: "GH",
    },
    {
      name: "Baku, Azerbaijan",
      latlng: {
        lat: 40.3667,
        lng: 49.8352,
      },
      iso: "AZ",
    },
    {
      name: "Harare, Zimbabwe",
      latlng: {
        lat: -17.8292,
        lng: 31.0522,
      },
      iso: "ZW",
    },
    {
      name: "Havana, Cuba",
      latlng: {
        lat: 23.1367,
        lng: -82.3589,
      },
      iso: "CU",
    },
    {
      name: "Phnom Penh, Cambodia",
      latlng: {
        lat: 11.5696,
        lng: 104.921,
      },
      iso: "KH",
    },
    {
      name: "Mogadishu, Somalia",
      latlng: {
        lat: 2.0408,
        lng: 45.3425,
      },
      iso: "SO",
    },
    {
      name: "Bamako, Mali",
      latlng: {
        lat: 12.6458,
        lng: -7.9922,
      },
      iso: "ML",
    },
    {
      name: "Quito, Ecuador",
      latlng: {
        lat: -0.22,
        lng: -78.5125,
      },
      iso: "EC",
    },
    {
      name: "Minsk, Belarus",
      latlng: {
        lat: 53.9022,
        lng: 27.5618,
      },
      iso: "BY",
    },
    {
      name: "Caracas, Venezuela",
      latlng: {
        lat: 10.5,
        lng: -66.9333,
      },
      iso: "VE",
    },
    {
      name: "Vienna, Austria",
      latlng: {
        lat: 48.2083,
        lng: 16.3725,
      },
      iso: "AT",
    },
    {
      name: "Bucharest, Romania",
      latlng: {
        lat: 44.4,
        lng: 26.0833,
      },
      iso: "RO",
    },
    {
      name: "Brazzaville, Congo (Brazzaville)",
      latlng: {
        lat: -4.2667,
        lng: 15.2833,
      },
      iso: "CG",
    },
    {
      name: "Warsaw, Poland",
      latlng: {
        lat: 52.23,
        lng: 21.0111,
      },
      iso: "PL",
    },
    {
      name: "Damascus, Syria",
      latlng: {
        lat: 33.5131,
        lng: 36.2919,
      },
      iso: "SY",
    },
    {
      name: "Brussels, Belgium",
      latlng: {
        lat: 50.8353,
        lng: 4.3314,
      },
      iso: "BE",
    },
    {
      name: "Lusaka, Zambia",
      latlng: {
        lat: -15.4167,
        lng: 28.2833,
      },
      iso: "ZM",
    },
    {
      name: "Budapest, Hungary",
      latlng: {
        lat: 47.4983,
        lng: 19.0408,
      },
      iso: "HU",
    },
    {
      name: "Conakry, Guinea",
      latlng: {
        lat: 9.538,
        lng: -13.6773,
      },
      iso: "GN",
    },
    {
      name: "Kampala, Uganda",
      latlng: {
        lat: 0.3136,
        lng: 32.5811,
      },
      iso: "UG",
    },
    {
      name: "Abu Dhabi, United Arab Emirates",
      latlng: {
        lat: 24.4511,
        lng: 54.3969,
      },
      iso: "AE",
    },
    {
      name: "Muscat, Oman",
      latlng: {
        lat: 23.6139,
        lng: 58.5922,
      },
      iso: "OM",
    },
    {
      name: "Ulaanbaatar, Mongolia",
      latlng: {
        lat: 47.9214,
        lng: 106.9055,
      },
      iso: "MN",
    },
    {
      name: "Belgrade, Serbia",
      latlng: {
        lat: 44.8167,
        lng: 20.4667,
      },
      iso: "RS",
    },
    {
      name: "Prague, Czechia",
      latlng: {
        lat: 50.0833,
        lng: 14.4167,
      },
      iso: "CZ",
    },
    {
      name: "Montevideo, Uruguay",
      latlng: {
        lat: -34.8667,
        lng: -56.1667,
      },
      iso: "UY",
    },
    {
      name: "Sofia, Bulgaria",
      latlng: {
        lat: 42.6979,
        lng: 23.3217,
      },
      iso: "BG",
    },
    {
      name: "Abuja, Nigeria",
      latlng: {
        lat: 9.0556,
        lng: 7.4914,
      },
      iso: "NG",
    },
    {
      name: "Maputo, Mozambique",
      latlng: {
        lat: -25.9153,
        lng: 32.5764,
      },
      iso: "MZ",
    },
    {
      name: "Doha, Qatar",
      latlng: {
        lat: 25.3,
        lng: 51.5333,
      },
      iso: "QA",
    },
    {
      name: "Dakar, Senegal",
      latlng: {
        lat: 14.7319,
        lng: -17.4572,
      },
      iso: "SN",
    },
    {
      name: "Nay Pyi Taw, Myanmar",
      latlng: {
        lat: 19.7475,
        lng: 96.115,
      },
      iso: "MM",
    },
    {
      name: "Kigali, Rwanda",
      latlng: {
        lat: -1.9536,
        lng: 30.0606,
      },
      iso: "RW",
    },
    {
      name: "Tripoli, Libya",
      latlng: {
        lat: 32.8752,
        lng: 13.1875,
      },
      iso: "LY",
    },
    {
      name: "Tegucigalpa, Honduras",
      latlng: {
        lat: 14.0942,
        lng: -87.2067,
      },
      iso: "HN",
    },
    {
      name: "Tbilisi, Georgia",
      latlng: {
        lat: 41.7225,
        lng: 44.7925,
      },
      iso: "GE",
    },
    {
      name: "N’Djamena, Chad",
      latlng: {
        lat: 12.11,
        lng: 15.05,
      },
      iso: "TD",
    },
    {
      name: "Copenhagen, Denmark",
      latlng: {
        lat: 55.6805,
        lng: 12.5615,
      },
      iso: "DK",
    },
    {
      name: "Yerevan, Armenia",
      latlng: {
        lat: 40.1814,
        lng: 44.5144,
      },
      iso: "AM",
    },
    {
      name: "Nur-Sultan, Kazakhstan",
      latlng: {
        lat: 51.1333,
        lng: 71.4333,
      },
      iso: "KZ",
    },
    {
      name: "Nouakchott, Mauritania",
      latlng: {
        lat: 18.0858,
        lng: -15.9785,
      },
      iso: "MR",
    },
    {
      name: "Bishkek, Kyrgyzstan",
      latlng: {
        lat: 42.8667,
        lng: 74.5667,
      },
      iso: "KG",
    },
    {
      name: "Tunis, Tunisia",
      latlng: {
        lat: 36.8008,
        lng: 10.18,
      },
      iso: "TN",
    },
    {
      name: "Kathmandu, Nepal",
      latlng: {
        lat: 27.7167,
        lng: 85.3667,
      },
      iso: "NP",
    },
    {
      name: "Niamey, Niger",
      latlng: {
        lat: 13.5086,
        lng: 2.1111,
      },
      iso: "NE",
    },
    {
      name: "Managua, Nicaragua",
      latlng: {
        lat: 12.15,
        lng: -86.2667,
      },
      iso: "NI",
    },
    {
      name: "Monrovia, Liberia",
      latlng: {
        lat: 6.3106,
        lng: -10.8047,
      },
      iso: "LR",
    },
    {
      name: "Port-au-Prince, Haiti",
      latlng: {
        lat: 18.5425,
        lng: -72.3386,
      },
      iso: "HT",
    },
    {
      name: "Islamabad, Pakistan",
      latlng: {
        lat: 33.6989,
        lng: 73.0369,
      },
      iso: "PK",
    },
    {
      name: "Ottawa, Canada",
      latlng: {
        lat: 45.4247,
        lng: -75.695,
      },
      iso: "CA",
    },
    {
      name: "Stockholm, Sweden",
      latlng: {
        lat: 59.3294,
        lng: 18.0686,
      },
      iso: "SE",
    },
    {
      name: "Asmara, Eritrea",
      latlng: {
        lat: 15.3333,
        lng: 38.9167,
      },
      iso: "ER",
    },
    {
      name: "Freetown, Sierra Leone",
      latlng: {
        lat: 8.4833,
        lng: -13.2331,
      },
      iso: "SL",
    },
    {
      name: "Vientiane, Laos",
      latlng: {
        lat: 17.9667,
        lng: 102.6,
      },
      iso: "LA",
    },
    {
      name: "Jerusalem, Israel",
      latlng: {
        lat: 31.7833,
        lng: 35.2167,
      },
      iso: "IL",
    },
    {
      name: "Bangui, Central African Republic",
      latlng: {
        lat: 4.3732,
        lng: 18.5628,
      },
      iso: "CF",
    },
    {
      name: "Panama City, Panama",
      latlng: {
        lat: 9,
        lng: -79.5,
      },
      iso: "PA",
    },
    {
      name: "Amsterdam, Netherlands",
      latlng: {
        lat: 52.3667,
        lng: 4.8833,
      },
      iso: "NL",
    },
    {
      name: "Lomé, Togo",
      latlng: {
        lat: 6.1319,
        lng: 1.2228,
      },
      iso: "TG",
    },
    {
      name: "Libreville, Gabon",
      latlng: {
        lat: 0.3901,
        lng: 9.4544,
      },
      iso: "GA",
    },
    {
      name: "Zagreb, Croatia",
      latlng: {
        lat: 45.8131,
        lng: 15.9772,
      },
      iso: "HR",
    },
    {
      name: "Dushanbe, Tajikistan",
      latlng: {
        lat: 38.5731,
        lng: 68.7864,
      },
      iso: "TJ",
    },
    {
      name: "Lilongwe, Malawi",
      latlng: {
        lat: -13.9833,
        lng: 33.7833,
      },
      iso: "MW",
    },
    {
      name: "Cotonou, Benin",
      latlng: {
        lat: 6.402,
        lng: 2.518,
      },
      iso: "BJ",
    },
    {
      name: "Colombo, Sri Lanka",
      latlng: {
        lat: 6.9167,
        lng: 79.8333,
      },
      iso: "LK",
    },
    {
      name: "Pretoria, South Africa",
      latlng: {
        lat: -25.7464,
        lng: 28.1881,
      },
      iso: "ZA",
    },
    {
      name: "Oslo, Norway",
      latlng: {
        lat: 59.9111,
        lng: 10.7528,
      },
      iso: "NO",
    },
    {
      name: "Athens, Greece",
      latlng: {
        lat: 37.9842,
        lng: 23.7281,
      },
      iso: "GR",
    },
    {
      name: "Bujumbura, Burundi",
      latlng: {
        lat: -3.3825,
        lng: 29.3611,
      },
      iso: "BI",
    },
    {
      name: "Helsinki, Finland",
      latlng: {
        lat: 60.1756,
        lng: 24.9342,
      },
      iso: "FI",
    },
    {
      name: "Skopje, Macedonia",
      latlng: {
        lat: 41.9833,
        lng: 21.4333,
      },
      iso: "MK",
    },
    {
      name: "Chisinau, Moldova",
      latlng: {
        lat: 47.0228,
        lng: 28.8353,
      },
      iso: "MD",
    },
    {
      name: "Riga, Latvia",
      latlng: {
        lat: 56.9475,
        lng: 24.1069,
      },
      iso: "LV",
    },
    {
      name: "Kingston, Jamaica",
      latlng: {
        lat: 17.9714,
        lng: -76.7931,
      },
      iso: "JM",
    },
    {
      name: "Rabat, Morocco",
      latlng: {
        lat: 34.0253,
        lng: -6.8361,
      },
      iso: "MA",
    },
    {
      name: "Vilnius, Lithuania",
      latlng: {
        lat: 54.6833,
        lng: 25.2833,
      },
      iso: "LT",
    },
    {
      name: "San Salvador, El Salvador",
      latlng: {
        lat: 13.6989,
        lng: -89.1914,
      },
      iso: "SV",
    },
    {
      name: "Djibouti, Djibouti",
      latlng: {
        lat: 11.595,
        lng: 43.1481,
      },
      iso: "DJ",
    },
    {
      name: "Dublin, Ireland",
      latlng: {
        lat: 53.3497,
        lng: -6.2603,
      },
      iso: "IE",
    },
    {
      name: "The Hague, Netherlands",
      latlng: {
        lat: 52.08,
        lng: 4.31,
      },
      iso: "NL",
    },
    {
      name: "Asunción, Paraguay",
      latlng: {
        lat: -25.3,
        lng: -57.6333,
      },
      iso: "PY",
    },
    {
      name: "Lisbon, Portugal",
      latlng: {
        lat: 38.708,
        lng: -9.139,
      },
      iso: "PT",
    },
    {
      name: "Bratislava, Slovakia",
      latlng: {
        lat: 48.1447,
        lng: 17.1128,
      },
      iso: "SK",
    },
    {
      name: "Tallinn, Estonia",
      latlng: {
        lat: 59.4372,
        lng: 24.745,
      },
      iso: "EE",
    },
    {
      name: "Beirut, Lebanon",
      latlng: {
        lat: 33.8869,
        lng: 35.5131,
      },
      iso: "LB",
    },
    {
      name: "Cape Town, South Africa",
      latlng: {
        lat: -33.925,
        lng: 18.425,
      },
      iso: "ZA",
    },
    {
      name: "Tirana, Albania",
      latlng: {
        lat: 41.33,
        lng: 19.82,
      },
      iso: "AL",
    },
    {
      name: "Wellington, New Zealand",
      latlng: {
        lat: -41.2889,
        lng: 174.7772,
      },
      iso: "NZ",
    },
    {
      name: "Dodoma, Tanzania",
      latlng: {
        lat: -6.1835,
        lng: 35.746,
      },
      iso: "TZ",
    },
    {
      name: "Bissau, Guinea-Bissau",
      latlng: {
        lat: 11.8592,
        lng: -15.5956,
      },
      iso: "GW",
    },
    {
      name: "Canberra, Australia",
      latlng: {
        lat: -35.2931,
        lng: 149.1269,
      },
      iso: "AU",
    },
    {
      name: "Juba, South Sudan",
      latlng: {
        lat: 4.85,
        lng: 31.6,
      },
      iso: "SS",
    },
    {
      name: "Yamoussoukro, Côte d'Ivoire",
      latlng: {
        lat: 6.8161,
        lng: -5.2742,
      },
      iso: "CI",
    },
    {
      name: "Maseru, Lesotho",
      latlng: {
        lat: -29.31,
        lng: 27.48,
      },
      iso: "LS",
    },
    {
      name: "Nicosia, Cyprus",
      latlng: {
        lat: 35.1725,
        lng: 33.365,
      },
      iso: "CY",
    },
    {
      name: "Windhoek, Namibia",
      latlng: {
        lat: -22.57,
        lng: 17.0836,
      },
      iso: "NA",
    },
    {
      name: "Port Moresby, Papua New Guinea",
      latlng: {
        lat: -9.4789,
        lng: 147.1494,
      },
      iso: "PG",
    },
    {
      name: "Porto-Novo, Benin",
      latlng: {
        lat: 6.4833,
        lng: 2.6167,
      },
      iso: "BJ",
    },
    {
      name: "Sucre, Bolivia",
      latlng: {
        lat: -19.0431,
        lng: -65.2592,
      },
      iso: "BO",
    },
    {
      name: "San José, Costa Rica",
      latlng: {
        lat: 9.9333,
        lng: -84.0833,
      },
      iso: "CR",
    },
    {
      name: "Ljubljana, Slovenia",
      latlng: {
        lat: 46.05,
        lng: 14.5167,
      },
      iso: "SI",
    },
    {
      name: "Sarajevo, Bosnia And Herzegovina",
      latlng: {
        lat: 43.8563,
        lng: 18.4132,
      },
      iso: "BA",
    },
    {
      name: "Nassau, The Bahamas",
      latlng: {
        lat: 25.0667,
        lng: -77.3333,
      },
      iso: "BS",
    },
    {
      name: "Bloemfontein, South Africa",
      latlng: {
        lat: -29.1,
        lng: 26.2167,
      },
      iso: "ZA",
    },
    {
      name: "Fort-de-France, Martinique",
      latlng: {
        lat: 14.6104,
        lng: -61.08,
      },
      iso: "MQ",
    },
    {
      name: "New Delhi, India",
      latlng: {
        lat: 28.6139,
        lng: 77.209,
      },
      iso: "IN",
    },
    {
      name: "Gaborone, Botswana",
      latlng: {
        lat: -24.6569,
        lng: 25.9086,
      },
      iso: "BW",
    },
    {
      name: "Paramaribo, Suriname",
      latlng: {
        lat: 5.8667,
        lng: -55.1667,
      },
      iso: "SR",
    },
    {
      name: "Dili, Timor-Leste",
      latlng: {
        lat: -8.5536,
        lng: 125.5783,
      },
      iso: "TL",
    },
    {
      name: "Male, Maldives",
      latlng: {
        lat: 4.175,
        lng: 73.5083,
      },
      iso: "MV",
    },
    {
      name: "Georgetown, Guyana",
      latlng: {
        lat: 6.7833,
        lng: -58.1667,
      },
      iso: "GY",
    },
    {
      name: "Gibraltar, Gibraltar",
      latlng: {
        lat: 36.1324,
        lng: -5.3781,
      },
      iso: "GI",
    },
    {
      name: "Saint-Denis, Reunion",
      latlng: {
        lat: -20.8789,
        lng: 55.4481,
      },
      iso: "RE",
    },
    {
      name: "Malabo, Equatorial Guinea",
      latlng: {
        lat: 3.7521,
        lng: 8.7737,
      },
      iso: "GQ",
    },
    {
      name: "Podgorica, Montenegro",
      latlng: {
        lat: 42.4397,
        lng: 19.2661,
      },
      iso: "ME",
    },
    {
      name: "Manama, Bahrain",
      latlng: {
        lat: 26.225,
        lng: 50.5775,
      },
      iso: "BH",
    },
    {
      name: "Port Louis, Mauritius",
      latlng: {
        lat: -20.1667,
        lng: 57.5,
      },
      iso: "MU",
    },
    {
      name: "Willemstad, Curaçao",
      latlng: {
        lat: 12.108,
        lng: -68.935,
      },
      iso: "CW",
    },
    {
      name: "Bern, Switzerland",
      latlng: {
        lat: 46.948,
        lng: 7.4474,
      },
      iso: "CH",
    },
    {
      name: "Papeete, French Polynesia",
      latlng: {
        lat: -17.5334,
        lng: -149.5667,
      },
      iso: "PF",
    },
    {
      name: "Luxembourg, Luxembourg",
      latlng: {
        lat: 49.6106,
        lng: 6.1328,
      },
      iso: "LU",
    },
    {
      name: "Reykjavík, Iceland",
      latlng: {
        lat: 64.1475,
        lng: -21.935,
      },
      iso: "IS",
    },
    {
      name: "Praia, Cabo Verde",
      latlng: {
        lat: 14.9177,
        lng: -23.5092,
      },
      iso: "CV",
    },
    {
      name: "Sri Jayewardenepura Kotte, Sri Lanka",
      latlng: {
        lat: 6.9,
        lng: 79.9164,
      },
      iso: "LK",
    },
    {
      name: "Bridgetown, Barbados",
      latlng: {
        lat: 13.0975,
        lng: -59.6167,
      },
      iso: "BB",
    },
    {
      name: "Moroni, Comoros",
      latlng: {
        lat: -11.7036,
        lng: 43.2536,
      },
      iso: "KM",
    },
    {
      name: "Thimphu, Bhutan",
      latlng: {
        lat: 27.4833,
        lng: 89.6333,
      },
      iso: "BT",
    },
    {
      name: "Mbabane, Swaziland",
      latlng: {
        lat: -26.3208,
        lng: 31.1617,
      },
      iso: "SZ",
    },
    {
      name: "Nouméa, New Caledonia",
      latlng: {
        lat: -22.2625,
        lng: 166.4443,
      },
      iso: "NC",
    },
    {
      name: "Honiara, Solomon Islands",
      latlng: {
        lat: -9.4333,
        lng: 159.95,
      },
      iso: "SB",
    },
    {
      name: "Suva, Fiji",
      latlng: {
        lat: -18.1333,
        lng: 178.4333,
      },
      iso: "FJ",
    },
    {
      name: "Ankara, Turkey",
      latlng: {
        lat: 39.93,
        lng: 32.85,
      },
      iso: "TR",
    },
    {
      name: "Castries, Saint Lucia",
      latlng: {
        lat: 14.0167,
        lng: -60.9833,
      },
      iso: "LC",
    },
    {
      name: "Cayenne, French Guiana",
      latlng: {
        lat: 4.933,
        lng: -52.33,
      },
      iso: "GF",
    },
    {
      name: "São Tomé, Sao Tome And Principe",
      latlng: {
        lat: 0.3333,
        lng: 6.7333,
      },
      iso: "ST",
    },
    {
      name: "Port-Vila, Vanuatu",
      latlng: {
        lat: -17.7333,
        lng: 168.3167,
      },
      iso: "VU",
    },
    {
      name: "Hamilton, Bermuda",
      latlng: {
        lat: 32.2942,
        lng: -64.7839,
      },
      iso: "BM",
    },
    {
      name: "Bandar Seri Begawan, Brunei",
      latlng: {
        lat: 4.9167,
        lng: 114.9167,
      },
      iso: "BN",
    },
    {
      name: "Monaco, Monaco",
      latlng: {
        lat: 43.7396,
        lng: 7.4069,
      },
      iso: "MC",
    },
    {
      name: "Gitega, Burundi",
      latlng: {
        lat: -3.4283,
        lng: 29.925,
      },
      iso: "BI",
    },
    {
      name: "Port of Spain, Trinidad And Tobago",
      latlng: {
        lat: 10.6667,
        lng: -61.5167,
      },
      iso: "TT",
    },
    {
      name: "Apia, Samoa",
      latlng: {
        lat: -13.8333,
        lng: -171.8333,
      },
      iso: "WS",
    },
    {
      name: "Tarawa, Kiribati",
      latlng: {
        lat: 1.3382,
        lng: 173.0176,
      },
      iso: "KI",
    },
    {
      name: "Oranjestad, Aruba",
      latlng: {
        lat: 12.5186,
        lng: -70.0358,
      },
      iso: "AW",
    },
    {
      name: "Saint Helier, Jersey",
      latlng: {
        lat: 49.1858,
        lng: -2.11,
      },
      iso: "JE",
    },
    {
      name: "Banjul, The Gambia",
      latlng: {
        lat: 13.4531,
        lng: -16.5775,
      },
      iso: "GM",
    },
    {
      name: "Mamoudzou, Mayotte",
      latlng: {
        lat: -12.7871,
        lng: 45.275,
      },
      iso: "YT",
    },
    {
      name: "Majuro, Marshall Islands",
      latlng: {
        lat: 7.0918,
        lng: 171.3802,
      },
      iso: "MH",
    },
    {
      name: "Douglas, Isle Of Man",
      latlng: {
        lat: 54.15,
        lng: -4.4819,
      },
      iso: "IM",
    },
    {
      name: "George Town, Cayman Islands",
      latlng: {
        lat: 19.2866,
        lng: -81.3744,
      },
      iso: "KY",
    },
    {
      name: "Victoria, Seychelles",
      latlng: {
        lat: -4.6236,
        lng: 55.4544,
      },
      iso: "SC",
    },
    {
      name: "Kingstown, Saint Vincent And The Grenadines",
      latlng: {
        lat: 13.1667,
        lng: -61.2333,
      },
      iso: "VC",
    },
    {
      name: "Andorra la Vella, Andorra",
      latlng: {
        lat: 42.5,
        lng: 1.5,
      },
      iso: "AD",
    },
    {
      name: "Saint John’s, Antigua And Barbuda",
      latlng: {
        lat: 17.1211,
        lng: -61.8447,
      },
      iso: "AG",
    },
    {
      name: "Nuku‘alofa, Tonga",
      latlng: {
        lat: -21.1347,
        lng: -175.2083,
      },
      iso: "TO",
    },
    {
      name: "Ashgabat, Turkmenistan",
      latlng: {
        lat: 37.95,
        lng: 58.3833,
      },
      iso: "TM",
    },
    {
      name: "Nuuk, Greenland",
      latlng: {
        lat: 64.175,
        lng: -51.7333,
      },
      iso: "GL",
    },
    {
      name: "Belmopan, Belize",
      latlng: {
        lat: 17.25,
        lng: -88.7675,
      },
      iso: "BZ",
    },
    {
      name: "Roseau, Dominica",
      latlng: {
        lat: 15.3,
        lng: -61.3833,
      },
      iso: "DM",
    },
    {
      name: "Basseterre, Saint Kitts And Nevis",
      latlng: {
        lat: 17.2983,
        lng: -62.7342,
      },
      iso: "KN",
    },
    {
      name: "Tórshavn, Faroe Islands",
      latlng: {
        lat: 62,
        lng: -6.7833,
      },
      iso: "FO",
    },
    {
      name: "Pago Pago, American Samoa",
      latlng: {
        lat: -14.274,
        lng: -170.7046,
      },
      iso: "AS",
    },
    {
      name: "Valletta, Malta",
      latlng: {
        lat: 35.8978,
        lng: 14.5125,
      },
      iso: "MT",
    },
    {
      name: "Gaza, Gaza Strip",
      latlng: {
        lat: 31.5069,
        lng: 34.456,
      },
      iso: "XG",
    },
    {
      name: "Grand Turk, Turks And Caicos Islands",
      latlng: {
        lat: 21.4664,
        lng: -71.136,
      },
      iso: "TC",
    },
    {
      name: "Palikir, Federated States of Micronesia",
      latlng: {
        lat: 6.9178,
        lng: 158.185,
      },
      iso: "FM",
    },
    {
      name: "Funafuti, Tuvalu",
      latlng: {
        lat: -8.5243,
        lng: 179.1942,
      },
      iso: "TV",
    },
    {
      name: "Vaduz, Liechtenstein",
      latlng: {
        lat: 47.1397,
        lng: 9.5219,
      },
      iso: "LI",
    },
    {
      name: "Lobamba, Swaziland",
      latlng: {
        lat: -26.4465,
        lng: 31.2064,
      },
      iso: "SZ",
    },
    {
      name: "Avarua, Cook Islands",
      latlng: {
        lat: -21.207,
        lng: -159.771,
      },
      iso: "CK",
    },
    {
      name: "Saint George’s, Grenada",
      latlng: {
        lat: 12.0444,
        lng: -61.7417,
      },
      iso: "GD",
    },
    {
      name: "San Marino, San Marino",
      latlng: {
        lat: 43.932,
        lng: 12.4484,
      },
      iso: "SM",
    },
    // {
    //   name: 'Al Quds, West Bank',
    //   latlng: {
    //     lat: 31.7764,
    //     lng: 35.2269,
    //   },
    //   iso: 'XW',
    // },
    {
      name: "Capitol Hill, Northern Mariana Islands",
      latlng: {
        lat: 15.2137,
        lng: 145.7546,
      },
      iso: "MP",
    },
    {
      name: "Stanley, Falkland Islands (Islas Malvinas)",
      latlng: {
        lat: -51.7,
        lng: -57.85,
      },
      iso: "FK",
    },
    {
      name: "Vatican City, Vatican City",
      latlng: {
        lat: 41.9033,
        lng: 12.4534,
      },
      iso: "VA",
    },
    {
      name: "Alofi, Niue",
      latlng: {
        lat: -19.056,
        lng: -169.921,
      },
      iso: "NU",
    },
    {
      name: "Basse-Terre, Guadeloupe",
      latlng: {
        lat: 16.0104,
        lng: -61.7055,
      },
      iso: "GP",
    },
    {
      name: "Hagåtña, Guam",
      latlng: {
        lat: 13.4745,
        lng: 144.7504,
      },
      iso: "GU",
    },
    {
      name: "Marigot, Saint Martin",
      latlng: {
        lat: 18.0706,
        lng: -63.0847,
      },
      iso: "MF",
    },
    {
      name: "Jamestown, Saint Helena, Ascension, And Tristan Da Cunha",
      latlng: {
        lat: -15.9251,
        lng: -5.7179,
      },
      iso: "SH",
    },
    {
      name: "Brades, Montserrat",
      latlng: {
        lat: 16.7928,
        lng: -62.2106,
      },
      iso: "MS",
    },
    {
      name: "Philipsburg, Sint Maarten",
      latlng: {
        lat: 18.0256,
        lng: -63.0492,
      },
      iso: "SX",
    },
    {
      name: "Yaren, Nauru",
      latlng: {
        lat: -0.5477,
        lng: 166.9209,
      },
      iso: "NR",
    },
    {
      name: "Pristina, Kosovo",
      latlng: {
        lat: 42.6633,
        lng: 21.1622,
      },
      iso: "XK",
    },
    {
      name: "Gustavia, Saint Barthelemy",
      latlng: {
        lat: 17.8958,
        lng: -62.8508,
      },
      iso: "BL",
    },
    {
      name: "Road Town, British Virgin Islands",
      latlng: {
        lat: 18.4167,
        lng: -64.6167,
      },
      iso: "VG",
    },
    {
      name: "Ngerulmud, Palau",
      latlng: {
        lat: 7.5006,
        lng: 134.6242,
      },
      iso: "PW",
    },
    {
      name: "Saint-Pierre, Saint Pierre And Miquelon",
      latlng: {
        lat: 46.7811,
        lng: -56.1764,
      },
      iso: "PM",
    },
    {
      name: "The Valley, Anguilla",
      latlng: {
        lat: 18.2167,
        lng: -63.05,
      },
      iso: "AI",
    },
    {
      name: "Mata-Utu, Wallis And Futuna",
      latlng: {
        lat: -13.2825,
        lng: -176.1736,
      },
      iso: "WF",
    },
    {
      name: "Kingston, Norfolk Island",
      latlng: {
        lat: -29.0569,
        lng: 167.9617,
      },
      iso: "NF",
    },
    {
      name: "Longyearbyen, Svalbard",
      latlng: {
        lat: 78.2167,
        lng: 15.6333,
      },
      iso: "XR",
    },
    {
      name: "Tifariti, Morocco",
      latlng: {
        lat: 26.0928,
        lng: -10.6089,
      },
      iso: "MA",
    },
    {
      name: "Adamstown, Pitcairn Islands",
      latlng: {
        lat: -25.0667,
        lng: -130.0833,
      },
      iso: "PN",
    },
    {
      name: "Flying Fish Cove, Christmas Island",
      latlng: {
        lat: -10.4167,
        lng: 105.7167,
      },
      iso: "CX",
    },
    {
      name: "King Edward Point, South Georgia And South Sandwich Islands",
      latlng: {
        lat: -54.2833,
        lng: -36.5,
      },
      iso: "GS",
    },
    {
      name: "San Juan, Puerto Rico",
      latlng: {
        lat: 18.4037,
        lng: -66.0636,
      },
      iso: "PR",
    },
    {
      name: "Charlotte Amalie, U.S. Virgin Islands",
      latlng: {
        lat: 18.3419,
        lng: -64.9332,
      },
      iso: "VI",
    },
  ],
};

///////////////////////////////////
// global functions for the game //
///////////////////////////////////
function shuffle(array) {
  let currentIndex = array.length,
    randomIndex;

  // While there remain elements to shuffle...
  while (currentIndex != 0) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
}

function round(input) {
  // round to 2 decimal places
  return Math.round(input * 100) / 100;
}

function toRad(input) {
  return (input * Math.PI) / 180;
}

function haversine(lhs, rhs) {
  const R = 6371; // radius of earth in km
  const x1 = lhs.lat - rhs.lat;
  const dLat = toRad(x1);
  const x2 = lhs.lng - rhs.lng;
  const dLng = toRad(x2);
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(toRad(rhs.lat)) *
      Math.cos(toRad(lhs.lat)) *
      Math.sin(dLng / 2) *
      Math.sin(dLng / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const result = R * c;
  // result /= 1.60934; // miles
  return result;
}

function popRandomFlag() {
  shuffle(game.flags);
  return game.flags.pop();
}

function endGame() {
  // Do this on the next event loop tick
  setTimeout(() => {
    const summary = `
G A M E O V E R
rounds: ${game.rounds}
score: ${game.score}

good job!
 `;
    if (alert(summary)) {
    } else {
      window.location.reload();
    }
  }, 0);
}

function updateGameState(event) {
  // move on to the next flag
  const nextFlag = popRandomFlag();
  if (!nextFlag) {
    endGame();
  } else {
    game.previousFlag = game.currentFlag;
    game.currentFlag = nextFlag;
    let elem = document.getElementById("flag-img");
    if (!elem) {
      elem = document.createElement("img");
    }
    elem.setAttribute("id", "flag-img");
    elem.setAttribute(
      "src",
      `https://flagcdn.com/128x96/${game.currentFlag.iso.toLowerCase()}.png`
    );
    elem.setAttribute("width", "128");
    elem.setAttribute("height", "96");
    elem.setAttribute("alt", "Flag to guess");
    document.getElementById("flag").appendChild(elem);
  }

  if (event) {
    const distance = round(haversine(event.latlng, game.previousFlag.latlng));
    if (game.currentLine) {
      game.currentLine.remove(map);
    }
    game.currentLine = L.polyline([event.latlng, game.previousFlag.latlng], {
      color: "red",
    }).addTo(map);
    game.score = round(game.score + distance);
    game.rounds++;
    document.getElementById(
      "guess"
    ).innerText = `You were ${distance} km away from ${game.previousFlag.name}`;
    document.getElementById("rounds").innerText = `rounds: ${game.rounds}`;
    document.getElementById("score").innerText = `score: ${game.score}`;
  }
}

////////////////////
// setup the game //
////////////////////
map.on("click", updateGameState);

// let's get started!
game.currentFlag = popRandomFlag();
updateGameState();
