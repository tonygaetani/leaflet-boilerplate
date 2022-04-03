/////////////////////////////
// sketchy globals go here //
/////////////////////////////
// initialize our map
const map = L.map('map', {
  center: [41, -69], // center map to the waters off beautiful Nauset
  zoom: 4, // set the zoom level
});
// add a baselayer to the map
const OpenStreetMap = L.tileLayer(
  'http://a.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}.png',
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
  currentMarkers: [],
  currentContinent: "All",
  rounds: 0,
  score: 0,
  allFlags: [
    {
      name: 'Tokyo, Japan',
      latlng: {
        lat: 35.6839,
        lng: 139.7744,
      },
      iso: 'JP',
    },
    {
      name: 'Jakarta, Indonesia',
      latlng: {
        lat: -6.2146,
        lng: 106.8451,
      },
      iso: 'ID',
    },
    {
      name: 'Manila, Philippines',
      latlng: {
        lat: 14.6,
        lng: 120.9833,
      },
      iso: 'PH',
    },
    {
      name: 'Seoul, South Korea',
      latlng: {
        lat: 37.56,
        lng: 126.99,
      },
      iso: 'KR',
    },
    {
      name: 'Mexico City, Mexico',
      latlng: {
        lat: 19.4333,
        lng: -99.1333,
      },
      iso: 'MX',
    },
    {
      name: 'Cairo, Egypt',
      latlng: {
        lat: 30.0444,
        lng: 31.2358,
      },
      iso: 'EG',
    },
    {
      name: 'Beijing, China',
      latlng: {
        lat: 39.904,
        lng: 116.4075,
      },
      iso: 'CN',
    },
    {
      name: 'Moscow, Russia',
      latlng: {
        lat: 55.7558,
        lng: 37.6178,
      },
      iso: 'RU',
    },
    {
      name: 'Bangkok, Thailand',
      latlng: {
        lat: 13.75,
        lng: 100.5167,
      },
      iso: 'TH',
    },
    {
      name: 'Dhaka, Bangladesh',
      latlng: {
        lat: 23.7289,
        lng: 90.3944,
      },
      iso: 'BD',
    },
    {
      name: 'Buenos Aires, Argentina',
      latlng: {
        lat: -34.5997,
        lng: -58.3819,
      },
      iso: 'AR',
    },
    {
      name: 'Kinshasa, Congo (Kinshasa)',
      latlng: {
        lat: -4.3317,
        lng: 15.3139,
      },
      iso: 'CD',
    },
    {
      name: 'Tehran, Iran',
      latlng: {
        lat: 35.7,
        lng: 51.4167,
      },
      iso: 'IR',
    },
    {
      name: 'London, United Kingdom',
      latlng: {
        lat: 51.5072,
        lng: -0.1275,
      },
      iso: 'GB',
    },
    {
      name: 'Paris, France',
      latlng: {
        lat: 48.8566,
        lng: 2.3522,
      },
      iso: 'FR',
    },
    {
      name: 'Lima, Peru',
      latlng: {
        lat: -12.06,
        lng: -77.0375,
      },
      iso: 'PE',
    },
    {
      name: 'Luanda, Angola',
      latlng: {
        lat: -8.8383,
        lng: 13.2344,
      },
      iso: 'AO',
    },
    {
      name: 'Kuala Lumpur, Malaysia',
      latlng: {
        lat: 3.1478,
        lng: 101.6953,
      },
      iso: 'MY',
    },
    {
      name: 'Hanoi, Vietnam',
      latlng: {
        lat: 21.0245,
        lng: 105.8412,
      },
      iso: 'VN',
    },
    {
      name: 'Bogotá, Colombia',
      latlng: {
        lat: 4.6126,
        lng: -74.0705,
      },
      iso: 'CO',
    },
    {
      name: 'Dar es Salaam, Tanzania',
      latlng: {
        lat: -6.8,
        lng: 39.2833,
      },
      iso: 'TZ',
    },
    {
      name: 'Hong Kong, Hong Kong',
      latlng: {
        lat: 22.3069,
        lng: 114.1831,
      },
      iso: 'HK',
    },
    {
      name: 'Santiago, Chile',
      latlng: {
        lat: -33.45,
        lng: -70.6667,
      },
      iso: 'CL',
    },
    {
      name: 'Riyadh, Saudi Arabia',
      latlng: {
        lat: 24.65,
        lng: 46.71,
      },
      iso: 'SA',
    },
    {
      name: 'Baghdad, Iraq',
      latlng: {
        lat: 33.35,
        lng: 44.4167,
      },
      iso: 'IQ',
    },
    {
      name: 'Khartoum, Sudan',
      latlng: {
        lat: 15.6031,
        lng: 32.5265,
      },
      iso: 'SD',
    },
    {
      name: 'Madrid, Spain',
      latlng: {
        lat: 40.4167,
        lng: -3.7167,
      },
      iso: 'ES',
    },
    {
      name: 'Nairobi, Kenya',
      latlng: {
        lat: -1.2864,
        lng: 36.8172,
      },
      iso: 'KE',
    },
    {
      name: 'Rangoon, Myanmar',
      latlng: {
        lat: 16.795,
        lng: 96.16,
      },
      iso: 'MM',
    },
    {
      name: 'Washington, United States',
      latlng: {
        lat: 38.9047,
        lng: -77.0163,
      },
      iso: 'US',
    },
    {
      name: 'Singapore, Singapore',
      latlng: {
        lat: 1.3,
        lng: 103.8,
      },
      iso: 'SG',
    },
    {
      name: "Abidjan, Côte d'Ivoire",
      latlng: {
        lat: 5.3364,
        lng: -4.0267,
      },
      iso: 'CI',
    },
    {
      name: 'Kabul, Afghanistan',
      latlng: {
        lat: 34.5328,
        lng: 69.1658,
      },
      iso: 'AF',
    },
    {
      name: 'Amman, Jordan',
      latlng: {
        lat: 31.95,
        lng: 35.9333,
      },
      iso: 'JO',
    },
    {
      name: 'Berlin, Germany',
      latlng: {
        lat: 52.5167,
        lng: 13.3833,
      },
      iso: 'DE',
    },
    {
      name: 'Algiers, Algeria',
      latlng: {
        lat: 36.7764,
        lng: 3.0586,
      },
      iso: 'DZ',
    },
    {
      name: 'Addis Ababa, Ethiopia',
      latlng: {
        lat: 9.0272,
        lng: 38.7369,
      },
      iso: 'ET',
    },
    {
      name: 'Brasília, Brazil',
      latlng: {
        lat: -15.7939,
        lng: -47.8828,
      },
      iso: 'BR',
    },
    {
      name: 'Kuwait City, Kuwait',
      latlng: {
        lat: 29.375,
        lng: 47.98,
      },
      iso: 'KW',
    },
    {
      name: 'Kyiv, Ukraine',
      latlng: {
        lat: 50.45,
        lng: 30.5236,
      },
      iso: 'UA',
    },
    {
      name: 'Sanaa, Yemen',
      latlng: {
        lat: 15.35,
        lng: 44.2,
      },
      iso: 'YE',
    },
    {
      name: 'Guatemala City, Guatemala',
      latlng: {
        lat: 14.6099,
        lng: -90.5252,
      },
      iso: 'GT',
    },
    {
      name: 'Rome, Italy',
      latlng: {
        lat: 41.8931,
        lng: 12.4828,
      },
      iso: 'IT',
    },
    {
      name: 'La Paz, Bolivia',
      latlng: {
        lat: -16.4942,
        lng: -68.1475,
      },
      iso: 'BO',
    },
    {
      name: 'Pyongyang, North Korea',
      latlng: {
        lat: 39.03,
        lng: 125.73,
      },
      iso: 'KP',
    },
    {
      name: 'Antananarivo, Madagascar',
      latlng: {
        lat: -18.9386,
        lng: 47.5214,
      },
      iso: 'MG',
    },
    {
      name: 'Santo Domingo, Dominican Republic',
      latlng: {
        lat: 18.4764,
        lng: -69.8933,
      },
      iso: 'DO',
    },
    {
      name: 'Tashkent, Uzbekistan',
      latlng: {
        lat: 41.3,
        lng: 69.2667,
      },
      iso: 'UZ',
    },
    {
      name: 'Ouagadougou, Burkina Faso',
      latlng: {
        lat: 12.3686,
        lng: -1.5275,
      },
      iso: 'BF',
    },
    {
      name: 'Yaoundé, Cameroon',
      latlng: {
        lat: 3.8578,
        lng: 11.5181,
      },
      iso: 'CM',
    },
    {
      name: 'Accra, Ghana',
      latlng: {
        lat: 5.6037,
        lng: -0.187,
      },
      iso: 'GH',
    },
    {
      name: 'Baku, Azerbaijan',
      latlng: {
        lat: 40.3667,
        lng: 49.8352,
      },
      iso: 'AZ',
    },
    {
      name: 'Harare, Zimbabwe',
      latlng: {
        lat: -17.8292,
        lng: 31.0522,
      },
      iso: 'ZW',
    },
    {
      name: 'Havana, Cuba',
      latlng: {
        lat: 23.1367,
        lng: -82.3589,
      },
      iso: 'CU',
    },
    {
      name: 'Phnom Penh, Cambodia',
      latlng: {
        lat: 11.5696,
        lng: 104.921,
      },
      iso: 'KH',
    },
    {
      name: 'Mogadishu, Somalia',
      latlng: {
        lat: 2.0408,
        lng: 45.3425,
      },
      iso: 'SO',
    },
    {
      name: 'Bamako, Mali',
      latlng: {
        lat: 12.6458,
        lng: -7.9922,
      },
      iso: 'ML',
    },
    {
      name: 'Quito, Ecuador',
      latlng: {
        lat: -0.22,
        lng: -78.5125,
      },
      iso: 'EC',
    },
    {
      name: 'Minsk, Belarus',
      latlng: {
        lat: 53.9022,
        lng: 27.5618,
      },
      iso: 'BY',
    },
    {
      name: 'Caracas, Venezuela',
      latlng: {
        lat: 10.5,
        lng: -66.9333,
      },
      iso: 'VE',
    },
    {
      name: 'Vienna, Austria',
      latlng: {
        lat: 48.2083,
        lng: 16.3725,
      },
      iso: 'AT',
    },
    {
      name: 'Bucharest, Romania',
      latlng: {
        lat: 44.4,
        lng: 26.0833,
      },
      iso: 'RO',
    },
    {
      name: 'Brazzaville, Congo (Brazzaville)',
      latlng: {
        lat: -4.2667,
        lng: 15.2833,
      },
      iso: 'CG',
    },
    {
      name: 'Warsaw, Poland',
      latlng: {
        lat: 52.23,
        lng: 21.0111,
      },
      iso: 'PL',
    },
    {
      name: 'Damascus, Syria',
      latlng: {
        lat: 33.5131,
        lng: 36.2919,
      },
      iso: 'SY',
    },
    {
      name: 'Brussels, Belgium',
      latlng: {
        lat: 50.8353,
        lng: 4.3314,
      },
      iso: 'BE',
    },
    {
      name: 'Lusaka, Zambia',
      latlng: {
        lat: -15.4167,
        lng: 28.2833,
      },
      iso: 'ZM',
    },
    {
      name: 'Budapest, Hungary',
      latlng: {
        lat: 47.4983,
        lng: 19.0408,
      },
      iso: 'HU',
    },
    {
      name: 'Conakry, Guinea',
      latlng: {
        lat: 9.538,
        lng: -13.6773,
      },
      iso: 'GN',
    },
    {
      name: 'Kampala, Uganda',
      latlng: {
        lat: 0.3136,
        lng: 32.5811,
      },
      iso: 'UG',
    },
    {
      name: 'Abu Dhabi, United Arab Emirates',
      latlng: {
        lat: 24.4511,
        lng: 54.3969,
      },
      iso: 'AE',
    },
    {
      name: 'Muscat, Oman',
      latlng: {
        lat: 23.6139,
        lng: 58.5922,
      },
      iso: 'OM',
    },
    {
      name: 'Ulaanbaatar, Mongolia',
      latlng: {
        lat: 47.9214,
        lng: 106.9055,
      },
      iso: 'MN',
    },
    {
      name: 'Belgrade, Serbia',
      latlng: {
        lat: 44.8167,
        lng: 20.4667,
      },
      iso: 'RS',
    },
    {
      name: 'Prague, Czechia',
      latlng: {
        lat: 50.0833,
        lng: 14.4167,
      },
      iso: 'CZ',
    },
    {
      name: 'Montevideo, Uruguay',
      latlng: {
        lat: -34.8667,
        lng: -56.1667,
      },
      iso: 'UY',
    },
    {
      name: 'Sofia, Bulgaria',
      latlng: {
        lat: 42.6979,
        lng: 23.3217,
      },
      iso: 'BG',
    },
    {
      name: 'Abuja, Nigeria',
      latlng: {
        lat: 9.0556,
        lng: 7.4914,
      },
      iso: 'NG',
    },
    {
      name: 'Maputo, Mozambique',
      latlng: {
        lat: -25.9153,
        lng: 32.5764,
      },
      iso: 'MZ',
    },
    {
      name: 'Doha, Qatar',
      latlng: {
        lat: 25.3,
        lng: 51.5333,
      },
      iso: 'QA',
    },
    {
      name: 'Dakar, Senegal',
      latlng: {
        lat: 14.7319,
        lng: -17.4572,
      },
      iso: 'SN',
    },
    {
      name: 'Nay Pyi Taw, Myanmar',
      latlng: {
        lat: 19.7475,
        lng: 96.115,
      },
      iso: 'MM',
    },
    {
      name: 'Kigali, Rwanda',
      latlng: {
        lat: -1.9536,
        lng: 30.0606,
      },
      iso: 'RW',
    },
    {
      name: 'Tripoli, Libya',
      latlng: {
        lat: 32.8752,
        lng: 13.1875,
      },
      iso: 'LY',
    },
    {
      name: 'Tegucigalpa, Honduras',
      latlng: {
        lat: 14.0942,
        lng: -87.2067,
      },
      iso: 'HN',
    },
    {
      name: 'Tbilisi, Georgia',
      latlng: {
        lat: 41.7225,
        lng: 44.7925,
      },
      iso: 'GE',
    },
    {
      name: 'N’Djamena, Chad',
      latlng: {
        lat: 12.11,
        lng: 15.05,
      },
      iso: 'TD',
    },
    {
      name: 'Copenhagen, Denmark',
      latlng: {
        lat: 55.6805,
        lng: 12.5615,
      },
      iso: 'DK',
    },
    {
      name: 'Yerevan, Armenia',
      latlng: {
        lat: 40.1814,
        lng: 44.5144,
      },
      iso: 'AM',
    },
    {
      name: 'Nur-Sultan, Kazakhstan',
      latlng: {
        lat: 51.1333,
        lng: 71.4333,
      },
      iso: 'KZ',
    },
    {
      name: 'Nouakchott, Mauritania',
      latlng: {
        lat: 18.0858,
        lng: -15.9785,
      },
      iso: 'MR',
    },
    {
      name: 'Bishkek, Kyrgyzstan',
      latlng: {
        lat: 42.8667,
        lng: 74.5667,
      },
      iso: 'KG',
    },
    {
      name: 'Tunis, Tunisia',
      latlng: {
        lat: 36.8008,
        lng: 10.18,
      },
      iso: 'TN',
    },
    {
      name: 'Kathmandu, Nepal',
      latlng: {
        lat: 27.7167,
        lng: 85.3667,
      },
      iso: 'NP',
    },
    {
      name: 'Niamey, Niger',
      latlng: {
        lat: 13.5086,
        lng: 2.1111,
      },
      iso: 'NE',
    },
    {
      name: 'Managua, Nicaragua',
      latlng: {
        lat: 12.15,
        lng: -86.2667,
      },
      iso: 'NI',
    },
    {
      name: 'Monrovia, Liberia',
      latlng: {
        lat: 6.3106,
        lng: -10.8047,
      },
      iso: 'LR',
    },
    {
      name: 'Port-au-Prince, Haiti',
      latlng: {
        lat: 18.5425,
        lng: -72.3386,
      },
      iso: 'HT',
    },
    {
      name: 'Islamabad, Pakistan',
      latlng: {
        lat: 33.6989,
        lng: 73.0369,
      },
      iso: 'PK',
    },
    {
      name: 'Ottawa, Canada',
      latlng: {
        lat: 45.4247,
        lng: -75.695,
      },
      iso: 'CA',
    },
    {
      name: 'Stockholm, Sweden',
      latlng: {
        lat: 59.3294,
        lng: 18.0686,
      },
      iso: 'SE',
    },
    {
      name: 'Asmara, Eritrea',
      latlng: {
        lat: 15.3333,
        lng: 38.9167,
      },
      iso: 'ER',
    },
    {
      name: 'Freetown, Sierra Leone',
      latlng: {
        lat: 8.4833,
        lng: -13.2331,
      },
      iso: 'SL',
    },
    {
      name: 'Vientiane, Laos',
      latlng: {
        lat: 17.9667,
        lng: 102.6,
      },
      iso: 'LA',
    },
    {
      name: 'Jerusalem, Israel',
      latlng: {
        lat: 31.7833,
        lng: 35.2167,
      },
      iso: 'IL',
    },
    {
      name: 'Bangui, Central African Republic',
      latlng: {
        lat: 4.3732,
        lng: 18.5628,
      },
      iso: 'CF',
    },
    {
      name: 'Panama City, Panama',
      latlng: {
        lat: 9,
        lng: -79.5,
      },
      iso: 'PA',
    },
    {
      name: 'Amsterdam, Netherlands',
      latlng: {
        lat: 52.3667,
        lng: 4.8833,
      },
      iso: 'NL',
    },
    {
      name: 'Lomé, Togo',
      latlng: {
        lat: 6.1319,
        lng: 1.2228,
      },
      iso: 'TG',
    },
    {
      name: 'Libreville, Gabon',
      latlng: {
        lat: 0.3901,
        lng: 9.4544,
      },
      iso: 'GA',
    },
    {
      name: 'Zagreb, Croatia',
      latlng: {
        lat: 45.8131,
        lng: 15.9772,
      },
      iso: 'HR',
    },
    {
      name: 'Dushanbe, Tajikistan',
      latlng: {
        lat: 38.5731,
        lng: 68.7864,
      },
      iso: 'TJ',
    },
    {
      name: 'Lilongwe, Malawi',
      latlng: {
        lat: -13.9833,
        lng: 33.7833,
      },
      iso: 'MW',
    },
    {
      name: 'Cotonou, Benin',
      latlng: {
        lat: 6.402,
        lng: 2.518,
      },
      iso: 'BJ',
    },
    {
      name: 'Colombo, Sri Lanka',
      latlng: {
        lat: 6.9167,
        lng: 79.8333,
      },
      iso: 'LK',
    },
    {
      name: 'Pretoria, South Africa',
      latlng: {
        lat: -25.7464,
        lng: 28.1881,
      },
      iso: 'ZA',
    },
    {
      name: 'Oslo, Norway',
      latlng: {
        lat: 59.9111,
        lng: 10.7528,
      },
      iso: 'NO',
    },
    {
      name: 'Athens, Greece',
      latlng: {
        lat: 37.9842,
        lng: 23.7281,
      },
      iso: 'GR',
    },
    {
      name: 'Bujumbura, Burundi',
      latlng: {
        lat: -3.3825,
        lng: 29.3611,
      },
      iso: 'BI',
    },
    {
      name: 'Helsinki, Finland',
      latlng: {
        lat: 60.1756,
        lng: 24.9342,
      },
      iso: 'FI',
    },
    {
      name: 'Skopje, Macedonia',
      latlng: {
        lat: 41.9833,
        lng: 21.4333,
      },
      iso: 'MK',
    },
    {
      name: 'Chisinau, Moldova',
      latlng: {
        lat: 47.0228,
        lng: 28.8353,
      },
      iso: 'MD',
    },
    {
      name: 'Riga, Latvia',
      latlng: {
        lat: 56.9475,
        lng: 24.1069,
      },
      iso: 'LV',
    },
    {
      name: 'Kingston, Jamaica',
      latlng: {
        lat: 17.9714,
        lng: -76.7931,
      },
      iso: 'JM',
    },
    {
      name: 'Rabat, Morocco',
      latlng: {
        lat: 34.0253,
        lng: -6.8361,
      },
      iso: 'MA',
    },
    {
      name: 'Vilnius, Lithuania',
      latlng: {
        lat: 54.6833,
        lng: 25.2833,
      },
      iso: 'LT',
    },
    {
      name: 'San Salvador, El Salvador',
      latlng: {
        lat: 13.6989,
        lng: -89.1914,
      },
      iso: 'SV',
    },
    {
      name: 'Djibouti, Djibouti',
      latlng: {
        lat: 11.595,
        lng: 43.1481,
      },
      iso: 'DJ',
    },
    {
      name: 'Dublin, Ireland',
      latlng: {
        lat: 53.3497,
        lng: -6.2603,
      },
      iso: 'IE',
    },
    {
      name: 'The Hague, Netherlands',
      latlng: {
        lat: 52.08,
        lng: 4.31,
      },
      iso: 'NL',
    },
    {
      name: 'Asunción, Paraguay',
      latlng: {
        lat: -25.3,
        lng: -57.6333,
      },
      iso: 'PY',
    },
    {
      name: 'Lisbon, Portugal',
      latlng: {
        lat: 38.708,
        lng: -9.139,
      },
      iso: 'PT',
    },
    {
      name: 'Bratislava, Slovakia',
      latlng: {
        lat: 48.1447,
        lng: 17.1128,
      },
      iso: 'SK',
    },
    {
      name: 'Tallinn, Estonia',
      latlng: {
        lat: 59.4372,
        lng: 24.745,
      },
      iso: 'EE',
    },
    {
      name: 'Beirut, Lebanon',
      latlng: {
        lat: 33.8869,
        lng: 35.5131,
      },
      iso: 'LB',
    },
    {
      name: 'Cape Town, South Africa',
      latlng: {
        lat: -33.925,
        lng: 18.425,
      },
      iso: 'ZA',
    },
    {
      name: 'Tirana, Albania',
      latlng: {
        lat: 41.33,
        lng: 19.82,
      },
      iso: 'AL',
    },
    {
      name: 'Wellington, New Zealand',
      latlng: {
        lat: -41.2889,
        lng: 174.7772,
      },
      iso: 'NZ',
    },
    {
      name: 'Dodoma, Tanzania',
      latlng: {
        lat: -6.1835,
        lng: 35.746,
      },
      iso: 'TZ',
    },
    {
      name: 'Bissau, Guinea-Bissau',
      latlng: {
        lat: 11.8592,
        lng: -15.5956,
      },
      iso: 'GW',
    },
    {
      name: 'Canberra, Australia',
      latlng: {
        lat: -35.2931,
        lng: 149.1269,
      },
      iso: 'AU',
    },
    {
      name: 'Juba, South Sudan',
      latlng: {
        lat: 4.85,
        lng: 31.6,
      },
      iso: 'SS',
    },
    {
      name: "Yamoussoukro, Côte d'Ivoire",
      latlng: {
        lat: 6.8161,
        lng: -5.2742,
      },
      iso: 'CI',
    },
    {
      name: 'Maseru, Lesotho',
      latlng: {
        lat: -29.31,
        lng: 27.48,
      },
      iso: 'LS',
    },
    {
      name: 'Nicosia, Cyprus',
      latlng: {
        lat: 35.1725,
        lng: 33.365,
      },
      iso: 'CY',
    },
    {
      name: 'Windhoek, Namibia',
      latlng: {
        lat: -22.57,
        lng: 17.0836,
      },
      iso: 'NA',
    },
    {
      name: 'Port Moresby, Papua New Guinea',
      latlng: {
        lat: -9.4789,
        lng: 147.1494,
      },
      iso: 'PG',
    },
    {
      name: 'Porto-Novo, Benin',
      latlng: {
        lat: 6.4833,
        lng: 2.6167,
      },
      iso: 'BJ',
    },
    {
      name: 'Sucre, Bolivia',
      latlng: {
        lat: -19.0431,
        lng: -65.2592,
      },
      iso: 'BO',
    },
    {
      name: 'San José, Costa Rica',
      latlng: {
        lat: 9.9333,
        lng: -84.0833,
      },
      iso: 'CR',
    },
    {
      name: 'Ljubljana, Slovenia',
      latlng: {
        lat: 46.05,
        lng: 14.5167,
      },
      iso: 'SI',
    },
    {
      name: 'Sarajevo, Bosnia And Herzegovina',
      latlng: {
        lat: 43.8563,
        lng: 18.4132,
      },
      iso: 'BA',
    },
    {
      name: 'Nassau, The Bahamas',
      latlng: {
        lat: 25.0667,
        lng: -77.3333,
      },
      iso: 'BS',
    },
    {
      name: 'Bloemfontein, South Africa',
      latlng: {
        lat: -29.1,
        lng: 26.2167,
      },
      iso: 'ZA',
    },
    {
      name: 'Fort-de-France, Martinique',
      latlng: {
        lat: 14.6104,
        lng: -61.08,
      },
      iso: 'MQ',
    },
    {
      name: 'New Delhi, India',
      latlng: {
        lat: 28.6139,
        lng: 77.209,
      },
      iso: 'IN',
    },
    {
      name: 'Gaborone, Botswana',
      latlng: {
        lat: -24.6569,
        lng: 25.9086,
      },
      iso: 'BW',
    },
    {
      name: 'Paramaribo, Suriname',
      latlng: {
        lat: 5.8667,
        lng: -55.1667,
      },
      iso: 'SR',
    },
    {
      name: 'Dili, Timor-Leste',
      latlng: {
        lat: -8.5536,
        lng: 125.5783,
      },
      iso: 'TL',
    },
    {
      name: 'Male, Maldives',
      latlng: {
        lat: 4.175,
        lng: 73.5083,
      },
      iso: 'MV',
    },
    {
      name: 'Georgetown, Guyana',
      latlng: {
        lat: 6.7833,
        lng: -58.1667,
      },
      iso: 'GY',
    },
    {
      name: 'Gibraltar, Gibraltar',
      latlng: {
        lat: 36.1324,
        lng: -5.3781,
      },
      iso: 'GI',
    },
    {
      name: 'Saint-Denis, Reunion',
      latlng: {
        lat: -20.8789,
        lng: 55.4481,
      },
      iso: 'RE',
    },
    {
      name: 'Malabo, Equatorial Guinea',
      latlng: {
        lat: 3.7521,
        lng: 8.7737,
      },
      iso: 'GQ',
    },
    {
      name: 'Podgorica, Montenegro',
      latlng: {
        lat: 42.4397,
        lng: 19.2661,
      },
      iso: 'ME',
    },
    {
      name: 'Manama, Bahrain',
      latlng: {
        lat: 26.225,
        lng: 50.5775,
      },
      iso: 'BH',
    },
    {
      name: 'Port Louis, Mauritius',
      latlng: {
        lat: -20.1667,
        lng: 57.5,
      },
      iso: 'MU',
    },
    {
      name: 'Willemstad, Curaçao',
      latlng: {
        lat: 12.108,
        lng: -68.935,
      },
      iso: 'CW',
    },
    {
      name: 'Bern, Switzerland',
      latlng: {
        lat: 46.948,
        lng: 7.4474,
      },
      iso: 'CH',
    },
    {
      name: 'Papeete, French Polynesia',
      latlng: {
        lat: -17.5334,
        lng: -149.5667,
      },
      iso: 'PF',
    },
    {
      name: 'Luxembourg, Luxembourg',
      latlng: {
        lat: 49.6106,
        lng: 6.1328,
      },
      iso: 'LU',
    },
    {
      name: 'Reykjavík, Iceland',
      latlng: {
        lat: 64.1475,
        lng: -21.935,
      },
      iso: 'IS',
    },
    {
      name: 'Praia, Cabo Verde',
      latlng: {
        lat: 14.9177,
        lng: -23.5092,
      },
      iso: 'CV',
    },
    {
      name: 'Sri Jayewardenepura Kotte, Sri Lanka',
      latlng: {
        lat: 6.9,
        lng: 79.9164,
      },
      iso: 'LK',
    },
    {
      name: 'Bridgetown, Barbados',
      latlng: {
        lat: 13.0975,
        lng: -59.6167,
      },
      iso: 'BB',
    },
    {
      name: 'Moroni, Comoros',
      latlng: {
        lat: -11.7036,
        lng: 43.2536,
      },
      iso: 'KM',
    },
    {
      name: 'Thimphu, Bhutan',
      latlng: {
        lat: 27.4833,
        lng: 89.6333,
      },
      iso: 'BT',
    },
    {
      name: 'Mbabane, Swaziland',
      latlng: {
        lat: -26.3208,
        lng: 31.1617,
      },
      iso: 'SZ',
    },
    {
      name: 'Nouméa, New Caledonia',
      latlng: {
        lat: -22.2625,
        lng: 166.4443,
      },
      iso: 'NC',
    },
    {
      name: 'Honiara, Solomon Islands',
      latlng: {
        lat: -9.4333,
        lng: 159.95,
      },
      iso: 'SB',
    },
    {
      name: 'Suva, Fiji',
      latlng: {
        lat: -18.1333,
        lng: 178.4333,
      },
      iso: 'FJ',
    },
    {
      name: 'Ankara, Turkey',
      latlng: {
        lat: 39.93,
        lng: 32.85,
      },
      iso: 'TR',
    },
    {
      name: 'Castries, Saint Lucia',
      latlng: {
        lat: 14.0167,
        lng: -60.9833,
      },
      iso: 'LC',
    },
    {
      name: 'Cayenne, French Guiana',
      latlng: {
        lat: 4.933,
        lng: -52.33,
      },
      iso: 'GF',
    },
    {
      name: 'São Tomé, Sao Tome And Principe',
      latlng: {
        lat: 0.3333,
        lng: 6.7333,
      },
      iso: 'ST',
    },
    {
      name: 'Port-Vila, Vanuatu',
      latlng: {
        lat: -17.7333,
        lng: 168.3167,
      },
      iso: 'VU',
    },
    {
      name: 'Hamilton, Bermuda',
      latlng: {
        lat: 32.2942,
        lng: -64.7839,
      },
      iso: 'BM',
    },
    {
      name: 'Bandar Seri Begawan, Brunei',
      latlng: {
        lat: 4.9167,
        lng: 114.9167,
      },
      iso: 'BN',
    },
    {
      name: 'Monaco, Monaco',
      latlng: {
        lat: 43.7396,
        lng: 7.4069,
      },
      iso: 'MC',
    },
    {
      name: 'Gitega, Burundi',
      latlng: {
        lat: -3.4283,
        lng: 29.925,
      },
      iso: 'BI',
    },
    {
      name: 'Port of Spain, Trinidad And Tobago',
      latlng: {
        lat: 10.6667,
        lng: -61.5167,
      },
      iso: 'TT',
    },
    {
      name: 'Apia, Samoa',
      latlng: {
        lat: -13.8333,
        lng: -171.8333,
      },
      iso: 'WS',
    },
    {
      name: 'Tarawa, Kiribati',
      latlng: {
        lat: 1.3382,
        lng: 173.0176,
      },
      iso: 'KI',
    },
    {
      name: 'Oranjestad, Aruba',
      latlng: {
        lat: 12.5186,
        lng: -70.0358,
      },
      iso: 'AW',
    },
    {
      name: 'Saint Helier, Jersey',
      latlng: {
        lat: 49.1858,
        lng: -2.11,
      },
      iso: 'JE',
    },
    {
      name: 'Banjul, The Gambia',
      latlng: {
        lat: 13.4531,
        lng: -16.5775,
      },
      iso: 'GM',
    },
    {
      name: 'Mamoudzou, Mayotte',
      latlng: {
        lat: -12.7871,
        lng: 45.275,
      },
      iso: 'YT',
    },
    {
      name: 'Majuro, Marshall Islands',
      latlng: {
        lat: 7.0918,
        lng: 171.3802,
      },
      iso: 'MH',
    },
    {
      name: 'Douglas, Isle Of Man',
      latlng: {
        lat: 54.15,
        lng: -4.4819,
      },
      iso: 'IM',
    },
    {
      name: 'George Town, Cayman Islands',
      latlng: {
        lat: 19.2866,
        lng: -81.3744,
      },
      iso: 'KY',
    },
    {
      name: 'Victoria, Seychelles',
      latlng: {
        lat: -4.6236,
        lng: 55.4544,
      },
      iso: 'SC',
    },
    {
      name: 'Kingstown, Saint Vincent And The Grenadines',
      latlng: {
        lat: 13.1667,
        lng: -61.2333,
      },
      iso: 'VC',
    },
    {
      name: 'Andorra la Vella, Andorra',
      latlng: {
        lat: 42.5,
        lng: 1.5,
      },
      iso: 'AD',
    },
    {
      name: 'Saint John’s, Antigua And Barbuda',
      latlng: {
        lat: 17.1211,
        lng: -61.8447,
      },
      iso: 'AG',
    },
    {
      name: 'Nuku‘alofa, Tonga',
      latlng: {
        lat: -21.1347,
        lng: -175.2083,
      },
      iso: 'TO',
    },
    {
      name: 'Ashgabat, Turkmenistan',
      latlng: {
        lat: 37.95,
        lng: 58.3833,
      },
      iso: 'TM',
    },
    {
      name: 'Nuuk, Greenland',
      latlng: {
        lat: 64.175,
        lng: -51.7333,
      },
      iso: 'GL',
    },
    {
      name: 'Belmopan, Belize',
      latlng: {
        lat: 17.25,
        lng: -88.7675,
      },
      iso: 'BZ',
    },
    {
      name: 'Roseau, Dominica',
      latlng: {
        lat: 15.3,
        lng: -61.3833,
      },
      iso: 'DM',
    },
    {
      name: 'Basseterre, Saint Kitts And Nevis',
      latlng: {
        lat: 17.2983,
        lng: -62.7342,
      },
      iso: 'KN',
    },
    {
      name: 'Tórshavn, Faroe Islands',
      latlng: {
        lat: 62,
        lng: -6.7833,
      },
      iso: 'FO',
    },
    {
      name: 'Pago Pago, American Samoa',
      latlng: {
        lat: -14.274,
        lng: -170.7046,
      },
      iso: 'AS',
    },
    {
      name: 'Valletta, Malta',
      latlng: {
        lat: 35.8978,
        lng: 14.5125,
      },
      iso: 'MT',
    },
    // {
    //   name: 'Gaza, Gaza Strip',
    //   latlng: {
    //     lat: 31.5069,
    //     lng: 34.456,
    //   },
    //   iso: 'XG',
    // },
    {
      name: 'Grand Turk, Turks And Caicos Islands',
      latlng: {
        lat: 21.4664,
        lng: -71.136,
      },
      iso: 'TC',
    },
    {
      name: 'Palikir, Federated States of Micronesia',
      latlng: {
        lat: 6.9178,
        lng: 158.185,
      },
      iso: 'FM',
    },
    {
      name: 'Funafuti, Tuvalu',
      latlng: {
        lat: -8.5243,
        lng: 179.1942,
      },
      iso: 'TV',
    },
    {
      name: 'Vaduz, Liechtenstein',
      latlng: {
        lat: 47.1397,
        lng: 9.5219,
      },
      iso: 'LI',
    },
    {
      name: 'Lobamba, Swaziland',
      latlng: {
        lat: -26.4465,
        lng: 31.2064,
      },
      iso: 'SZ',
    },
    {
      name: 'Avarua, Cook Islands',
      latlng: {
        lat: -21.207,
        lng: -159.771,
      },
      iso: 'CK',
    },
    {
      name: 'Saint George’s, Grenada',
      latlng: {
        lat: 12.0444,
        lng: -61.7417,
      },
      iso: 'GD',
    },
    {
      name: 'San Marino, San Marino',
      latlng: {
        lat: 43.932,
        lng: 12.4484,
      },
      iso: 'SM',
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
      name: 'Capitol Hill, Northern Mariana Islands',
      latlng: {
        lat: 15.2137,
        lng: 145.7546,
      },
      iso: 'MP',
    },
    {
      name: 'Stanley, Falkland Islands (Islas Malvinas)',
      latlng: {
        lat: -51.7,
        lng: -57.85,
      },
      iso: 'FK',
    },
    {
      name: 'Vatican City, Vatican City',
      latlng: {
        lat: 41.9033,
        lng: 12.4534,
      },
      iso: 'VA',
    },
    {
      name: 'Alofi, Niue',
      latlng: {
        lat: -19.056,
        lng: -169.921,
      },
      iso: 'NU',
    },
    {
      name: 'Basse-Terre, Guadeloupe',
      latlng: {
        lat: 16.0104,
        lng: -61.7055,
      },
      iso: 'GP',
    },
    {
      name: 'Hagåtña, Guam',
      latlng: {
        lat: 13.4745,
        lng: 144.7504,
      },
      iso: 'GU',
    },
    {
      name: 'Marigot, Saint Martin',
      latlng: {
        lat: 18.0706,
        lng: -63.0847,
      },
      iso: 'MF',
    },
    {
      name: 'Jamestown, Saint Helena, Ascension, And Tristan Da Cunha',
      latlng: {
        lat: -15.9251,
        lng: -5.7179,
      },
      iso: 'SH',
    },
    {
      name: 'Brades, Montserrat',
      latlng: {
        lat: 16.7928,
        lng: -62.2106,
      },
      iso: 'MS',
    },
    {
      name: 'Philipsburg, Sint Maarten',
      latlng: {
        lat: 18.0256,
        lng: -63.0492,
      },
      iso: 'SX',
    },
    {
      name: 'Yaren, Nauru',
      latlng: {
        lat: -0.5477,
        lng: 166.9209,
      },
      iso: 'NR',
    },
    {
      name: 'Pristina, Kosovo',
      latlng: {
        lat: 42.6633,
        lng: 21.1622,
      },
      iso: 'XK',
    },
    {
      name: 'Gustavia, Saint Barthelemy',
      latlng: {
        lat: 17.8958,
        lng: -62.8508,
      },
      iso: 'BL',
    },
    {
      name: 'Road Town, British Virgin Islands',
      latlng: {
        lat: 18.4167,
        lng: -64.6167,
      },
      iso: 'VG',
    },
    {
      name: 'Ngerulmud, Palau',
      latlng: {
        lat: 7.5006,
        lng: 134.6242,
      },
      iso: 'PW',
    },
    {
      name: 'Saint-Pierre, Saint Pierre And Miquelon',
      latlng: {
        lat: 46.7811,
        lng: -56.1764,
      },
      iso: 'PM',
    },
    {
      name: 'The Valley, Anguilla',
      latlng: {
        lat: 18.2167,
        lng: -63.05,
      },
      iso: 'AI',
    },
    {
      name: 'Mata-Utu, Wallis And Futuna',
      latlng: {
        lat: -13.2825,
        lng: -176.1736,
      },
      iso: 'WF',
    },
    {
      name: 'Kingston, Norfolk Island',
      latlng: {
        lat: -29.0569,
        lng: 167.9617,
      },
      iso: 'NF',
    },
    {
      name: 'Longyearbyen, Svalbard',
      latlng: {
        lat: 78.2167,
        lng: 15.6333,
      },
      iso: 'XR',
    },
    {
      name: 'Tifariti, Morocco',
      latlng: {
        lat: 26.0928,
        lng: -10.6089,
      },
      iso: 'MA',
    },
    {
      name: 'Adamstown, Pitcairn Islands',
      latlng: {
        lat: -25.0667,
        lng: -130.0833,
      },
      iso: 'PN',
    },
    {
      name: 'Flying Fish Cove, Christmas Island',
      latlng: {
        lat: -10.4167,
        lng: 105.7167,
      },
      iso: 'CX',
    },
    {
      name: 'King Edward Point, South Georgia And South Sandwich Islands',
      latlng: {
        lat: -54.2833,
        lng: -36.5,
      },
      iso: 'GS',
    },
    {
      name: 'San Juan, Puerto Rico',
      latlng: {
        lat: 18.4037,
        lng: -66.0636,
      },
      iso: 'PR',
    },
    {
      name: 'Charlotte Amalie, U.S. Virgin Islands',
      latlng: {
        lat: 18.3419,
        lng: -64.9332,
      },
      iso: 'VI',
    },
  ],
  continents: [
    {
      "Continent_Name": "Asia",
      "Continent_Code": "AS",
      "Country_Name": "Afghanistan, Islamic Republic of",
      "Two_Letter_Country_Code": "AF",
      "Three_Letter_Country_Code": "AFG",
      "Country_Number": 4
    },
    {
      "Continent_Name": "Europe",
      "Continent_Code": "EU",
      "Country_Name": "Albania, Republic of",
      "Two_Letter_Country_Code": "AL",
      "Three_Letter_Country_Code": "ALB",
      "Country_Number": 8
    },
    {
      "Continent_Name": "Africa",
      "Continent_Code": "AF",
      "Country_Name": "Algeria, People's Democratic Republic of",
      "Two_Letter_Country_Code": "DZ",
      "Three_Letter_Country_Code": "DZA",
      "Country_Number": 12
    },
    {
      "Continent_Name": "Oceania",
      "Continent_Code": "OC",
      "Country_Name": "American Samoa",
      "Two_Letter_Country_Code": "AS",
      "Three_Letter_Country_Code": "ASM",
      "Country_Number": 16
    },
    {
      "Continent_Name": "Europe",
      "Continent_Code": "EU",
      "Country_Name": "Andorra, Principality of",
      "Two_Letter_Country_Code": "AD",
      "Three_Letter_Country_Code": "AND",
      "Country_Number": 20
    },
    {
      "Continent_Name": "Africa",
      "Continent_Code": "AF",
      "Country_Name": "Angola, Republic of",
      "Two_Letter_Country_Code": "AO",
      "Three_Letter_Country_Code": "AGO",
      "Country_Number": 24
    },
    {
      "Continent_Name": "North America",
      "Continent_Code": "NA",
      "Country_Name": "Antigua and Barbuda",
      "Two_Letter_Country_Code": "AG",
      "Three_Letter_Country_Code": "ATG",
      "Country_Number": 28
    },
    {
      "Continent_Name": "Europe",
      "Continent_Code": "EU",
      "Country_Name": "Azerbaijan, Republic of",
      "Two_Letter_Country_Code": "AZ",
      "Three_Letter_Country_Code": "AZE",
      "Country_Number": 31
    },
    {
      "Continent_Name": "Asia",
      "Continent_Code": "AS",
      "Country_Name": "Azerbaijan, Republic of",
      "Two_Letter_Country_Code": "AZ",
      "Three_Letter_Country_Code": "AZE",
      "Country_Number": 31
    },
    {
      "Continent_Name": "South America",
      "Continent_Code": "SA",
      "Country_Name": "Argentina, Argentine Republic",
      "Two_Letter_Country_Code": "AR",
      "Three_Letter_Country_Code": "ARG",
      "Country_Number": 32
    },
    {
      "Continent_Name": "Oceania",
      "Continent_Code": "OC",
      "Country_Name": "Australia, Commonwealth of",
      "Two_Letter_Country_Code": "AU",
      "Three_Letter_Country_Code": "AUS",
      "Country_Number": 36
    },
    {
      "Continent_Name": "Europe",
      "Continent_Code": "EU",
      "Country_Name": "Austria, Republic of",
      "Two_Letter_Country_Code": "AT",
      "Three_Letter_Country_Code": "AUT",
      "Country_Number": 40
    },
    {
      "Continent_Name": "North America",
      "Continent_Code": "NA",
      "Country_Name": "Bahamas, Commonwealth of the",
      "Two_Letter_Country_Code": "BS",
      "Three_Letter_Country_Code": "BHS",
      "Country_Number": 44
    },
    {
      "Continent_Name": "Asia",
      "Continent_Code": "AS",
      "Country_Name": "Bahrain, Kingdom of",
      "Two_Letter_Country_Code": "BH",
      "Three_Letter_Country_Code": "BHR",
      "Country_Number": 48
    },
    {
      "Continent_Name": "Asia",
      "Continent_Code": "AS",
      "Country_Name": "Bangladesh, People's Republic of",
      "Two_Letter_Country_Code": "BD",
      "Three_Letter_Country_Code": "BGD",
      "Country_Number": 50
    },
    {
      "Continent_Name": "Europe",
      "Continent_Code": "EU",
      "Country_Name": "Armenia, Republic of",
      "Two_Letter_Country_Code": "AM",
      "Three_Letter_Country_Code": "ARM",
      "Country_Number": 51
    },
    {
      "Continent_Name": "Asia",
      "Continent_Code": "AS",
      "Country_Name": "Armenia, Republic of",
      "Two_Letter_Country_Code": "AM",
      "Three_Letter_Country_Code": "ARM",
      "Country_Number": 51
    },
    {
      "Continent_Name": "North America",
      "Continent_Code": "NA",
      "Country_Name": "Barbados",
      "Two_Letter_Country_Code": "BB",
      "Three_Letter_Country_Code": "BRB",
      "Country_Number": 52
    },
    {
      "Continent_Name": "Europe",
      "Continent_Code": "EU",
      "Country_Name": "Belgium, Kingdom of",
      "Two_Letter_Country_Code": "BE",
      "Three_Letter_Country_Code": "BEL",
      "Country_Number": 56
    },
    {
      "Continent_Name": "North America",
      "Continent_Code": "NA",
      "Country_Name": "Bermuda",
      "Two_Letter_Country_Code": "BM",
      "Three_Letter_Country_Code": "BMU",
      "Country_Number": 60
    },
    {
      "Continent_Name": "Asia",
      "Continent_Code": "AS",
      "Country_Name": "Bhutan, Kingdom of",
      "Two_Letter_Country_Code": "BT",
      "Three_Letter_Country_Code": "BTN",
      "Country_Number": 64
    },
    {
      "Continent_Name": "South America",
      "Continent_Code": "SA",
      "Country_Name": "Bolivia, Republic of",
      "Two_Letter_Country_Code": "BO",
      "Three_Letter_Country_Code": "BOL",
      "Country_Number": 68
    },
    {
      "Continent_Name": "Europe",
      "Continent_Code": "EU",
      "Country_Name": "Bosnia and Herzegovina",
      "Two_Letter_Country_Code": "BA",
      "Three_Letter_Country_Code": "BIH",
      "Country_Number": 70
    },
    {
      "Continent_Name": "Africa",
      "Continent_Code": "AF",
      "Country_Name": "Botswana, Republic of",
      "Two_Letter_Country_Code": "BW",
      "Three_Letter_Country_Code": "BWA",
      "Country_Number": 72
    },
    {
      "Continent_Name": "South America",
      "Continent_Code": "SA",
      "Country_Name": "Brazil, Federative Republic of",
      "Two_Letter_Country_Code": "BR",
      "Three_Letter_Country_Code": "BRA",
      "Country_Number": 76
    },
    {
      "Continent_Name": "North America",
      "Continent_Code": "NA",
      "Country_Name": "Belize",
      "Two_Letter_Country_Code": "BZ",
      "Three_Letter_Country_Code": "BLZ",
      "Country_Number": 84
    },
    {
      "Continent_Name": "Asia",
      "Continent_Code": "AS",
      "Country_Name": "British Indian Ocean Territory (Chagos Archipelago)",
      "Two_Letter_Country_Code": "IO",
      "Three_Letter_Country_Code": "IOT",
      "Country_Number": 86
    },
    {
      "Continent_Name": "Oceania",
      "Continent_Code": "OC",
      "Country_Name": "Solomon Islands",
      "Two_Letter_Country_Code": "SB",
      "Three_Letter_Country_Code": "SLB",
      "Country_Number": 90
    },
    {
      "Continent_Name": "North America",
      "Continent_Code": "NA",
      "Country_Name": "British Virgin Islands",
      "Two_Letter_Country_Code": "VG",
      "Three_Letter_Country_Code": "VGB",
      "Country_Number": 92
    },
    {
      "Continent_Name": "Asia",
      "Continent_Code": "AS",
      "Country_Name": "Brunei Darussalam",
      "Two_Letter_Country_Code": "BN",
      "Three_Letter_Country_Code": "BRN",
      "Country_Number": 96
    },
    {
      "Continent_Name": "Europe",
      "Continent_Code": "EU",
      "Country_Name": "Bulgaria, Republic of",
      "Two_Letter_Country_Code": "BG",
      "Three_Letter_Country_Code": "BGR",
      "Country_Number": 100
    },
    {
      "Continent_Name": "Asia",
      "Continent_Code": "AS",
      "Country_Name": "Myanmar, Union of",
      "Two_Letter_Country_Code": "MM",
      "Three_Letter_Country_Code": "MMR",
      "Country_Number": 104
    },
    {
      "Continent_Name": "Africa",
      "Continent_Code": "AF",
      "Country_Name": "Burundi, Republic of",
      "Two_Letter_Country_Code": "BI",
      "Three_Letter_Country_Code": "BDI",
      "Country_Number": 108
    },
    {
      "Continent_Name": "Europe",
      "Continent_Code": "EU",
      "Country_Name": "Belarus, Republic of",
      "Two_Letter_Country_Code": "BY",
      "Three_Letter_Country_Code": "BLR",
      "Country_Number": 112
    },
    {
      "Continent_Name": "Asia",
      "Continent_Code": "AS",
      "Country_Name": "Cambodia, Kingdom of",
      "Two_Letter_Country_Code": "KH",
      "Three_Letter_Country_Code": "KHM",
      "Country_Number": 116
    },
    {
      "Continent_Name": "Africa",
      "Continent_Code": "AF",
      "Country_Name": "Cameroon, Republic of",
      "Two_Letter_Country_Code": "CM",
      "Three_Letter_Country_Code": "CMR",
      "Country_Number": 120
    },
    {
      "Continent_Name": "North America",
      "Continent_Code": "NA",
      "Country_Name": "Canada",
      "Two_Letter_Country_Code": "CA",
      "Three_Letter_Country_Code": "CAN",
      "Country_Number": 124
    },
    {
      "Continent_Name": "Africa",
      "Continent_Code": "AF",
      "Country_Name": "Cape Verde, Republic of",
      "Two_Letter_Country_Code": "CV",
      "Three_Letter_Country_Code": "CPV",
      "Country_Number": 132
    },
    {
      "Continent_Name": "North America",
      "Continent_Code": "NA",
      "Country_Name": "Cayman Islands",
      "Two_Letter_Country_Code": "KY",
      "Three_Letter_Country_Code": "CYM",
      "Country_Number": 136
    },
    {
      "Continent_Name": "Africa",
      "Continent_Code": "AF",
      "Country_Name": "Central African Republic",
      "Two_Letter_Country_Code": "CF",
      "Three_Letter_Country_Code": "CAF",
      "Country_Number": 140
    },
    {
      "Continent_Name": "Asia",
      "Continent_Code": "AS",
      "Country_Name": "Sri Lanka, Democratic Socialist Republic of",
      "Two_Letter_Country_Code": "LK",
      "Three_Letter_Country_Code": "LKA",
      "Country_Number": 144
    },
    {
      "Continent_Name": "Africa",
      "Continent_Code": "AF",
      "Country_Name": "Chad, Republic of",
      "Two_Letter_Country_Code": "TD",
      "Three_Letter_Country_Code": "TCD",
      "Country_Number": 148
    },
    {
      "Continent_Name": "South America",
      "Continent_Code": "SA",
      "Country_Name": "Chile, Republic of",
      "Two_Letter_Country_Code": "CL",
      "Three_Letter_Country_Code": "CHL",
      "Country_Number": 152
    },
    {
      "Continent_Name": "Asia",
      "Continent_Code": "AS",
      "Country_Name": "China, People's Republic of",
      "Two_Letter_Country_Code": "CN",
      "Three_Letter_Country_Code": "CHN",
      "Country_Number": 156
    },
    {
      "Continent_Name": "Asia",
      "Continent_Code": "AS",
      "Country_Name": "Taiwan",
      "Two_Letter_Country_Code": "TW",
      "Three_Letter_Country_Code": "TWN",
      "Country_Number": 158
    },
    {
      "Continent_Name": "Asia",
      "Continent_Code": "AS",
      "Country_Name": "Christmas Island",
      "Two_Letter_Country_Code": "CX",
      "Three_Letter_Country_Code": "CXR",
      "Country_Number": 162
    },
    {
      "Continent_Name": "Asia",
      "Continent_Code": "AS",
      "Country_Name": "Cocos (Keeling) Islands",
      "Two_Letter_Country_Code": "CC",
      "Three_Letter_Country_Code": "CCK",
      "Country_Number": 166
    },
    {
      "Continent_Name": "South America",
      "Continent_Code": "SA",
      "Country_Name": "Colombia, Republic of",
      "Two_Letter_Country_Code": "CO",
      "Three_Letter_Country_Code": "COL",
      "Country_Number": 170
    },
    {
      "Continent_Name": "Africa",
      "Continent_Code": "AF",
      "Country_Name": "Comoros, Union of the",
      "Two_Letter_Country_Code": "KM",
      "Three_Letter_Country_Code": "COM",
      "Country_Number": 174
    },
    {
      "Continent_Name": "Africa",
      "Continent_Code": "AF",
      "Country_Name": "Mayotte",
      "Two_Letter_Country_Code": "YT",
      "Three_Letter_Country_Code": "MYT",
      "Country_Number": 175
    },
    {
      "Continent_Name": "Africa",
      "Continent_Code": "AF",
      "Country_Name": "Congo, Republic of the",
      "Two_Letter_Country_Code": "CG",
      "Three_Letter_Country_Code": "COG",
      "Country_Number": 178
    },
    {
      "Continent_Name": "Africa",
      "Continent_Code": "AF",
      "Country_Name": "Congo, Democratic Republic of the",
      "Two_Letter_Country_Code": "CD",
      "Three_Letter_Country_Code": "COD",
      "Country_Number": 180
    },
    {
      "Continent_Name": "Oceania",
      "Continent_Code": "OC",
      "Country_Name": "Cook Islands",
      "Two_Letter_Country_Code": "CK",
      "Three_Letter_Country_Code": "COK",
      "Country_Number": 184
    },
    {
      "Continent_Name": "North America",
      "Continent_Code": "NA",
      "Country_Name": "Costa Rica, Republic of",
      "Two_Letter_Country_Code": "CR",
      "Three_Letter_Country_Code": "CRI",
      "Country_Number": 188
    },
    {
      "Continent_Name": "Europe",
      "Continent_Code": "EU",
      "Country_Name": "Croatia, Republic of",
      "Two_Letter_Country_Code": "HR",
      "Three_Letter_Country_Code": "HRV",
      "Country_Number": 191
    },
    {
      "Continent_Name": "North America",
      "Continent_Code": "NA",
      "Country_Name": "Cuba, Republic of",
      "Two_Letter_Country_Code": "CU",
      "Three_Letter_Country_Code": "CUB",
      "Country_Number": 192
    },
    {
      "Continent_Name": "Europe",
      "Continent_Code": "EU",
      "Country_Name": "Cyprus, Republic of",
      "Two_Letter_Country_Code": "CY",
      "Three_Letter_Country_Code": "CYP",
      "Country_Number": 196
    },
    {
      "Continent_Name": "Asia",
      "Continent_Code": "AS",
      "Country_Name": "Cyprus, Republic of",
      "Two_Letter_Country_Code": "CY",
      "Three_Letter_Country_Code": "CYP",
      "Country_Number": 196
    },
    {
      "Continent_Name": "Europe",
      "Continent_Code": "EU",
      "Country_Name": "Czech Republic",
      "Two_Letter_Country_Code": "CZ",
      "Three_Letter_Country_Code": "CZE",
      "Country_Number": 203
    },
    {
      "Continent_Name": "Africa",
      "Continent_Code": "AF",
      "Country_Name": "Benin, Republic of",
      "Two_Letter_Country_Code": "BJ",
      "Three_Letter_Country_Code": "BEN",
      "Country_Number": 204
    },
    {
      "Continent_Name": "Europe",
      "Continent_Code": "EU",
      "Country_Name": "Denmark, Kingdom of",
      "Two_Letter_Country_Code": "DK",
      "Three_Letter_Country_Code": "DNK",
      "Country_Number": 208
    },
    {
      "Continent_Name": "North America",
      "Continent_Code": "NA",
      "Country_Name": "Dominica, Commonwealth of",
      "Two_Letter_Country_Code": "DM",
      "Three_Letter_Country_Code": "DMA",
      "Country_Number": 212
    },
    {
      "Continent_Name": "North America",
      "Continent_Code": "NA",
      "Country_Name": "Dominican Republic",
      "Two_Letter_Country_Code": "DO",
      "Three_Letter_Country_Code": "DOM",
      "Country_Number": 214
    },
    {
      "Continent_Name": "South America",
      "Continent_Code": "SA",
      "Country_Name": "Ecuador, Republic of",
      "Two_Letter_Country_Code": "EC",
      "Three_Letter_Country_Code": "ECU",
      "Country_Number": 218
    },
    {
      "Continent_Name": "North America",
      "Continent_Code": "NA",
      "Country_Name": "El Salvador, Republic of",
      "Two_Letter_Country_Code": "SV",
      "Three_Letter_Country_Code": "SLV",
      "Country_Number": 222
    },
    {
      "Continent_Name": "Africa",
      "Continent_Code": "AF",
      "Country_Name": "Equatorial Guinea, Republic of",
      "Two_Letter_Country_Code": "GQ",
      "Three_Letter_Country_Code": "GNQ",
      "Country_Number": 226
    },
    {
      "Continent_Name": "Africa",
      "Continent_Code": "AF",
      "Country_Name": "Ethiopia, Federal Democratic Republic of",
      "Two_Letter_Country_Code": "ET",
      "Three_Letter_Country_Code": "ETH",
      "Country_Number": 231
    },
    {
      "Continent_Name": "Africa",
      "Continent_Code": "AF",
      "Country_Name": "Eritrea, State of",
      "Two_Letter_Country_Code": "ER",
      "Three_Letter_Country_Code": "ERI",
      "Country_Number": 232
    },
    {
      "Continent_Name": "Europe",
      "Continent_Code": "EU",
      "Country_Name": "Estonia, Republic of",
      "Two_Letter_Country_Code": "EE",
      "Three_Letter_Country_Code": "EST",
      "Country_Number": 233
    },
    {
      "Continent_Name": "Europe",
      "Continent_Code": "EU",
      "Country_Name": "Faroe Islands",
      "Two_Letter_Country_Code": "FO",
      "Three_Letter_Country_Code": "FRO",
      "Country_Number": 234
    },
    {
      "Continent_Name": "South America",
      "Continent_Code": "SA",
      "Country_Name": "Falkland Islands (Malvinas)",
      "Two_Letter_Country_Code": "FK",
      "Three_Letter_Country_Code": "FLK",
      "Country_Number": 238
    },
    {
      "Continent_Name": "Oceania",
      "Continent_Code": "OC",
      "Country_Name": "Fiji, Republic of the Fiji Islands",
      "Two_Letter_Country_Code": "FJ",
      "Three_Letter_Country_Code": "FJI",
      "Country_Number": 242
    },
    {
      "Continent_Name": "Europe",
      "Continent_Code": "EU",
      "Country_Name": "Finland, Republic of",
      "Two_Letter_Country_Code": "FI",
      "Three_Letter_Country_Code": "FIN",
      "Country_Number": 246
    },
    {
      "Continent_Name": "Europe",
      "Continent_Code": "EU",
      "Country_Name": "Åland Islands",
      "Two_Letter_Country_Code": "AX",
      "Three_Letter_Country_Code": "ALA",
      "Country_Number": 248
    },
    {
      "Continent_Name": "Europe",
      "Continent_Code": "EU",
      "Country_Name": "France, French Republic",
      "Two_Letter_Country_Code": "FR",
      "Three_Letter_Country_Code": "FRA",
      "Country_Number": 250
    },
    {
      "Continent_Name": "South America",
      "Continent_Code": "SA",
      "Country_Name": "French Guiana",
      "Two_Letter_Country_Code": "GF",
      "Three_Letter_Country_Code": "GUF",
      "Country_Number": 254
    },
    {
      "Continent_Name": "Oceania",
      "Continent_Code": "OC",
      "Country_Name": "French Polynesia",
      "Two_Letter_Country_Code": "PF",
      "Three_Letter_Country_Code": "PYF",
      "Country_Number": 258
    },
    {
      "Continent_Name": "Africa",
      "Continent_Code": "AF",
      "Country_Name": "Djibouti, Republic of",
      "Two_Letter_Country_Code": "DJ",
      "Three_Letter_Country_Code": "DJI",
      "Country_Number": 262
    },
    {
      "Continent_Name": "Africa",
      "Continent_Code": "AF",
      "Country_Name": "Gabon, Gabonese Republic",
      "Two_Letter_Country_Code": "GA",
      "Three_Letter_Country_Code": "GAB",
      "Country_Number": 266
    },
    {
      "Continent_Name": "Europe",
      "Continent_Code": "EU",
      "Country_Name": "Georgia",
      "Two_Letter_Country_Code": "GE",
      "Three_Letter_Country_Code": "GEO",
      "Country_Number": 268
    },
    {
      "Continent_Name": "Asia",
      "Continent_Code": "AS",
      "Country_Name": "Georgia",
      "Two_Letter_Country_Code": "GE",
      "Three_Letter_Country_Code": "GEO",
      "Country_Number": 268
    },
    {
      "Continent_Name": "Africa",
      "Continent_Code": "AF",
      "Country_Name": "Gambia, Republic of the",
      "Two_Letter_Country_Code": "GM",
      "Three_Letter_Country_Code": "GMB",
      "Country_Number": 270
    },
    {
      "Continent_Name": "Asia",
      "Continent_Code": "AS",
      "Country_Name": "Palestinian Territory, Occupied",
      "Two_Letter_Country_Code": "PS",
      "Three_Letter_Country_Code": "PSE",
      "Country_Number": 275
    },
    {
      "Continent_Name": "Europe",
      "Continent_Code": "EU",
      "Country_Name": "Germany, Federal Republic of",
      "Two_Letter_Country_Code": "DE",
      "Three_Letter_Country_Code": "DEU",
      "Country_Number": 276
    },
    {
      "Continent_Name": "Africa",
      "Continent_Code": "AF",
      "Country_Name": "Ghana, Republic of",
      "Two_Letter_Country_Code": "GH",
      "Three_Letter_Country_Code": "GHA",
      "Country_Number": 288
    },
    {
      "Continent_Name": "Europe",
      "Continent_Code": "EU",
      "Country_Name": "Gibraltar",
      "Two_Letter_Country_Code": "GI",
      "Three_Letter_Country_Code": "GIB",
      "Country_Number": 292
    },
    {
      "Continent_Name": "Oceania",
      "Continent_Code": "OC",
      "Country_Name": "Kiribati, Republic of",
      "Two_Letter_Country_Code": "KI",
      "Three_Letter_Country_Code": "KIR",
      "Country_Number": 296
    },
    {
      "Continent_Name": "Europe",
      "Continent_Code": "EU",
      "Country_Name": "Greece, Hellenic Republic",
      "Two_Letter_Country_Code": "GR",
      "Three_Letter_Country_Code": "GRC",
      "Country_Number": 300
    },
    {
      "Continent_Name": "North America",
      "Continent_Code": "NA",
      "Country_Name": "Greenland",
      "Two_Letter_Country_Code": "GL",
      "Three_Letter_Country_Code": "GRL",
      "Country_Number": 304
    },
    {
      "Continent_Name": "North America",
      "Continent_Code": "NA",
      "Country_Name": "Grenada",
      "Two_Letter_Country_Code": "GD",
      "Three_Letter_Country_Code": "GRD",
      "Country_Number": 308
    },
    {
      "Continent_Name": "North America",
      "Continent_Code": "NA",
      "Country_Name": "Guadeloupe",
      "Two_Letter_Country_Code": "GP",
      "Three_Letter_Country_Code": "GLP",
      "Country_Number": 312
    },
    {
      "Continent_Name": "Oceania",
      "Continent_Code": "OC",
      "Country_Name": "Guam",
      "Two_Letter_Country_Code": "GU",
      "Three_Letter_Country_Code": "GUM",
      "Country_Number": 316
    },
    {
      "Continent_Name": "North America",
      "Continent_Code": "NA",
      "Country_Name": "Guatemala, Republic of",
      "Two_Letter_Country_Code": "GT",
      "Three_Letter_Country_Code": "GTM",
      "Country_Number": 320
    },
    {
      "Continent_Name": "Africa",
      "Continent_Code": "AF",
      "Country_Name": "Guinea, Republic of",
      "Two_Letter_Country_Code": "GN",
      "Three_Letter_Country_Code": "GIN",
      "Country_Number": 324
    },
    {
      "Continent_Name": "South America",
      "Continent_Code": "SA",
      "Country_Name": "Guyana, Co-operative Republic of",
      "Two_Letter_Country_Code": "GY",
      "Three_Letter_Country_Code": "GUY",
      "Country_Number": 328
    },
    {
      "Continent_Name": "North America",
      "Continent_Code": "NA",
      "Country_Name": "Haiti, Republic of",
      "Two_Letter_Country_Code": "HT",
      "Three_Letter_Country_Code": "HTI",
      "Country_Number": 332
    },
    {
      "Continent_Name": "Europe",
      "Continent_Code": "EU",
      "Country_Name": "Holy See (Vatican City State)",
      "Two_Letter_Country_Code": "VA",
      "Three_Letter_Country_Code": "VAT",
      "Country_Number": 336
    },
    {
      "Continent_Name": "North America",
      "Continent_Code": "NA",
      "Country_Name": "Honduras, Republic of",
      "Two_Letter_Country_Code": "HN",
      "Three_Letter_Country_Code": "HND",
      "Country_Number": 340
    },
    {
      "Continent_Name": "Asia",
      "Continent_Code": "AS",
      "Country_Name": "Hong Kong, Special Administrative Region of China",
      "Two_Letter_Country_Code": "HK",
      "Three_Letter_Country_Code": "HKG",
      "Country_Number": 344
    },
    {
      "Continent_Name": "Europe",
      "Continent_Code": "EU",
      "Country_Name": "Hungary, Republic of",
      "Two_Letter_Country_Code": "HU",
      "Three_Letter_Country_Code": "HUN",
      "Country_Number": 348
    },
    {
      "Continent_Name": "Europe",
      "Continent_Code": "EU",
      "Country_Name": "Iceland, Republic of",
      "Two_Letter_Country_Code": "IS",
      "Three_Letter_Country_Code": "ISL",
      "Country_Number": 352
    },
    {
      "Continent_Name": "Asia",
      "Continent_Code": "AS",
      "Country_Name": "India, Republic of",
      "Two_Letter_Country_Code": "IN",
      "Three_Letter_Country_Code": "IND",
      "Country_Number": 356
    },
    {
      "Continent_Name": "Asia",
      "Continent_Code": "AS",
      "Country_Name": "Indonesia, Republic of",
      "Two_Letter_Country_Code": "ID",
      "Three_Letter_Country_Code": "IDN",
      "Country_Number": 360
    },
    {
      "Continent_Name": "Asia",
      "Continent_Code": "AS",
      "Country_Name": "Iran, Islamic Republic of",
      "Two_Letter_Country_Code": "IR",
      "Three_Letter_Country_Code": "IRN",
      "Country_Number": 364
    },
    {
      "Continent_Name": "Asia",
      "Continent_Code": "AS",
      "Country_Name": "Iraq, Republic of",
      "Two_Letter_Country_Code": "IQ",
      "Three_Letter_Country_Code": "IRQ",
      "Country_Number": 368
    },
    {
      "Continent_Name": "Europe",
      "Continent_Code": "EU",
      "Country_Name": "Ireland",
      "Two_Letter_Country_Code": "IE",
      "Three_Letter_Country_Code": "IRL",
      "Country_Number": 372
    },
    {
      "Continent_Name": "Asia",
      "Continent_Code": "AS",
      "Country_Name": "Israel, State of",
      "Two_Letter_Country_Code": "IL",
      "Three_Letter_Country_Code": "ISR",
      "Country_Number": 376
    },
    {
      "Continent_Name": "Europe",
      "Continent_Code": "EU",
      "Country_Name": "Italy, Italian Republic",
      "Two_Letter_Country_Code": "IT",
      "Three_Letter_Country_Code": "ITA",
      "Country_Number": 380
    },
    {
      "Continent_Name": "Africa",
      "Continent_Code": "AF",
      "Country_Name": "Cote d'Ivoire, Republic of",
      "Two_Letter_Country_Code": "CI",
      "Three_Letter_Country_Code": "CIV",
      "Country_Number": 384
    },
    {
      "Continent_Name": "North America",
      "Continent_Code": "NA",
      "Country_Name": "Jamaica",
      "Two_Letter_Country_Code": "JM",
      "Three_Letter_Country_Code": "JAM",
      "Country_Number": 388
    },
    {
      "Continent_Name": "Asia",
      "Continent_Code": "AS",
      "Country_Name": "Japan",
      "Two_Letter_Country_Code": "JP",
      "Three_Letter_Country_Code": "JPN",
      "Country_Number": 392
    },
    {
      "Continent_Name": "Europe",
      "Continent_Code": "EU",
      "Country_Name": "Kazakhstan, Republic of",
      "Two_Letter_Country_Code": "KZ",
      "Three_Letter_Country_Code": "KAZ",
      "Country_Number": 398
    },
    {
      "Continent_Name": "Asia",
      "Continent_Code": "AS",
      "Country_Name": "Kazakhstan, Republic of",
      "Two_Letter_Country_Code": "KZ",
      "Three_Letter_Country_Code": "KAZ",
      "Country_Number": 398
    },
    {
      "Continent_Name": "Asia",
      "Continent_Code": "AS",
      "Country_Name": "Jordan, Hashemite Kingdom of",
      "Two_Letter_Country_Code": "JO",
      "Three_Letter_Country_Code": "JOR",
      "Country_Number": 400
    },
    {
      "Continent_Name": "Africa",
      "Continent_Code": "AF",
      "Country_Name": "Kenya, Republic of",
      "Two_Letter_Country_Code": "KE",
      "Three_Letter_Country_Code": "KEN",
      "Country_Number": 404
    },
    {
      "Continent_Name": "Asia",
      "Continent_Code": "AS",
      "Country_Name": "Korea, Democratic People's Republic of",
      "Two_Letter_Country_Code": "KP",
      "Three_Letter_Country_Code": "PRK",
      "Country_Number": 408
    },
    {
      "Continent_Name": "Asia",
      "Continent_Code": "AS",
      "Country_Name": "Korea, Republic of",
      "Two_Letter_Country_Code": "KR",
      "Three_Letter_Country_Code": "KOR",
      "Country_Number": 410
    },
    {
      "Continent_Name": "Asia",
      "Continent_Code": "AS",
      "Country_Name": "Kuwait, State of",
      "Two_Letter_Country_Code": "KW",
      "Three_Letter_Country_Code": "KWT",
      "Country_Number": 414
    },
    {
      "Continent_Name": "Asia",
      "Continent_Code": "AS",
      "Country_Name": "Kyrgyz Republic",
      "Two_Letter_Country_Code": "KG",
      "Three_Letter_Country_Code": "KGZ",
      "Country_Number": 417
    },
    {
      "Continent_Name": "Asia",
      "Continent_Code": "AS",
      "Country_Name": "Lao People's Democratic Republic",
      "Two_Letter_Country_Code": "LA",
      "Three_Letter_Country_Code": "LAO",
      "Country_Number": 418
    },
    {
      "Continent_Name": "Asia",
      "Continent_Code": "AS",
      "Country_Name": "Lebanon, Lebanese Republic",
      "Two_Letter_Country_Code": "LB",
      "Three_Letter_Country_Code": "LBN",
      "Country_Number": 422
    },
    {
      "Continent_Name": "Africa",
      "Continent_Code": "AF",
      "Country_Name": "Lesotho, Kingdom of",
      "Two_Letter_Country_Code": "LS",
      "Three_Letter_Country_Code": "LSO",
      "Country_Number": 426
    },
    {
      "Continent_Name": "Europe",
      "Continent_Code": "EU",
      "Country_Name": "Latvia, Republic of",
      "Two_Letter_Country_Code": "LV",
      "Three_Letter_Country_Code": "LVA",
      "Country_Number": 428
    },
    {
      "Continent_Name": "Africa",
      "Continent_Code": "AF",
      "Country_Name": "Liberia, Republic of",
      "Two_Letter_Country_Code": "LR",
      "Three_Letter_Country_Code": "LBR",
      "Country_Number": 430
    },
    {
      "Continent_Name": "Africa",
      "Continent_Code": "AF",
      "Country_Name": "Libyan Arab Jamahiriya",
      "Two_Letter_Country_Code": "LY",
      "Three_Letter_Country_Code": "LBY",
      "Country_Number": 434
    },
    {
      "Continent_Name": "Europe",
      "Continent_Code": "EU",
      "Country_Name": "Liechtenstein, Principality of",
      "Two_Letter_Country_Code": "LI",
      "Three_Letter_Country_Code": "LIE",
      "Country_Number": 438
    },
    {
      "Continent_Name": "Europe",
      "Continent_Code": "EU",
      "Country_Name": "Lithuania, Republic of",
      "Two_Letter_Country_Code": "LT",
      "Three_Letter_Country_Code": "LTU",
      "Country_Number": 440
    },
    {
      "Continent_Name": "Europe",
      "Continent_Code": "EU",
      "Country_Name": "Luxembourg, Grand Duchy of",
      "Two_Letter_Country_Code": "LU",
      "Three_Letter_Country_Code": "LUX",
      "Country_Number": 442
    },
    {
      "Continent_Name": "Asia",
      "Continent_Code": "AS",
      "Country_Name": "Macao, Special Administrative Region of China",
      "Two_Letter_Country_Code": "MO",
      "Three_Letter_Country_Code": "MAC",
      "Country_Number": 446
    },
    {
      "Continent_Name": "Africa",
      "Continent_Code": "AF",
      "Country_Name": "Madagascar, Republic of",
      "Two_Letter_Country_Code": "MG",
      "Three_Letter_Country_Code": "MDG",
      "Country_Number": 450
    },
    {
      "Continent_Name": "Africa",
      "Continent_Code": "AF",
      "Country_Name": "Malawi, Republic of",
      "Two_Letter_Country_Code": "MW",
      "Three_Letter_Country_Code": "MWI",
      "Country_Number": 454
    },
    {
      "Continent_Name": "Asia",
      "Continent_Code": "AS",
      "Country_Name": "Malaysia",
      "Two_Letter_Country_Code": "MY",
      "Three_Letter_Country_Code": "MYS",
      "Country_Number": 458
    },
    {
      "Continent_Name": "Asia",
      "Continent_Code": "AS",
      "Country_Name": "Maldives, Republic of",
      "Two_Letter_Country_Code": "MV",
      "Three_Letter_Country_Code": "MDV",
      "Country_Number": 462
    },
    {
      "Continent_Name": "Africa",
      "Continent_Code": "AF",
      "Country_Name": "Mali, Republic of",
      "Two_Letter_Country_Code": "ML",
      "Three_Letter_Country_Code": "MLI",
      "Country_Number": 466
    },
    {
      "Continent_Name": "Europe",
      "Continent_Code": "EU",
      "Country_Name": "Malta, Republic of",
      "Two_Letter_Country_Code": "MT",
      "Three_Letter_Country_Code": "MLT",
      "Country_Number": 470
    },
    {
      "Continent_Name": "North America",
      "Continent_Code": "NA",
      "Country_Name": "Martinique",
      "Two_Letter_Country_Code": "MQ",
      "Three_Letter_Country_Code": "MTQ",
      "Country_Number": 474
    },
    {
      "Continent_Name": "Africa",
      "Continent_Code": "AF",
      "Country_Name": "Mauritania, Islamic Republic of",
      "Two_Letter_Country_Code": "MR",
      "Three_Letter_Country_Code": "MRT",
      "Country_Number": 478
    },
    {
      "Continent_Name": "Africa",
      "Continent_Code": "AF",
      "Country_Name": "Mauritius, Republic of",
      "Two_Letter_Country_Code": "MU",
      "Three_Letter_Country_Code": "MUS",
      "Country_Number": 480
    },
    {
      "Continent_Name": "North America",
      "Continent_Code": "NA",
      "Country_Name": "Mexico, United Mexican States",
      "Two_Letter_Country_Code": "MX",
      "Three_Letter_Country_Code": "MEX",
      "Country_Number": 484
    },
    {
      "Continent_Name": "Europe",
      "Continent_Code": "EU",
      "Country_Name": "Monaco, Principality of",
      "Two_Letter_Country_Code": "MC",
      "Three_Letter_Country_Code": "MCO",
      "Country_Number": 492
    },
    {
      "Continent_Name": "Asia",
      "Continent_Code": "AS",
      "Country_Name": "Mongolia",
      "Two_Letter_Country_Code": "MN",
      "Three_Letter_Country_Code": "MNG",
      "Country_Number": 496
    },
    {
      "Continent_Name": "Europe",
      "Continent_Code": "EU",
      "Country_Name": "Moldova, Republic of",
      "Two_Letter_Country_Code": "MD",
      "Three_Letter_Country_Code": "MDA",
      "Country_Number": 498
    },
    {
      "Continent_Name": "Europe",
      "Continent_Code": "EU",
      "Country_Name": "Montenegro, Republic of",
      "Two_Letter_Country_Code": "ME",
      "Three_Letter_Country_Code": "MNE",
      "Country_Number": 499
    },
    {
      "Continent_Name": "North America",
      "Continent_Code": "NA",
      "Country_Name": "Montserrat",
      "Two_Letter_Country_Code": "MS",
      "Three_Letter_Country_Code": "MSR",
      "Country_Number": 500
    },
    {
      "Continent_Name": "Africa",
      "Continent_Code": "AF",
      "Country_Name": "Morocco, Kingdom of",
      "Two_Letter_Country_Code": "MA",
      "Three_Letter_Country_Code": "MAR",
      "Country_Number": 504
    },
    {
      "Continent_Name": "Africa",
      "Continent_Code": "AF",
      "Country_Name": "Mozambique, Republic of",
      "Two_Letter_Country_Code": "MZ",
      "Three_Letter_Country_Code": "MOZ",
      "Country_Number": 508
    },
    {
      "Continent_Name": "Asia",
      "Continent_Code": "AS",
      "Country_Name": "Oman, Sultanate of",
      "Two_Letter_Country_Code": "OM",
      "Three_Letter_Country_Code": "OMN",
      "Country_Number": 512
    },
    {
      "Continent_Name": "Africa",
      "Continent_Code": "AF",
      "Country_Name": "Namibia, Republic of",
      "Two_Letter_Country_Code": "NA",
      "Three_Letter_Country_Code": "NAM",
      "Country_Number": 516
    },
    {
      "Continent_Name": "Oceania",
      "Continent_Code": "OC",
      "Country_Name": "Nauru, Republic of",
      "Two_Letter_Country_Code": "NR",
      "Three_Letter_Country_Code": "NRU",
      "Country_Number": 520
    },
    {
      "Continent_Name": "Asia",
      "Continent_Code": "AS",
      "Country_Name": "Nepal, State of",
      "Two_Letter_Country_Code": "NP",
      "Three_Letter_Country_Code": "NPL",
      "Country_Number": 524
    },
    {
      "Continent_Name": "Europe",
      "Continent_Code": "EU",
      "Country_Name": "Netherlands, Kingdom of the",
      "Two_Letter_Country_Code": "NL",
      "Three_Letter_Country_Code": "NLD",
      "Country_Number": 528
    },
    {
      "Continent_Name": "North America",
      "Continent_Code": "NA",
      "Country_Name": "Netherlands Antilles",
      "Two_Letter_Country_Code": "AN",
      "Three_Letter_Country_Code": "ANT",
      "Country_Number": 530
    },
    {
      "Continent_Name": "North America",
      "Continent_Code": "NA",
      "Country_Name": "Curaçao",
      "Two_Letter_Country_Code": "CW",
      "Three_Letter_Country_Code": "CUW",
      "Country_Number": 531
    },
    {
      "Continent_Name": "North America",
      "Continent_Code": "NA",
      "Country_Name": "Aruba",
      "Two_Letter_Country_Code": "AW",
      "Three_Letter_Country_Code": "ABW",
      "Country_Number": 533
    },
    {
      "Continent_Name": "North America",
      "Continent_Code": "NA",
      "Country_Name": "Sint Maarten (Netherlands)",
      "Two_Letter_Country_Code": "SX",
      "Three_Letter_Country_Code": "SXM",
      "Country_Number": 534
    },
    {
      "Continent_Name": "North America",
      "Continent_Code": "NA",
      "Country_Name": "Bonaire, Sint Eustatius and Saba",
      "Two_Letter_Country_Code": "BQ",
      "Three_Letter_Country_Code": "BES",
      "Country_Number": 535
    },
    {
      "Continent_Name": "Oceania",
      "Continent_Code": "OC",
      "Country_Name": "New Caledonia",
      "Two_Letter_Country_Code": "NC",
      "Three_Letter_Country_Code": "NCL",
      "Country_Number": 540
    },
    {
      "Continent_Name": "Oceania",
      "Continent_Code": "OC",
      "Country_Name": "Vanuatu, Republic of",
      "Two_Letter_Country_Code": "VU",
      "Three_Letter_Country_Code": "VUT",
      "Country_Number": 548
    },
    {
      "Continent_Name": "Oceania",
      "Continent_Code": "OC",
      "Country_Name": "New Zealand",
      "Two_Letter_Country_Code": "NZ",
      "Three_Letter_Country_Code": "NZL",
      "Country_Number": 554
    },
    {
      "Continent_Name": "North America",
      "Continent_Code": "NA",
      "Country_Name": "Nicaragua, Republic of",
      "Two_Letter_Country_Code": "NI",
      "Three_Letter_Country_Code": "NIC",
      "Country_Number": 558
    },
    {
      "Continent_Name": "Africa",
      "Continent_Code": "AF",
      "Country_Name": "Niger, Republic of",
      "Two_Letter_Country_Code": "NE",
      "Three_Letter_Country_Code": "NER",
      "Country_Number": 562
    },
    {
      "Continent_Name": "Africa",
      "Continent_Code": "AF",
      "Country_Name": "Nigeria, Federal Republic of",
      "Two_Letter_Country_Code": "NG",
      "Three_Letter_Country_Code": "NGA",
      "Country_Number": 566
    },
    {
      "Continent_Name": "Oceania",
      "Continent_Code": "OC",
      "Country_Name": "Niue",
      "Two_Letter_Country_Code": "NU",
      "Three_Letter_Country_Code": "NIU",
      "Country_Number": 570
    },
    {
      "Continent_Name": "Oceania",
      "Continent_Code": "OC",
      "Country_Name": "Norfolk Island",
      "Two_Letter_Country_Code": "NF",
      "Three_Letter_Country_Code": "NFK",
      "Country_Number": 574
    },
    {
      "Continent_Name": "Europe",
      "Continent_Code": "EU",
      "Country_Name": "Norway, Kingdom of",
      "Two_Letter_Country_Code": "NO",
      "Three_Letter_Country_Code": "NOR",
      "Country_Number": 578
    },
    {
      "Continent_Name": "Oceania",
      "Continent_Code": "OC",
      "Country_Name": "Northern Mariana Islands, Commonwealth of the",
      "Two_Letter_Country_Code": "MP",
      "Three_Letter_Country_Code": "MNP",
      "Country_Number": 580
    },
    {
      "Continent_Name": "Oceania",
      "Continent_Code": "OC",
      "Country_Name": "United States Minor Outlying Islands",
      "Two_Letter_Country_Code": "UM",
      "Three_Letter_Country_Code": "UMI",
      "Country_Number": 581
    },
    {
      "Continent_Name": "North America",
      "Continent_Code": "NA",
      "Country_Name": "United States Minor Outlying Islands",
      "Two_Letter_Country_Code": "UM",
      "Three_Letter_Country_Code": "UMI",
      "Country_Number": 581
    },
    {
      "Continent_Name": "Oceania",
      "Continent_Code": "OC",
      "Country_Name": "Micronesia, Federated States of",
      "Two_Letter_Country_Code": "FM",
      "Three_Letter_Country_Code": "FSM",
      "Country_Number": 583
    },
    {
      "Continent_Name": "Oceania",
      "Continent_Code": "OC",
      "Country_Name": "Marshall Islands, Republic of the",
      "Two_Letter_Country_Code": "MH",
      "Three_Letter_Country_Code": "MHL",
      "Country_Number": 584
    },
    {
      "Continent_Name": "Oceania",
      "Continent_Code": "OC",
      "Country_Name": "Palau, Republic of",
      "Two_Letter_Country_Code": "PW",
      "Three_Letter_Country_Code": "PLW",
      "Country_Number": 585
    },
    {
      "Continent_Name": "Asia",
      "Continent_Code": "AS",
      "Country_Name": "Pakistan, Islamic Republic of",
      "Two_Letter_Country_Code": "PK",
      "Three_Letter_Country_Code": "PAK",
      "Country_Number": 586
    },
    {
      "Continent_Name": "North America",
      "Continent_Code": "NA",
      "Country_Name": "Panama, Republic of",
      "Two_Letter_Country_Code": "PA",
      "Three_Letter_Country_Code": "PAN",
      "Country_Number": 591
    },
    {
      "Continent_Name": "Oceania",
      "Continent_Code": "OC",
      "Country_Name": "Papua New Guinea, Independent State of",
      "Two_Letter_Country_Code": "PG",
      "Three_Letter_Country_Code": "PNG",
      "Country_Number": 598
    },
    {
      "Continent_Name": "South America",
      "Continent_Code": "SA",
      "Country_Name": "Paraguay, Republic of",
      "Two_Letter_Country_Code": "PY",
      "Three_Letter_Country_Code": "PRY",
      "Country_Number": 600
    },
    {
      "Continent_Name": "South America",
      "Continent_Code": "SA",
      "Country_Name": "Peru, Republic of",
      "Two_Letter_Country_Code": "PE",
      "Three_Letter_Country_Code": "PER",
      "Country_Number": 604
    },
    {
      "Continent_Name": "Asia",
      "Continent_Code": "AS",
      "Country_Name": "Philippines, Republic of the",
      "Two_Letter_Country_Code": "PH",
      "Three_Letter_Country_Code": "PHL",
      "Country_Number": 608
    },
    {
      "Continent_Name": "Oceania",
      "Continent_Code": "OC",
      "Country_Name": "Pitcairn Islands",
      "Two_Letter_Country_Code": "PN",
      "Three_Letter_Country_Code": "PCN",
      "Country_Number": 612
    },
    {
      "Continent_Name": "Europe",
      "Continent_Code": "EU",
      "Country_Name": "Poland, Republic of",
      "Two_Letter_Country_Code": "PL",
      "Three_Letter_Country_Code": "POL",
      "Country_Number": 616
    },
    {
      "Continent_Name": "Europe",
      "Continent_Code": "EU",
      "Country_Name": "Portugal, Portuguese Republic",
      "Two_Letter_Country_Code": "PT",
      "Three_Letter_Country_Code": "PRT",
      "Country_Number": 620
    },
    {
      "Continent_Name": "Africa",
      "Continent_Code": "AF",
      "Country_Name": "Guinea-Bissau, Republic of",
      "Two_Letter_Country_Code": "GW",
      "Three_Letter_Country_Code": "GNB",
      "Country_Number": 624
    },
    {
      "Continent_Name": "Asia",
      "Continent_Code": "AS",
      "Country_Name": "Timor-Leste, Democratic Republic of",
      "Two_Letter_Country_Code": "TL",
      "Three_Letter_Country_Code": "TLS",
      "Country_Number": 626
    },
    {
      "Continent_Name": "North America",
      "Continent_Code": "NA",
      "Country_Name": "Puerto Rico, Commonwealth of",
      "Two_Letter_Country_Code": "PR",
      "Three_Letter_Country_Code": "PRI",
      "Country_Number": 630
    },
    {
      "Continent_Name": "Asia",
      "Continent_Code": "AS",
      "Country_Name": "Qatar, State of",
      "Two_Letter_Country_Code": "QA",
      "Three_Letter_Country_Code": "QAT",
      "Country_Number": 634
    },
    {
      "Continent_Name": "Africa",
      "Continent_Code": "AF",
      "Country_Name": "Reunion",
      "Two_Letter_Country_Code": "RE",
      "Three_Letter_Country_Code": "REU",
      "Country_Number": 638
    },
    {
      "Continent_Name": "Europe",
      "Continent_Code": "EU",
      "Country_Name": "Romania",
      "Two_Letter_Country_Code": "RO",
      "Three_Letter_Country_Code": "ROU",
      "Country_Number": 642
    },
    {
      "Continent_Name": "Europe",
      "Continent_Code": "EU",
      "Country_Name": "Russian Federation",
      "Two_Letter_Country_Code": "RU",
      "Three_Letter_Country_Code": "RUS",
      "Country_Number": 643
    },
    {
      "Continent_Name": "Asia",
      "Continent_Code": "AS",
      "Country_Name": "Russian Federation",
      "Two_Letter_Country_Code": "RU",
      "Three_Letter_Country_Code": "RUS",
      "Country_Number": 643
    },
    {
      "Continent_Name": "Africa",
      "Continent_Code": "AF",
      "Country_Name": "Rwanda, Republic of",
      "Two_Letter_Country_Code": "RW",
      "Three_Letter_Country_Code": "RWA",
      "Country_Number": 646
    },
    {
      "Continent_Name": "North America",
      "Continent_Code": "NA",
      "Country_Name": "Saint Barthelemy",
      "Two_Letter_Country_Code": "BL",
      "Three_Letter_Country_Code": "BLM",
      "Country_Number": 652
    },
    {
      "Continent_Name": "Africa",
      "Continent_Code": "AF",
      "Country_Name": "Saint Helena",
      "Two_Letter_Country_Code": "SH",
      "Three_Letter_Country_Code": "SHN",
      "Country_Number": 654
    },
    {
      "Continent_Name": "North America",
      "Continent_Code": "NA",
      "Country_Name": "Saint Kitts and Nevis, Federation of",
      "Two_Letter_Country_Code": "KN",
      "Three_Letter_Country_Code": "KNA",
      "Country_Number": 659
    },
    {
      "Continent_Name": "North America",
      "Continent_Code": "NA",
      "Country_Name": "Anguilla",
      "Two_Letter_Country_Code": "AI",
      "Three_Letter_Country_Code": "AIA",
      "Country_Number": 660
    },
    {
      "Continent_Name": "North America",
      "Continent_Code": "NA",
      "Country_Name": "Saint Lucia",
      "Two_Letter_Country_Code": "LC",
      "Three_Letter_Country_Code": "LCA",
      "Country_Number": 662
    },
    {
      "Continent_Name": "North America",
      "Continent_Code": "NA",
      "Country_Name": "Saint Martin",
      "Two_Letter_Country_Code": "MF",
      "Three_Letter_Country_Code": "MAF",
      "Country_Number": 663
    },
    {
      "Continent_Name": "North America",
      "Continent_Code": "NA",
      "Country_Name": "Saint Pierre and Miquelon",
      "Two_Letter_Country_Code": "PM",
      "Three_Letter_Country_Code": "SPM",
      "Country_Number": 666
    },
    {
      "Continent_Name": "North America",
      "Continent_Code": "NA",
      "Country_Name": "Saint Vincent and the Grenadines",
      "Two_Letter_Country_Code": "VC",
      "Three_Letter_Country_Code": "VCT",
      "Country_Number": 670
    },
    {
      "Continent_Name": "Europe",
      "Continent_Code": "EU",
      "Country_Name": "San Marino, Republic of",
      "Two_Letter_Country_Code": "SM",
      "Three_Letter_Country_Code": "SMR",
      "Country_Number": 674
    },
    {
      "Continent_Name": "Africa",
      "Continent_Code": "AF",
      "Country_Name": "Sao Tome and Principe, Democratic Republic of",
      "Two_Letter_Country_Code": "ST",
      "Three_Letter_Country_Code": "STP",
      "Country_Number": 678
    },
    {
      "Continent_Name": "Asia",
      "Continent_Code": "AS",
      "Country_Name": "Saudi Arabia, Kingdom of",
      "Two_Letter_Country_Code": "SA",
      "Three_Letter_Country_Code": "SAU",
      "Country_Number": 682
    },
    {
      "Continent_Name": "Africa",
      "Continent_Code": "AF",
      "Country_Name": "Senegal, Republic of",
      "Two_Letter_Country_Code": "SN",
      "Three_Letter_Country_Code": "SEN",
      "Country_Number": 686
    },
    {
      "Continent_Name": "Europe",
      "Continent_Code": "EU",
      "Country_Name": "Serbia, Republic of",
      "Two_Letter_Country_Code": "RS",
      "Three_Letter_Country_Code": "SRB",
      "Country_Number": 688
    },
    {
      "Continent_Name": "Africa",
      "Continent_Code": "AF",
      "Country_Name": "Seychelles, Republic of",
      "Two_Letter_Country_Code": "SC",
      "Three_Letter_Country_Code": "SYC",
      "Country_Number": 690
    },
    {
      "Continent_Name": "Africa",
      "Continent_Code": "AF",
      "Country_Name": "Sierra Leone, Republic of",
      "Two_Letter_Country_Code": "SL",
      "Three_Letter_Country_Code": "SLE",
      "Country_Number": 694
    },
    {
      "Continent_Name": "Asia",
      "Continent_Code": "AS",
      "Country_Name": "Singapore, Republic of",
      "Two_Letter_Country_Code": "SG",
      "Three_Letter_Country_Code": "SGP",
      "Country_Number": 702
    },
    {
      "Continent_Name": "Europe",
      "Continent_Code": "EU",
      "Country_Name": "Slovakia (Slovak Republic)",
      "Two_Letter_Country_Code": "SK",
      "Three_Letter_Country_Code": "SVK",
      "Country_Number": 703
    },
    {
      "Continent_Name": "Asia",
      "Continent_Code": "AS",
      "Country_Name": "Vietnam, Socialist Republic of",
      "Two_Letter_Country_Code": "VN",
      "Three_Letter_Country_Code": "VNM",
      "Country_Number": 704
    },
    {
      "Continent_Name": "Europe",
      "Continent_Code": "EU",
      "Country_Name": "Slovenia, Republic of",
      "Two_Letter_Country_Code": "SI",
      "Three_Letter_Country_Code": "SVN",
      "Country_Number": 705
    },
    {
      "Continent_Name": "Africa",
      "Continent_Code": "AF",
      "Country_Name": "Somalia, Somali Republic",
      "Two_Letter_Country_Code": "SO",
      "Three_Letter_Country_Code": "SOM",
      "Country_Number": 706
    },
    {
      "Continent_Name": "Africa",
      "Continent_Code": "AF",
      "Country_Name": "South Africa, Republic of",
      "Two_Letter_Country_Code": "ZA",
      "Three_Letter_Country_Code": "ZAF",
      "Country_Number": 710
    },
    {
      "Continent_Name": "Africa",
      "Continent_Code": "AF",
      "Country_Name": "Zimbabwe, Republic of",
      "Two_Letter_Country_Code": "ZW",
      "Three_Letter_Country_Code": "ZWE",
      "Country_Number": 716
    },
    {
      "Continent_Name": "Europe",
      "Continent_Code": "EU",
      "Country_Name": "Spain, Kingdom of",
      "Two_Letter_Country_Code": "ES",
      "Three_Letter_Country_Code": "ESP",
      "Country_Number": 724
    },
    {
      "Continent_Name": "Africa",
      "Continent_Code": "AF",
      "Country_Name": "South Sudan",
      "Two_Letter_Country_Code": "SS",
      "Three_Letter_Country_Code": "SSD",
      "Country_Number": 728
    },
    {
      "Continent_Name": "Africa",
      "Continent_Code": "AF",
      "Country_Name": "Western Sahara",
      "Two_Letter_Country_Code": "EH",
      "Three_Letter_Country_Code": "ESH",
      "Country_Number": 732
    },
    {
      "Continent_Name": "Africa",
      "Continent_Code": "AF",
      "Country_Name": "Sudan, Republic of",
      "Two_Letter_Country_Code": "SD",
      "Three_Letter_Country_Code": "SDN",
      "Country_Number": 736
    },
    {
      "Continent_Name": "South America",
      "Continent_Code": "SA",
      "Country_Name": "Suriname, Republic of",
      "Two_Letter_Country_Code": "SR",
      "Three_Letter_Country_Code": "SUR",
      "Country_Number": 740
    },
    {
      "Continent_Name": "Europe",
      "Continent_Code": "EU",
      "Country_Name": "Svalbard & Jan Mayen Islands",
      "Two_Letter_Country_Code": "SJ",
      "Three_Letter_Country_Code": "SJM",
      "Country_Number": 744
    },
    {
      "Continent_Name": "Africa",
      "Continent_Code": "AF",
      "Country_Name": "Swaziland, Kingdom of",
      "Two_Letter_Country_Code": "SZ",
      "Three_Letter_Country_Code": "SWZ",
      "Country_Number": 748
    },
    {
      "Continent_Name": "Europe",
      "Continent_Code": "EU",
      "Country_Name": "Sweden, Kingdom of",
      "Two_Letter_Country_Code": "SE",
      "Three_Letter_Country_Code": "SWE",
      "Country_Number": 752
    },
    {
      "Continent_Name": "Europe",
      "Continent_Code": "EU",
      "Country_Name": "Switzerland, Swiss Confederation",
      "Two_Letter_Country_Code": "CH",
      "Three_Letter_Country_Code": "CHE",
      "Country_Number": 756
    },
    {
      "Continent_Name": "Asia",
      "Continent_Code": "AS",
      "Country_Name": "Syrian Arab Republic",
      "Two_Letter_Country_Code": "SY",
      "Three_Letter_Country_Code": "SYR",
      "Country_Number": 760
    },
    {
      "Continent_Name": "Asia",
      "Continent_Code": "AS",
      "Country_Name": "Tajikistan, Republic of",
      "Two_Letter_Country_Code": "TJ",
      "Three_Letter_Country_Code": "TJK",
      "Country_Number": 762
    },
    {
      "Continent_Name": "Asia",
      "Continent_Code": "AS",
      "Country_Name": "Thailand, Kingdom of",
      "Two_Letter_Country_Code": "TH",
      "Three_Letter_Country_Code": "THA",
      "Country_Number": 764
    },
    {
      "Continent_Name": "Africa",
      "Continent_Code": "AF",
      "Country_Name": "Togo, Togolese Republic",
      "Two_Letter_Country_Code": "TG",
      "Three_Letter_Country_Code": "TGO",
      "Country_Number": 768
    },
    {
      "Continent_Name": "Oceania",
      "Continent_Code": "OC",
      "Country_Name": "Tokelau",
      "Two_Letter_Country_Code": "TK",
      "Three_Letter_Country_Code": "TKL",
      "Country_Number": 772
    },
    {
      "Continent_Name": "Oceania",
      "Continent_Code": "OC",
      "Country_Name": "Tonga, Kingdom of",
      "Two_Letter_Country_Code": "TO",
      "Three_Letter_Country_Code": "TON",
      "Country_Number": 776
    },
    {
      "Continent_Name": "North America",
      "Continent_Code": "NA",
      "Country_Name": "Trinidad and Tobago, Republic of",
      "Two_Letter_Country_Code": "TT",
      "Three_Letter_Country_Code": "TTO",
      "Country_Number": 780
    },
    {
      "Continent_Name": "Asia",
      "Continent_Code": "AS",
      "Country_Name": "United Arab Emirates",
      "Two_Letter_Country_Code": "AE",
      "Three_Letter_Country_Code": "ARE",
      "Country_Number": 784
    },
    {
      "Continent_Name": "Africa",
      "Continent_Code": "AF",
      "Country_Name": "Tunisia, Tunisian Republic",
      "Two_Letter_Country_Code": "TN",
      "Three_Letter_Country_Code": "TUN",
      "Country_Number": 788
    },
    {
      "Continent_Name": "Europe",
      "Continent_Code": "EU",
      "Country_Name": "Turkey, Republic of",
      "Two_Letter_Country_Code": "TR",
      "Three_Letter_Country_Code": "TUR",
      "Country_Number": 792
    },
    {
      "Continent_Name": "Asia",
      "Continent_Code": "AS",
      "Country_Name": "Turkey, Republic of",
      "Two_Letter_Country_Code": "TR",
      "Three_Letter_Country_Code": "TUR",
      "Country_Number": 792
    },
    {
      "Continent_Name": "Asia",
      "Continent_Code": "AS",
      "Country_Name": "Turkmenistan",
      "Two_Letter_Country_Code": "TM",
      "Three_Letter_Country_Code": "TKM",
      "Country_Number": 795
    },
    {
      "Continent_Name": "North America",
      "Continent_Code": "NA",
      "Country_Name": "Turks and Caicos Islands",
      "Two_Letter_Country_Code": "TC",
      "Three_Letter_Country_Code": "TCA",
      "Country_Number": 796
    },
    {
      "Continent_Name": "Oceania",
      "Continent_Code": "OC",
      "Country_Name": "Tuvalu",
      "Two_Letter_Country_Code": "TV",
      "Three_Letter_Country_Code": "TUV",
      "Country_Number": 798
    },
    {
      "Continent_Name": "Africa",
      "Continent_Code": "AF",
      "Country_Name": "Uganda, Republic of",
      "Two_Letter_Country_Code": "UG",
      "Three_Letter_Country_Code": "UGA",
      "Country_Number": 800
    },
    {
      "Continent_Name": "Europe",
      "Continent_Code": "EU",
      "Country_Name": "Ukraine",
      "Two_Letter_Country_Code": "UA",
      "Three_Letter_Country_Code": "UKR",
      "Country_Number": 804
    },
    {
      "Continent_Name": "Europe",
      "Continent_Code": "EU",
      "Country_Name": "Macedonia, The Former Yugoslav Republic of",
      "Two_Letter_Country_Code": "MK",
      "Three_Letter_Country_Code": "MKD",
      "Country_Number": 807
    },
    {
      "Continent_Name": "Africa",
      "Continent_Code": "AF",
      "Country_Name": "Egypt, Arab Republic of",
      "Two_Letter_Country_Code": "EG",
      "Three_Letter_Country_Code": "EGY",
      "Country_Number": 818
    },
    {
      "Continent_Name": "Europe",
      "Continent_Code": "EU",
      "Country_Name": "United Kingdom of Great Britain & Northern Ireland",
      "Two_Letter_Country_Code": "GB",
      "Three_Letter_Country_Code": "GBR",
      "Country_Number": 826
    },
    {
      "Continent_Name": "Europe",
      "Continent_Code": "EU",
      "Country_Name": "Guernsey, Bailiwick of",
      "Two_Letter_Country_Code": "GG",
      "Three_Letter_Country_Code": "GGY",
      "Country_Number": 831
    },
    {
      "Continent_Name": "Europe",
      "Continent_Code": "EU",
      "Country_Name": "Jersey, Bailiwick of",
      "Two_Letter_Country_Code": "JE",
      "Three_Letter_Country_Code": "JEY",
      "Country_Number": 832
    },
    {
      "Continent_Name": "Europe",
      "Continent_Code": "EU",
      "Country_Name": "Isle of Man",
      "Two_Letter_Country_Code": "IM",
      "Three_Letter_Country_Code": "IMN",
      "Country_Number": 833
    },
    {
      "Continent_Name": "Africa",
      "Continent_Code": "AF",
      "Country_Name": "Tanzania, United Republic of",
      "Two_Letter_Country_Code": "TZ",
      "Three_Letter_Country_Code": "TZA",
      "Country_Number": 834
    },
    {
      "Continent_Name": "North America",
      "Continent_Code": "NA",
      "Country_Name": "United States of America",
      "Two_Letter_Country_Code": "US",
      "Three_Letter_Country_Code": "USA",
      "Country_Number": 840
    },
    {
      "Continent_Name": "North America",
      "Continent_Code": "NA",
      "Country_Name": "United States Virgin Islands",
      "Two_Letter_Country_Code": "VI",
      "Three_Letter_Country_Code": "VIR",
      "Country_Number": 850
    },
    {
      "Continent_Name": "Africa",
      "Continent_Code": "AF",
      "Country_Name": "Burkina Faso",
      "Two_Letter_Country_Code": "BF",
      "Three_Letter_Country_Code": "BFA",
      "Country_Number": 854
    },
    {
      "Continent_Name": "South America",
      "Continent_Code": "SA",
      "Country_Name": "Uruguay, Eastern Republic of",
      "Two_Letter_Country_Code": "UY",
      "Three_Letter_Country_Code": "URY",
      "Country_Number": 858
    },
    {
      "Continent_Name": "Asia",
      "Continent_Code": "AS",
      "Country_Name": "Uzbekistan, Republic of",
      "Two_Letter_Country_Code": "UZ",
      "Three_Letter_Country_Code": "UZB",
      "Country_Number": 860
    },
    {
      "Continent_Name": "South America",
      "Continent_Code": "SA",
      "Country_Name": "Venezuela, Bolivarian Republic of",
      "Two_Letter_Country_Code": "VE",
      "Three_Letter_Country_Code": "VEN",
      "Country_Number": 862
    },
    {
      "Continent_Name": "Oceania",
      "Continent_Code": "OC",
      "Country_Name": "Wallis and Futuna",
      "Two_Letter_Country_Code": "WF",
      "Three_Letter_Country_Code": "WLF",
      "Country_Number": 876
    },
    {
      "Continent_Name": "Oceania",
      "Continent_Code": "OC",
      "Country_Name": "Samoa, Independent State of",
      "Two_Letter_Country_Code": "WS",
      "Three_Letter_Country_Code": "WSM",
      "Country_Number": 882
    },
    {
      "Continent_Name": "Asia",
      "Continent_Code": "AS",
      "Country_Name": "Yemen",
      "Two_Letter_Country_Code": "YE",
      "Three_Letter_Country_Code": "YEM",
      "Country_Number": 887
    },
    {
      "Continent_Name": "Africa",
      "Continent_Code": "AF",
      "Country_Name": "Zambia, Republic of",
      "Two_Letter_Country_Code": "ZM",
      "Three_Letter_Country_Code": "ZMB",
      "Country_Number": 894
    },
    {
      "Continent_Name": "Oceania",
      "Continent_Code": "OC",
      "Country_Name": "Disputed Territory",
      "Two_Letter_Country_Code": "XX",
      "Three_Letter_Country_Code": "",
      "Country_Number": ""
    },
    {
      "Continent_Name": "Asia",
      "Continent_Code": "AS",
      "Country_Name": "Iraq-Saudi Arabia Neutral Zone",
      "Two_Letter_Country_Code": "XE",
      "Three_Letter_Country_Code": "",
      "Country_Number": ""
    },
    {
      "Continent_Name": "Asia",
      "Continent_Code": "AS",
      "Country_Name": "United Nations Neutral Zone",
      "Two_Letter_Country_Code": "XD",
      "Three_Letter_Country_Code": "",
      "Country_Number": ""
    },
    {
      "Continent_Name": "Asia",
      "Continent_Code": "AS",
      "Country_Name": "Spratly Islands",
      "Two_Letter_Country_Code": "XS",
      "Three_Letter_Country_Code": "",
      "Country_Number": ""
    }
  ],
  flags: []
};
///////////////////////////////////
// global functions for the game //
///////////////////////////////////
function populateContinents() {
  const continents = [...["All"], ...new Set(game.continents.map(x => x.Continent_Name))];
  var select = document.getElementById("continents");
  for(var i = 0; i < continents.length; i++) {
    var opt = continents[i];
    var el = document.createElement("option");
    el.textContent = opt;
    el.value = opt;
    select.appendChild(el);
  }
}

function setContinent() {
  var select = document.getElementById("continents");
  game.currentContinent = select.options[select.selectedIndex].text;

  if (game.currentContinent == "All") {
    game.flags = game.allFlags;
  } else {
    var countries = game.continents.filter(x => x.Continent_Name == game.currentContinent).map(x => x.Two_Letter_Country_Code);
    game.flags = game.allFlags.filter(x => countries.includes(x.iso));
  }
  game.currentFlag = popRandomFlag();
  updateGameState();
}

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
    let elem = document.getElementById('flag-img');
    if (!elem) {
      elem = document.createElement('img');
    }
    elem.setAttribute('id', 'flag-img');
    elem.setAttribute(
      'src',
      `https://flagcdn.com/128x96/${game.currentFlag.iso.toLowerCase()}.png`
    );
    elem.setAttribute('width', '128');
    elem.setAttribute('height', '96');
    elem.setAttribute('alt', 'Flag to guess');
    document.getElementById('flag').appendChild(elem);
  }

  if (event) {
    const distance = round(haversine(event.latlng, game.previousFlag.latlng));
    if (game.currentLine) {
      game.currentLine.remove(map);
    }
    game.currentLine = L.polyline([event.latlng, game.previousFlag.latlng], {
      color: '#2a52be', // cerulean
      weight: 0.5,
      opacity: 50,
    }).addTo(map);
    for (const marker of game.currentMarkers) {
      marker.remove(map);
    }
    game.currentMarkers = [];
    // guess marker
    game.currentMarkers.push(
      L.marker([event.latlng.lat, event.latlng.lng], {
        icon: new L.DivIcon({
          className: 'previous-guess-icon',
          html: `<span class="previous-guess-span">Your Guess</span>`,
        }),
      }).addTo(map)
    );
    // answer marker
    game.currentMarkers.push(
      L.marker([game.previousFlag.latlng.lat, game.previousFlag.latlng.lng], {
        icon: new L.DivIcon({
          className: 'previous-answer-icon',
          html: `<span class="previous-answer-span">${game.previousFlag.name}</span>`,
        }),
        title: game.previousFlag.name,
      }).addTo(map)
    );
    game.score = round(game.score + distance);
    game.rounds++;
    document.getElementById(
      'guess'
    ).innerText = `You were ${distance} km away from ${game.previousFlag.name}`;
    document.getElementById('rounds').innerText = `rounds: ${game.rounds}`;
    document.getElementById('score').innerText = `score: ${game.score}`;
  }
}

////////////////////
// setup the game //
////////////////////
//start with all the flags
game.flags = game.allFlags;
populateContinents();
map.on('click', updateGameState);

// let's get started!
game.currentFlag = popRandomFlag();
updateGameState();
