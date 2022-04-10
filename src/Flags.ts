import { LatLng } from "leaflet";

export type Capital = {
	name: string,
	latlng: Pick<LatLng, 'lat'|'lng'>,
};

export type Flag = {
	capitals: Capital[],
	iso: string,
};

export const flags: Flag[] = [
  {
    capitals: [
      {
        name: 'Tokyo, Japan',
        latlng: {
          lat: 35.6839,
          lng: 139.7744,
        },
      },
    ],
    iso: 'JP',
  },
  {
    capitals: [
      {
        name: 'Jakarta, Indonesia',
        latlng: {
          lat: -6.2146,
          lng: 106.8451,
        },
      },
    ],
    iso: 'ID',
  },
  {
    capitals: [
      {
        name: 'Manila, Philippines',
        latlng: {
          lat: 14.6,
          lng: 120.9833,
        },
      },
    ],
    iso: 'PH',
  },
  {
    capitals: [
      {
        name: 'Seoul, South Korea',
        latlng: {
          lat: 37.56,
          lng: 126.99,
        },
      },
    ],
    iso: 'KR',
  },
  {
    capitals: [
      {
        name: 'Mexico City, Mexico',
        latlng: {
          lat: 19.4333,
          lng: -99.1333,
        },
      },
    ],
    iso: 'MX',
  },
  {
    capitals: [
      {
        name: 'Cairo, Egypt',
        latlng: {
          lat: 30.0444,
          lng: 31.2358,
        },
      },
    ],
    iso: 'EG',
  },
  {
    capitals: [
      {
        name: 'Beijing, China',
        latlng: {
          lat: 39.904,
          lng: 116.4075,
        },
      },
    ],
    iso: 'CN',
  },
  {
    capitals: [
      {
        name: 'Moscow, Russia',
        latlng: {
          lat: 55.7558,
          lng: 37.6178,
        },
      },
    ],
    iso: 'RU',
  },
  {
    capitals: [
      {
        name: 'Bangkok, Thailand',
        latlng: {
          lat: 13.75,
          lng: 100.5167,
        },
      },
    ],
    iso: 'TH',
  },
  {
    capitals: [
      {
        name: 'Dhaka, Bangladesh',
        latlng: {
          lat: 23.7289,
          lng: 90.3944,
        },
      },
    ],
    iso: 'BD',
  },
  {
    capitals: [
      {
        name: 'Buenos Aires, Argentina',
        latlng: {
          lat: -34.5997,
          lng: -58.3819,
        },
      },
    ],
    iso: 'AR',
  },
  {
    capitals: [
      {
        name: 'Kinshasa, Congo (Kinshasa)',
        latlng: {
          lat: -4.3317,
          lng: 15.3139,
        },
      },
    ],
    iso: 'CD',
  },
  {
    capitals: [
      {
        name: 'Tehran, Iran',
        latlng: {
          lat: 35.7,
          lng: 51.4167,
        },
      },
    ],
    iso: 'IR',
  },
  {
    capitals: [
      {
        name: 'London, United Kingdom',
        latlng: {
          lat: 51.5072,
          lng: -0.1275,
        },
      },
    ],
    iso: 'GB',
  },
  {
    capitals: [
      {
        name: 'Paris, France',
        latlng: {
          lat: 48.8566,
          lng: 2.3522,
        },
      },
    ],
    iso: 'FR',
  },
  {
    capitals: [
      {
        name: 'Lima, Peru',
        latlng: {
          lat: -12.06,
          lng: -77.0375,
        },
      },
    ],
    iso: 'PE',
  },
  {
    capitals: [
      {
        name: 'Luanda, Angola',
        latlng: {
          lat: -8.8383,
          lng: 13.2344,
        },
      },
    ],
    iso: 'AO',
  },
  {
    capitals: [
      {
        name: 'Kuala Lumpur, Malaysia',
        latlng: {
          lat: 3.1478,
          lng: 101.6953,
        },
      },
    ],
    iso: 'MY',
  },
  {
    capitals: [
      {
        name: 'Hanoi, Vietnam',
        latlng: {
          lat: 21.0245,
          lng: 105.8412,
        },
      },
    ],
    iso: 'VN',
  },
  {
    capitals: [
      {
        name: 'Bogotá, Colombia',
        latlng: {
          lat: 4.6126,
          lng: -74.0705,
        },
      },
    ],
    iso: 'CO',
  },
  {
    capitals: [
      {
        name: 'Dar es Salaam, Tanzania',
        latlng: {
          lat: -6.8,
          lng: 39.2833,
        },
      },
      {
        name: 'Dodoma, Tanzania',
        latlng: {
          lat: -6.1835,
          lng: 35.746,
        },
      },
    ],
    iso: 'TZ',
  },
  {
    capitals: [
      {
        name: 'Hong Kong, Hong Kong',
        latlng: {
          lat: 22.3069,
          lng: 114.1831,
        },
      },
    ],
    iso: 'HK',
  },
  {
    capitals: [
      {
        name: 'Santiago, Chile',
        latlng: {
          lat: -33.45,
          lng: -70.6667,
        },
      },
    ],
    iso: 'CL',
  },
  {
    capitals: [
      {
        name: 'Riyadh, Saudi Arabia',
        latlng: {
          lat: 24.65,
          lng: 46.71,
        },
      },
    ],
    iso: 'SA',
  },
  {
    capitals: [
      {
        name: 'Baghdad, Iraq',
        latlng: {
          lat: 33.35,
          lng: 44.4167,
        },
      },
    ],
    iso: 'IQ',
  },
  {
    capitals: [
      {
        name: 'Khartoum, Sudan',
        latlng: {
          lat: 15.6031,
          lng: 32.5265,
        },
      },
    ],
    iso: 'SD',
  },
  {
    capitals: [
      {
        name: 'Madrid, Spain',
        latlng: {
          lat: 40.4167,
          lng: -3.7167,
        },
      },
    ],
    iso: 'ES',
  },
  {
    capitals: [
      {
        name: 'Nairobi, Kenya',
        latlng: {
          lat: -1.2864,
          lng: 36.8172,
        },
      },
    ],
    iso: 'KE',
  },
  {
    capitals: [
      {
        name: 'Rangoon, Myanmar',
        latlng: {
          lat: 16.795,
          lng: 96.16,
        },
      },
      {
        name: 'Nay Pyi Taw, Myanmar',
        latlng: {
          lat: 19.7475,
          lng: 96.115,
        },
      },
    ],
    iso: 'MM',
  },
  {
    capitals: [
      {
        name: 'Washington, United States',
        latlng: {
          lat: 38.9047,
          lng: -77.0163,
        },
      },
    ],
    iso: 'US',
  },
  {
    capitals: [
      {
        name: 'Singapore, Singapore',
        latlng: {
          lat: 1.3,
          lng: 103.8,
        },
      },
    ],
    iso: 'SG',
  },
  {
    capitals: [
      {
        name: 'Kabul, Afghanistan',
        latlng: {
          lat: 34.5328,
          lng: 69.1658,
        },
      },
    ],
    iso: 'AF',
  },
  {
    capitals: [
      {
        name: 'Amman, Jordan',
        latlng: {
          lat: 31.95,
          lng: 35.9333,
        },
      },
    ],
    iso: 'JO',
  },
  {
    capitals: [
      {
        name: 'Berlin, Germany',
        latlng: {
          lat: 52.5167,
          lng: 13.3833,
        },
      },
    ],
    iso: 'DE',
  },
  {
    capitals: [
      {
        name: 'Algiers, Algeria',
        latlng: {
          lat: 36.7764,
          lng: 3.0586,
        },
      },
    ],
    iso: 'DZ',
  },
  {
    capitals: [
      {
        name: 'Addis Ababa, Ethiopia',
        latlng: {
          lat: 9.0272,
          lng: 38.7369,
        },
      },
    ],
    iso: 'ET',
  },
  {
    capitals: [
      {
        name: 'Brasília, Brazil',
        latlng: {
          lat: -15.7939,
          lng: -47.8828,
        },
      },
    ],
    iso: 'BR',
  },
  {
    capitals: [
      {
        name: 'Kuwait City, Kuwait',
        latlng: {
          lat: 29.375,
          lng: 47.98,
        },
      },
    ],
    iso: 'KW',
  },
  {
    capitals: [
      {
        name: 'Kyiv, Ukraine',
        latlng: {
          lat: 50.45,
          lng: 30.5236,
        },
      },
    ],
    iso: 'UA',
  },
  {
    capitals: [
      {
        name: 'Sanaa, Yemen',
        latlng: {
          lat: 15.35,
          lng: 44.2,
        },
      },
    ],
    iso: 'YE',
  },
  {
    capitals: [
      {
        name: 'Guatemala City, Guatemala',
        latlng: {
          lat: 14.6099,
          lng: -90.5252,
        },
      },
    ],
    iso: 'GT',
  },
  {
    capitals: [
      {
        name: 'Rome, Italy',
        latlng: {
          lat: 41.8931,
          lng: 12.4828,
        },
      },
    ],
    iso: 'IT',
  },
  {
    capitals: [
      {
        name: 'La Paz, Bolivia',
        latlng: {
          lat: -16.4942,
          lng: -68.1475,
        },
      },
      {
        name: 'Sucre, Bolivia',
        latlng: {
          lat: -19.0431,
          lng: -65.2592,
        },
      },
    ],
    iso: 'BO',
  },
  {
    capitals: [
      {
        name: 'Pyongyang, North Korea',
        latlng: {
          lat: 39.03,
          lng: 125.73,
        },
      },
    ],
    iso: 'KP',
  },
  {
    capitals: [
      {
        name: 'Antananarivo, Madagascar',
        latlng: {
          lat: -18.9386,
          lng: 47.5214,
        },
      },
    ],
    iso: 'MG',
  },
  {
    capitals: [
      {
        name: 'Santo Domingo, Dominican Republic',
        latlng: {
          lat: 18.4764,
          lng: -69.8933,
        },
      },
    ],
    iso: 'DO',
  },
  {
    capitals: [
      {
        name: 'Tashkent, Uzbekistan',
        latlng: {
          lat: 41.3,
          lng: 69.2667,
        },
      },
    ],
    iso: 'UZ',
  },
  {
    capitals: [
      {
        name: 'Ouagadougou, Burkina Faso',
        latlng: {
          lat: 12.3686,
          lng: -1.5275,
        },
      },
    ],
    iso: 'BF',
  },
  {
    capitals: [
      {
        name: 'Yaoundé, Cameroon',
        latlng: {
          lat: 3.8578,
          lng: 11.5181,
        },
      },
    ],
    iso: 'CM',
  },
  {
    capitals: [
      {
        name: 'Accra, Ghana',
        latlng: {
          lat: 5.6037,
          lng: -0.187,
        },
      },
    ],
    iso: 'GH',
  },
  {
    capitals: [
      {
        name: 'Baku, Azerbaijan',
        latlng: {
          lat: 40.3667,
          lng: 49.8352,
        },
      },
    ],
    iso: 'AZ',
  },
  {
    capitals: [
      {
        name: 'Harare, Zimbabwe',
        latlng: {
          lat: -17.8292,
          lng: 31.0522,
        },
      },
    ],
    iso: 'ZW',
  },
  {
    capitals: [
      {
        name: 'Havana, Cuba',
        latlng: {
          lat: 23.1367,
          lng: -82.3589,
        },
      },
    ],
    iso: 'CU',
  },
  {
    capitals: [
      {
        name: 'Phnom Penh, Cambodia',
        latlng: {
          lat: 11.5696,
          lng: 104.921,
        },
      },
    ],
    iso: 'KH',
  },
  {
    capitals: [
      {
        name: 'Mogadishu, Somalia',
        latlng: {
          lat: 2.0408,
          lng: 45.3425,
        },
      },
    ],
    iso: 'SO',
  },
  {
    capitals: [
      {
        name: 'Bamako, Mali',
        latlng: {
          lat: 12.6458,
          lng: -7.9922,
        },
      },
    ],
    iso: 'ML',
  },
  {
    capitals: [
      {
        name: 'Quito, Ecuador',
        latlng: {
          lat: -0.22,
          lng: -78.5125,
        },
      },
    ],
    iso: 'EC',
  },
  {
    capitals: [
      {
        name: 'Minsk, Belarus',
        latlng: {
          lat: 53.9022,
          lng: 27.5618,
        },
      },
    ],
    iso: 'BY',
  },
  {
    capitals: [
      {
        name: 'Caracas, Venezuela',
        latlng: {
          lat: 10.5,
          lng: -66.9333,
        },
      },
    ],
    iso: 'VE',
  },
  {
    capitals: [
      {
        name: 'Vienna, Austria',
        latlng: {
          lat: 48.2083,
          lng: 16.3725,
        },
      },
    ],
    iso: 'AT',
  },
  {
    capitals: [
      {
        name: 'Bucharest, Romania',
        latlng: {
          lat: 44.4,
          lng: 26.0833,
        },
      },
    ],
    iso: 'RO',
  },
  {
    capitals: [
      {
        name: 'Brazzaville, Congo (Brazzaville)',
        latlng: {
          lat: -4.2667,
          lng: 15.2833,
        },
      },
    ],
    iso: 'CG',
  },
  {
    capitals: [
      {
        name: 'Warsaw, Poland',
        latlng: {
          lat: 52.23,
          lng: 21.0111,
        },
      },
    ],
    iso: 'PL',
  },
  {
    capitals: [
      {
        name: 'Damascus, Syria',
        latlng: {
          lat: 33.5131,
          lng: 36.2919,
        },
      },
    ],
    iso: 'SY',
  },
  {
    capitals: [
      {
        name: 'Brussels, Belgium',
        latlng: {
          lat: 50.8353,
          lng: 4.3314,
        },
      },
    ],
    iso: 'BE',
  },
  {
    capitals: [
      {
        name: 'Lusaka, Zambia',
        latlng: {
          lat: -15.4167,
          lng: 28.2833,
        },
      },
    ],
    iso: 'ZM',
  },
  {
    capitals: [
      {
        name: 'Budapest, Hungary',
        latlng: {
          lat: 47.4983,
          lng: 19.0408,
        },
      },
    ],
    iso: 'HU',
  },
  {
    capitals: [
      {
        name: 'Conakry, Guinea',
        latlng: {
          lat: 9.538,
          lng: -13.6773,
        },
      },
    ],
    iso: 'GN',
  },
  {
    capitals: [
      {
        name: 'Kampala, Uganda',
        latlng: {
          lat: 0.3136,
          lng: 32.5811,
        },
      },
    ],
    iso: 'UG',
  },
  {
    capitals: [
      {
        name: 'Abu Dhabi, United Arab Emirates',
        latlng: {
          lat: 24.4511,
          lng: 54.3969,
        },
      },
    ],
    iso: 'AE',
  },
  {
    capitals: [
      {
        name: 'Muscat, Oman',
        latlng: {
          lat: 23.6139,
          lng: 58.5922,
        },
      },
    ],
    iso: 'OM',
  },
  {
    capitals: [
      {
        name: 'Ulaanbaatar, Mongolia',
        latlng: {
          lat: 47.9214,
          lng: 106.9055,
        },
      },
    ],
    iso: 'MN',
  },
  {
    capitals: [
      {
        name: 'Belgrade, Serbia',
        latlng: {
          lat: 44.8167,
          lng: 20.4667,
        },
      },
    ],
    iso: 'RS',
  },
  {
    capitals: [
      {
        name: 'Prague, Czechia',
        latlng: {
          lat: 50.0833,
          lng: 14.4167,
        },
      },
    ],
    iso: 'CZ',
  },
  {
    capitals: [
      {
        name: 'Montevideo, Uruguay',
        latlng: {
          lat: -34.8667,
          lng: -56.1667,
        },
      },
    ],
    iso: 'UY',
  },
  {
    capitals: [
      {
        name: 'Sofia, Bulgaria',
        latlng: {
          lat: 42.6979,
          lng: 23.3217,
        },
      },
    ],
    iso: 'BG',
  },
  {
    capitals: [
      {
        name: 'Abuja, Nigeria',
        latlng: {
          lat: 9.0556,
          lng: 7.4914,
        },
      },
    ],
    iso: 'NG',
  },
  {
    capitals: [
      {
        name: 'Maputo, Mozambique',
        latlng: {
          lat: -25.9153,
          lng: 32.5764,
        },
      },
    ],
    iso: 'MZ',
  },
  {
    capitals: [
      {
        name: 'Doha, Qatar',
        latlng: {
          lat: 25.3,
          lng: 51.5333,
        },
      },
    ],
    iso: 'QA',
  },
  {
    capitals: [
      {
        name: 'Dakar, Senegal',
        latlng: {
          lat: 14.7319,
          lng: -17.4572,
        },
      },
    ],
    iso: 'SN',
  },
  {
    capitals: [
      {
        name: 'Kigali, Rwanda',
        latlng: {
          lat: -1.9536,
          lng: 30.0606,
        },
      },
    ],
    iso: 'RW',
  },
  {
    capitals: [
      {
        name: 'Tripoli, Libya',
        latlng: {
          lat: 32.8752,
          lng: 13.1875,
        },
      },
    ],
    iso: 'LY',
  },
  {
    capitals: [
      {
        name: 'Tegucigalpa, Honduras',
        latlng: {
          lat: 14.0942,
          lng: -87.2067,
        },
      },
    ],
    iso: 'HN',
  },
  {
    capitals: [
      {
        name: 'Tbilisi, Georgia',
        latlng: {
          lat: 41.7225,
          lng: 44.7925,
        },
      },
    ],
    iso: 'GE',
  },
  {
    capitals: [
      {
        name: 'N’Djamena, Chad',
        latlng: {
          lat: 12.11,
          lng: 15.05,
        },
      },
    ],
    iso: 'TD',
  },
  {
    capitals: [
      {
        name: 'Copenhagen, Denmark',
        latlng: {
          lat: 55.6805,
          lng: 12.5615,
        },
      },
    ],
    iso: 'DK',
  },
  {
    capitals: [
      {
        name: 'Yerevan, Armenia',
        latlng: {
          lat: 40.1814,
          lng: 44.5144,
        },
      },
    ],
    iso: 'AM',
  },
  {
    capitals: [
      {
        name: 'Nur-Sultan, Kazakhstan',
        latlng: {
          lat: 51.1333,
          lng: 71.4333,
        },
      },
    ],
    iso: 'KZ',
  },
  {
    capitals: [
      {
        name: 'Nouakchott, Mauritania',
        latlng: {
          lat: 18.0858,
          lng: -15.9785,
        },
      },
    ],
    iso: 'MR',
  },
  {
    capitals: [
      {
        name: 'Bishkek, Kyrgyzstan',
        latlng: {
          lat: 42.8667,
          lng: 74.5667,
        },
      },
    ],
    iso: 'KG',
  },
  {
    capitals: [
      {
        name: 'Tunis, Tunisia',
        latlng: {
          lat: 36.8008,
          lng: 10.18,
        },
      },
    ],
    iso: 'TN',
  },
  {
    capitals: [
      {
        name: 'Kathmandu, Nepal',
        latlng: {
          lat: 27.7167,
          lng: 85.3667,
        },
      },
    ],
    iso: 'NP',
  },
  {
    capitals: [
      {
        name: 'Niamey, Niger',
        latlng: {
          lat: 13.5086,
          lng: 2.1111,
        },
      },
    ],
    iso: 'NE',
  },
  {
    capitals: [
      {
        name: 'Managua, Nicaragua',
        latlng: {
          lat: 12.15,
          lng: -86.2667,
        },
      },
    ],
    iso: 'NI',
  },
  {
    capitals: [
      {
        name: 'Monrovia, Liberia',
        latlng: {
          lat: 6.3106,
          lng: -10.8047,
        },
      },
    ],
    iso: 'LR',
  },
  {
    capitals: [
      {
        name: 'Port-au-Prince, Haiti',
        latlng: {
          lat: 18.5425,
          lng: -72.3386,
        },
      },
    ],
    iso: 'HT',
  },
  {
    capitals: [
      {
        name: 'Islamabad, Pakistan',
        latlng: {
          lat: 33.6989,
          lng: 73.0369,
        },
      },
    ],
    iso: 'PK',
  },
  {
    capitals: [
      {
        name: 'Ottawa, Canada',
        latlng: {
          lat: 45.4247,
          lng: -75.695,
        },
      },
    ],
    iso: 'CA',
  },
  {
    capitals: [
      {
        name: 'Stockholm, Sweden',
        latlng: {
          lat: 59.3294,
          lng: 18.0686,
        },
      },
    ],
    iso: 'SE',
  },
  {
    capitals: [
      {
        name: 'Asmara, Eritrea',
        latlng: {
          lat: 15.3333,
          lng: 38.9167,
        },
      },
    ],
    iso: 'ER',
  },
  {
    capitals: [
      {
        name: 'Freetown, Sierra Leone',
        latlng: {
          lat: 8.4833,
          lng: -13.2331,
        },
      },
    ],
    iso: 'SL',
  },
  {
    capitals: [
      {
        name: 'Vientiane, Laos',
        latlng: {
          lat: 17.9667,
          lng: 102.6,
        },
      },
    ],
    iso: 'LA',
  },
  {
    capitals: [
      {
        name: 'Jerusalem, Israel',
        latlng: {
          lat: 31.7833,
          lng: 35.2167,
        },
      },
    ],
    iso: 'IL',
  },
  {
    capitals: [
      {
        name: 'Bangui, Central African Republic',
        latlng: {
          lat: 4.3732,
          lng: 18.5628,
        },
      },
    ],
    iso: 'CF',
  },
  {
    capitals: [
      {
        name: 'Panama City, Panama',
        latlng: {
          lat: 9,
          lng: -79.5,
        },
      },
    ],
    iso: 'PA',
  },
  {
    capitals: [
      {
        name: 'Lomé, Togo',
        latlng: {
          lat: 6.1319,
          lng: 1.2228,
        },
      },
    ],
    iso: 'TG',
  },
  {
    capitals: [
      {
        name: 'Libreville, Gabon',
        latlng: {
          lat: 0.3901,
          lng: 9.4544,
        },
      },
    ],
    iso: 'GA',
  },
  {
    capitals: [
      {
        name: 'Zagreb, Croatia',
        latlng: {
          lat: 45.8131,
          lng: 15.9772,
        },
      },
    ],
    iso: 'HR',
  },
  {
    capitals: [
      {
        name: 'Dushanbe, Tajikistan',
        latlng: {
          lat: 38.5731,
          lng: 68.7864,
        },
      },
    ],
    iso: 'TJ',
  },
  {
    capitals: [
      {
        name: 'Lilongwe, Malawi',
        latlng: {
          lat: -13.9833,
          lng: 33.7833,
        },
      },
    ],
    iso: 'MW',
  },
  {
    capitals: [
      {
        name: 'Cotonou, Benin',
        latlng: {
          lat: 6.402,
          lng: 2.518,
        },
      },
      {
        name: 'Porto-Novo, Benin',
        latlng: {
          lat: 6.4833,
          lng: 2.6167,
        },
      },
    ],
    iso: 'BJ',
  },
  {
    capitals: [
      {
        name: 'Oslo, Norway',
        latlng: {
          lat: 59.9111,
          lng: 10.7528,
        },
      },
    ],
    iso: 'NO',
  },
  {
    capitals: [
      {
        name: 'Athens, Greece',
        latlng: {
          lat: 37.9842,
          lng: 23.7281,
        },
      },
    ],
    iso: 'GR',
  },
  {
    capitals: [
      {
        name: 'Bujumbura, Burundi',
        latlng: {
          lat: -3.3825,
          lng: 29.3611,
        },
      },
      {
        name: 'Gitega, Burundi',
        latlng: {
          lat: -3.4283,
          lng: 29.925,
        },
      },
    ],
    iso: 'BI',
  },
  {
    capitals: [
      {
        name: 'Helsinki, Finland',
        latlng: {
          lat: 60.1756,
          lng: 24.9342,
        },
      },
    ],
    iso: 'FI',
  },
  {
    capitals: [
      {
        name: 'Skopje, Macedonia',
        latlng: {
          lat: 41.9833,
          lng: 21.4333,
        },
      },
    ],
    iso: 'MK',
  },
  {
    capitals: [
      {
        name: 'Chisinau, Moldova',
        latlng: {
          lat: 47.0228,
          lng: 28.8353,
        },
      },
    ],
    iso: 'MD',
  },
  {
    capitals: [
      {
        name: 'Riga, Latvia',
        latlng: {
          lat: 56.9475,
          lng: 24.1069,
        },
      },
    ],
    iso: 'LV',
  },
  {
    capitals: [
      {
        name: 'Kingston, Jamaica',
        latlng: {
          lat: 17.9714,
          lng: -76.7931,
        },
      },
    ],
    iso: 'JM',
  },
  {
    capitals: [
      {
        name: 'Rabat, Morocco',
        latlng: {
          lat: 34.0253,
          lng: -6.8361,
        },
      },
    ],
    iso: 'MA',
  },
  {
    capitals: [
      {
        name: 'Vilnius, Lithuania',
        latlng: {
          lat: 54.6833,
          lng: 25.2833,
        },
      },
    ],
    iso: 'LT',
  },
  {
    capitals: [
      {
        name: 'San Salvador, El Salvador',
        latlng: {
          lat: 13.6989,
          lng: -89.1914,
        },
      },
    ],
    iso: 'SV',
  },
  {
    capitals: [
      {
        name: 'Djibouti, Djibouti',
        latlng: {
          lat: 11.595,
          lng: 43.1481,
        },
      },
    ],
    iso: 'DJ',
  },
  {
    capitals: [
      {
        name: 'Dublin, Ireland',
        latlng: {
          lat: 53.3497,
          lng: -6.2603,
        },
      },
    ],
    iso: 'IE',
  },
  {
    capitals: [
      {
        name: 'The Hague, Netherlands',
        latlng: {
          lat: 52.08,
          lng: 4.31,
        },
      },
      {
        name: 'Amsterdam, Netherlands',
        latlng: {
          lat: 52.3667,
          lng: 4.8833,
        },
      },
    ],
    iso: 'NL',
  },
  {
    capitals: [
      {
        name: 'Asunción, Paraguay',
        latlng: {
          lat: -25.3,
          lng: -57.6333,
        },
      },
    ],
    iso: 'PY',
  },
  {
    capitals: [
      {
        name: 'Lisbon, Portugal',
        latlng: {
          lat: 38.708,
          lng: -9.139,
        },
      },
    ],
    iso: 'PT',
  },
  {
    capitals: [
      {
        name: 'Bratislava, Slovakia',
        latlng: {
          lat: 48.1447,
          lng: 17.1128,
        },
      },
    ],
    iso: 'SK',
  },
  {
    capitals: [
      {
        name: 'Tallinn, Estonia',
        latlng: {
          lat: 59.4372,
          lng: 24.745,
        },
      },
    ],
    iso: 'EE',
  },
  {
    capitals: [
      {
        name: 'Beirut, Lebanon',
        latlng: {
          lat: 33.8869,
          lng: 35.5131,
        },
      },
    ],
    iso: 'LB',
  },
  {
    capitals: [
      {
        name: 'Tirana, Albania',
        latlng: {
          lat: 41.33,
          lng: 19.82,
        },
      },
    ],
    iso: 'AL',
  },
  {
    capitals: [
      {
        name: 'Wellington, New Zealand',
        latlng: {
          lat: -41.2889,
          lng: 174.7772,
        },
      },
    ],
    iso: 'NZ',
  },
  {
    capitals: [
      {
        name: 'Bissau, Guinea-Bissau',
        latlng: {
          lat: 11.8592,
          lng: -15.5956,
        },
      },
    ],
    iso: 'GW',
  },
  {
    capitals: [
      {
        name: 'Canberra, Australia',
        latlng: {
          lat: -35.2931,
          lng: 149.1269,
        },
      },
    ],
    iso: 'AU',
  },
  {
    capitals: [
      {
        name: 'Juba, South Sudan',
        latlng: {
          lat: 4.85,
          lng: 31.6,
        },
      },
    ],
    iso: 'SS',
  },
  {
    capitals: [
      {
        name: "Yamoussoukro, Côte d'Ivoire",
        latlng: {
          lat: 6.8161,
          lng: -5.2742,
        },
      },
      {
        name: "Abidjan, Côte d'Ivoire",
        latlng: {
          lat: 5.3364,
          lng: -4.0267,
        },
      },
    ],
    iso: 'CI',
  },
  {
    capitals: [
      {
        name: 'Maseru, Lesotho',
        latlng: {
          lat: -29.31,
          lng: 27.48,
        },
      },
    ],
    iso: 'LS',
  },
  {
    capitals: [
      {
        name: 'Nicosia, Cyprus',
        latlng: {
          lat: 35.1725,
          lng: 33.365,
        },
      },
    ],
    iso: 'CY',
  },
  {
    capitals: [
      {
        name: 'Windhoek, Namibia',
        latlng: {
          lat: -22.57,
          lng: 17.0836,
        },
      },
    ],
    iso: 'NA',
  },
  {
    capitals: [
      {
        name: 'Port Moresby, Papua New Guinea',
        latlng: {
          lat: -9.4789,
          lng: 147.1494,
        },
      },
    ],
    iso: 'PG',
  },
  {
    capitals: [
      {
        name: 'San José, Costa Rica',
        latlng: {
          lat: 9.9333,
          lng: -84.0833,
        },
      },
    ],
    iso: 'CR',
  },
  {
    capitals: [
      {
        name: 'Ljubljana, Slovenia',
        latlng: {
          lat: 46.05,
          lng: 14.5167,
        },
      },
    ],
    iso: 'SI',
  },
  {
    capitals: [
      {
        name: 'Sarajevo, Bosnia And Herzegovina',
        latlng: {
          lat: 43.8563,
          lng: 18.4132,
        },
      },
    ],
    iso: 'BA',
  },
  {
    capitals: [
      {
        name: 'Nassau, The Bahamas',
        latlng: {
          lat: 25.0667,
          lng: -77.3333,
        },
      },
    ],
    iso: 'BS',
  },
  {
    capitals: [
      {
        name: 'Bloemfontein, South Africa',
        latlng: {
          lat: -29.1,
          lng: 26.2167,
        },
      },
      {
        name: 'Cape Town, South Africa',
        latlng: {
          lat: -33.925,
          lng: 18.425,
        },
      },
      {
        name: 'Pretoria, South Africa',
        latlng: {
          lat: -25.7464,
          lng: 28.1881,
        },
      },
    ],
    iso: 'ZA',
  },
  {
    capitals: [
      {
        name: 'Fort-de-France, Martinique',
        latlng: {
          lat: 14.6104,
          lng: -61.08,
        },
      },
    ],
    iso: 'MQ',
  },
  {
    capitals: [
      {
        name: 'New Delhi, India',
        latlng: {
          lat: 28.6139,
          lng: 77.209,
        },
      },
    ],
    iso: 'IN',
  },
  {
    capitals: [
      {
        name: 'Gaborone, Botswana',
        latlng: {
          lat: -24.6569,
          lng: 25.9086,
        },
      },
    ],
    iso: 'BW',
  },
  {
    capitals: [
      {
        name: 'Paramaribo, Suriname',
        latlng: {
          lat: 5.8667,
          lng: -55.1667,
        },
      },
    ],
    iso: 'SR',
  },
  {
    capitals: [
      {
        name: 'Dili, Timor-Leste',
        latlng: {
          lat: -8.5536,
          lng: 125.5783,
        },
      },
    ],
    iso: 'TL',
  },
  {
    capitals: [
      {
        name: 'Male, Maldives',
        latlng: {
          lat: 4.175,
          lng: 73.5083,
        },
      },
    ],
    iso: 'MV',
  },
  {
    capitals: [
      {
        name: 'Georgetown, Guyana',
        latlng: {
          lat: 6.7833,
          lng: -58.1667,
        },
      },
    ],
    iso: 'GY',
  },
  {
    capitals: [
      {
        name: 'Gibraltar, Gibraltar',
        latlng: {
          lat: 36.1324,
          lng: -5.3781,
        },
      },
    ],
    iso: 'GI',
  },
  {
    capitals: [
      {
        name: 'Saint-Denis, Reunion',
        latlng: {
          lat: -20.8789,
          lng: 55.4481,
        },
      },
    ],
    iso: 'RE',
  },
  {
    capitals: [
      {
        name: 'Malabo, Equatorial Guinea',
        latlng: {
          lat: 3.7521,
          lng: 8.7737,
        },
      },
    ],
    iso: 'GQ',
  },
  {
    capitals: [
      {
        name: 'Podgorica, Montenegro',
        latlng: {
          lat: 42.4397,
          lng: 19.2661,
        },
      },
    ],
    iso: 'ME',
  },
  {
    capitals: [
      {
        name: 'Manama, Bahrain',
        latlng: {
          lat: 26.225,
          lng: 50.5775,
        },
      },
    ],
    iso: 'BH',
  },
  {
    capitals: [
      {
        name: 'Port Louis, Mauritius',
        latlng: {
          lat: -20.1667,
          lng: 57.5,
        },
      },
    ],
    iso: 'MU',
  },
  {
    capitals: [
      {
        name: 'Willemstad, Curaçao',
        latlng: {
          lat: 12.108,
          lng: -68.935,
        },
      },
    ],
    iso: 'CW',
  },
  {
    capitals: [
      {
        name: 'Bern, Switzerland',
        latlng: {
          lat: 46.948,
          lng: 7.4474,
        },
      },
    ],
    iso: 'CH',
  },
  {
    capitals: [
      {
        name: 'Papeete, French Polynesia',
        latlng: {
          lat: -17.5334,
          lng: -149.5667,
        },
      },
    ],
    iso: 'PF',
  },
  {
    capitals: [
      {
        name: 'Luxembourg, Luxembourg',
        latlng: {
          lat: 49.6106,
          lng: 6.1328,
        },
      },
    ],
    iso: 'LU',
  },
  {
    capitals: [
      {
        name: 'Reykjavík, Iceland',
        latlng: {
          lat: 64.1475,
          lng: -21.935,
        },
      },
    ],
    iso: 'IS',
  },
  {
    capitals: [
      {
        name: 'Praia, Cabo Verde',
        latlng: {
          lat: 14.9177,
          lng: -23.5092,
        },
      },
    ],
    iso: 'CV',
  },
  {
    capitals: [
      {
        name: 'Sri Jayewardenepura Kotte, Sri Lanka',
        latlng: {
          lat: 6.9,
          lng: 79.9164,
        },
      },
      {
        name: 'Colombo, Sri Lanka',
        latlng: {
          lat: 6.9167,
          lng: 79.8333,
        },
      },
    ],
    iso: 'LK',
  },
  {
    capitals: [
      {
        name: 'Bridgetown, Barbados',
        latlng: {
          lat: 13.0975,
          lng: -59.6167,
        },
      },
    ],
    iso: 'BB',
  },
  {
    capitals: [
      {
        name: 'Moroni, Comoros',
        latlng: {
          lat: -11.7036,
          lng: 43.2536,
        },
      },
    ],
    iso: 'KM',
  },
  {
    capitals: [
      {
        name: 'Thimphu, Bhutan',
        latlng: {
          lat: 27.4833,
          lng: 89.6333,
        },
      },
    ],
    iso: 'BT',
  },
  {
    capitals: [
      {
        name: 'Nouméa, New Caledonia',
        latlng: {
          lat: -22.2625,
          lng: 166.4443,
        },
      },
    ],
    iso: 'NC',
  },
  {
    capitals: [
      {
        name: 'Honiara, Solomon Islands',
        latlng: {
          lat: -9.4333,
          lng: 159.95,
        },
      },
    ],
    iso: 'SB',
  },
  {
    capitals: [
      {
        name: 'Suva, Fiji',
        latlng: {
          lat: -18.1333,
          lng: 178.4333,
        },
      },
    ],
    iso: 'FJ',
  },
  {
    capitals: [
      {
        name: 'Ankara, Turkey',
        latlng: {
          lat: 39.93,
          lng: 32.85,
        },
      },
    ],
    iso: 'TR',
  },
  {
    capitals: [
      {
        name: 'Castries, Saint Lucia',
        latlng: {
          lat: 14.0167,
          lng: -60.9833,
        },
      },
    ],
    iso: 'LC',
  },
  {
    capitals: [
      {
        name: 'Cayenne, French Guiana',
        latlng: {
          lat: 4.933,
          lng: -52.33,
        },
      },
    ],
    iso: 'GF',
  },
  {
    capitals: [
      {
        name: 'São Tomé, Sao Tome And Principe',
        latlng: {
          lat: 0.3333,
          lng: 6.7333,
        },
      },
    ],
    iso: 'ST',
  },
  {
    capitals: [
      {
        name: 'Port-Vila, Vanuatu',
        latlng: {
          lat: -17.7333,
          lng: 168.3167,
        },
      },
    ],
    iso: 'VU',
  },
  {
    capitals: [
      {
        name: 'Hamilton, Bermuda',
        latlng: {
          lat: 32.2942,
          lng: -64.7839,
        },
      },
    ],
    iso: 'BM',
  },
  {
    capitals: [
      {
        name: 'Bandar Seri Begawan, Brunei',
        latlng: {
          lat: 4.9167,
          lng: 114.9167,
        },
      },
    ],
    iso: 'BN',
  },
  {
    capitals: [
      {
        name: 'Monaco, Monaco',
        latlng: {
          lat: 43.7396,
          lng: 7.4069,
        },
      },
    ],
    iso: 'MC',
  },
  {
    capitals: [
      {
        name: 'Port of Spain, Trinidad And Tobago',
        latlng: {
          lat: 10.6667,
          lng: -61.5167,
        },
      },
    ],
    iso: 'TT',
  },
  {
    capitals: [
      {
        name: 'Apia, Samoa',
        latlng: {
          lat: -13.8333,
          lng: -171.8333,
        },
      },
    ],
    iso: 'WS',
  },
  {
    capitals: [
      {
        name: 'Tarawa, Kiribati',
        latlng: {
          lat: 1.3382,
          lng: 173.0176,
        },
      },
    ],
    iso: 'KI',
  },
  {
    capitals: [
      {
        name: 'Oranjestad, Aruba',
        latlng: {
          lat: 12.5186,
          lng: -70.0358,
        },
      },
    ],
    iso: 'AW',
  },
  {
    capitals: [
      {
        name: 'Saint Helier, Jersey',
        latlng: {
          lat: 49.1858,
          lng: -2.11,
        },
      },
    ],
    iso: 'JE',
  },
  {
    capitals: [
      {
        name: 'Banjul, The Gambia',
        latlng: {
          lat: 13.4531,
          lng: -16.5775,
        },
      },
    ],
    iso: 'GM',
  },
  {
    capitals: [
      {
        name: 'Mamoudzou, Mayotte',
        latlng: {
          lat: -12.7871,
          lng: 45.275,
        },
      },
    ],
    iso: 'YT',
  },
  {
    capitals: [
      {
        name: 'Majuro, Marshall Islands',
        latlng: {
          lat: 7.0918,
          lng: 171.3802,
        },
      },
    ],
    iso: 'MH',
  },
  {
    capitals: [
      {
        name: 'Douglas, Isle Of Man',
        latlng: {
          lat: 54.15,
          lng: -4.4819,
        },
      },
    ],
    iso: 'IM',
  },
  {
    capitals: [
      {
        name: 'George Town, Cayman Islands',
        latlng: {
          lat: 19.2866,
          lng: -81.3744,
        },
      },
    ],
    iso: 'KY',
  },
  {
    capitals: [
      {
        name: 'Victoria, Seychelles',
        latlng: {
          lat: -4.6236,
          lng: 55.4544,
        },
      },
    ],
    iso: 'SC',
  },
  {
    capitals: [
      {
        name: 'Kingstown, Saint Vincent And The Grenadines',
        latlng: {
          lat: 13.1667,
          lng: -61.2333,
        },
      },
    ],
    iso: 'VC',
  },
  {
    capitals: [
      {
        name: 'Andorra la Vella, Andorra',
        latlng: {
          lat: 42.5,
          lng: 1.5,
        },
      },
    ],
    iso: 'AD',
  },
  {
    capitals: [
      {
        name: 'Saint John’s, Antigua And Barbuda',
        latlng: {
          lat: 17.1211,
          lng: -61.8447,
        },
      },
    ],
    iso: 'AG',
  },
  {
    capitals: [
      {
        name: 'Nuku‘alofa, Tonga',
        latlng: {
          lat: -21.1347,
          lng: -175.2083,
        },
      },
    ],
    iso: 'TO',
  },
  {
    capitals: [
      {
        name: 'Ashgabat, Turkmenistan',
        latlng: {
          lat: 37.95,
          lng: 58.3833,
        },
      },
    ],
    iso: 'TM',
  },
  {
    capitals: [
      {
        name: 'Nuuk, Greenland',
        latlng: {
          lat: 64.175,
          lng: -51.7333,
        },
      },
    ],
    iso: 'GL',
  },
  {
    capitals: [
      {
        name: 'Belmopan, Belize',
        latlng: {
          lat: 17.25,
          lng: -88.7675,
        },
      },
    ],
    iso: 'BZ',
  },
  {
    capitals: [
      {
        name: 'Roseau, Dominica',
        latlng: {
          lat: 15.3,
          lng: -61.3833,
        },
      },
    ],
    iso: 'DM',
  },
  {
    capitals: [
      {
        name: 'Basseterre, Saint Kitts And Nevis',
        latlng: {
          lat: 17.2983,
          lng: -62.7342,
        },
      },
    ],
    iso: 'KN',
  },
  {
    capitals: [
      {
        name: 'Tórshavn, Faroe Islands',
        latlng: {
          lat: 62,
          lng: -6.7833,
        },
      },
    ],
    iso: 'FO',
  },
  {
    capitals: [
      {
        name: 'Pago Pago, American Samoa',
        latlng: {
          lat: -14.274,
          lng: -170.7046,
        },
      },
    ],
    iso: 'AS',
  },
  {
    capitals: [
      {
        name: 'Valletta, Malta',
        latlng: {
          lat: 35.8978,
          lng: 14.5125,
        },
      },
    ],
    iso: 'MT',
  },
  // {
  //   name: 'Gaza, Gaza Strip',
  //   latlng: {
  //     lat: 31.5069,
  //     lng: 34.456,
  //   },
  //   }], iso: 'XG',
  // },
  {
    capitals: [
      {
        name: 'Grand Turk, Turks And Caicos Islands',
        latlng: {
          lat: 21.4664,
          lng: -71.136,
        },
      },
    ],
    iso: 'TC',
  },
  {
    capitals: [
      {
        name: 'Palikir, Federated States of Micronesia',
        latlng: {
          lat: 6.9178,
          lng: 158.185,
        },
      },
    ],
    iso: 'FM',
  },
  {
    capitals: [
      {
        name: 'Funafuti, Tuvalu',
        latlng: {
          lat: -8.5243,
          lng: 179.1942,
        },
      },
    ],
    iso: 'TV',
  },
  {
    capitals: [
      {
        name: 'Vaduz, Liechtenstein',
        latlng: {
          lat: 47.1397,
          lng: 9.5219,
        },
      },
    ],
    iso: 'LI',
  },
  {
    capitals: [
      {
        name: 'Lobamba, Swaziland',
        latlng: {
          lat: -26.4465,
          lng: 31.2064,
        },
      },
      {
        name: 'Mbabane, Swaziland',
        latlng: {
          lat: -26.3208,
          lng: 31.1617,
        },
      },
    ],
    iso: 'SZ',
  },
  {
    capitals: [
      {
        name: 'Avarua, Cook Islands',
        latlng: {
          lat: -21.207,
          lng: -159.771,
        },
      },
    ],
    iso: 'CK',
  },
  {
    capitals: [
      {
        name: 'Saint George’s, Grenada',
        latlng: {
          lat: 12.0444,
          lng: -61.7417,
        },
      },
    ],
    iso: 'GD',
  },
  {
    capitals: [
      {
        name: 'San Marino, San Marino',
        latlng: {
          lat: 43.932,
          lng: 12.4484,
        },
      },
    ],
    iso: 'SM',
  },
  // {
  //   name: 'Al Quds, West Bank',
  //   latlng: {
  //     lat: 31.7764,
  //     lng: 35.2269,
  //   },
  //   }], iso: 'XW',
  // },
  {
    capitals: [
      {
        name: 'Capitol Hill, Northern Mariana Islands',
        latlng: {
          lat: 15.2137,
          lng: 145.7546,
        },
      },
    ],
    iso: 'MP',
  },
  {
    capitals: [
      {
        name: 'Stanley, Falkland Islands (Islas Malvinas)',
        latlng: {
          lat: -51.7,
          lng: -57.85,
        },
      },
    ],
    iso: 'FK',
  },
  {
    capitals: [
      {
        name: 'Vatican City, Vatican City',
        latlng: {
          lat: 41.9033,
          lng: 12.4534,
        },
      },
    ],
    iso: 'VA',
  },
  {
    capitals: [
      {
        name: 'Alofi, Niue',
        latlng: {
          lat: -19.056,
          lng: -169.921,
        },
      },
    ],
    iso: 'NU',
  },
  {
    capitals: [
      {
        name: 'Basse-Terre, Guadeloupe',
        latlng: {
          lat: 16.0104,
          lng: -61.7055,
        },
      },
    ],
    iso: 'GP',
  },
  {
    capitals: [
      {
        name: 'Hagåtña, Guam',
        latlng: {
          lat: 13.4745,
          lng: 144.7504,
        },
      },
    ],
    iso: 'GU',
  },
  // {
  //   name: 'Marigot, Saint Martin',
  //   latlng: {
  //     lat: 18.0706,
  //     lng: -63.0847,
  //   },
  //   }], iso: 'MF',
  // },
  {
    capitals: [
      {
        name: 'Jamestown, Saint Helena, Ascension, And Tristan Da Cunha',
        latlng: {
          lat: -15.9251,
          lng: -5.7179,
        },
      },
    ],
    iso: 'SH',
  },
  {
    capitals: [
      {
        name: 'Brades, Montserrat',
        latlng: {
          lat: 16.7928,
          lng: -62.2106,
        },
      },
    ],
    iso: 'MS',
  },
  {
    capitals: [
      {
        name: 'Philipsburg, Sint Maarten',
        latlng: {
          lat: 18.0256,
          lng: -63.0492,
        },
      },
    ],
    iso: 'SX',
  },
  {
    capitals: [
      {
        name: 'Yaren, Nauru',
        latlng: {
          lat: -0.5477,
          lng: 166.9209,
        },
      },
    ],
    iso: 'NR',
  },
  {
    capitals: [
      {
        name: 'Pristina, Kosovo',
        latlng: {
          lat: 42.6633,
          lng: 21.1622,
        },
      },
    ],
    iso: 'XK',
  },
  {
    capitals: [
      {
        name: 'Gustavia, Saint Barthelemy',
        latlng: {
          lat: 17.8958,
          lng: -62.8508,
        },
      },
    ],
    iso: 'BL',
  },
  {
    capitals: [
      {
        name: 'Road Town, British Virgin Islands',
        latlng: {
          lat: 18.4167,
          lng: -64.6167,
        },
      },
    ],
    iso: 'VG',
  },
  {
    capitals: [
      {
        name: 'Ngerulmud, Palau',
        latlng: {
          lat: 7.5006,
          lng: 134.6242,
        },
      },
    ],
    iso: 'PW',
  },
  {
    capitals: [
      {
        name: 'Saint-Pierre, Saint Pierre And Miquelon',
        latlng: {
          lat: 46.7811,
          lng: -56.1764,
        },
      },
    ],
    iso: 'PM',
  },
  {
    capitals: [
      {
        name: 'The Valley, Anguilla',
        latlng: {
          lat: 18.2167,
          lng: -63.05,
        },
      },
    ],
    iso: 'AI',
  },
  {
    capitals: [
      {
        name: 'Mata-Utu, Wallis And Futuna',
        latlng: {
          lat: -13.2825,
          lng: -176.1736,
        },
      },
    ],
    iso: 'WF',
  },
  {
    capitals: [
      {
        name: 'Kingston, Norfolk Island',
        latlng: {
          lat: -29.0569,
          lng: 167.9617,
        },
      },
    ],
    iso: 'NF',
  },
  // {
  //   name: 'Longyearbyen, Svalbard',
  //   latlng: {
  //     lat: 78.2167,
  //     lng: 15.6333,
  //   },
  //   }], iso: 'XR',
  // },
  // {
  //   name: 'Tifariti, Morocco',
  //   latlng: {
  //     lat: 26.0928,
  //     lng: -10.6089,
  //   },
  //   }], iso: 'MA',
  // },
  {
    capitals: [
      {
        name: 'Adamstown, Pitcairn Islands',
        latlng: {
          lat: -25.0667,
          lng: -130.0833,
        },
      },
    ],
    iso: 'PN',
  },
  {
    capitals: [
      {
        name: 'Flying Fish Cove, Christmas Island',
        latlng: {
          lat: -10.4167,
          lng: 105.7167,
        },
      },
    ],
    iso: 'CX',
  },
  {
    capitals: [
      {
        name: 'King Edward Point, South Georgia And South Sandwich Islands',
        latlng: {
          lat: -54.2833,
          lng: -36.5,
        },
      },
    ],
    iso: 'GS',
  },
  {
    capitals: [
      {
        name: 'San Juan, Puerto Rico',
        latlng: {
          lat: 18.4037,
          lng: -66.0636,
        },
      },
    ],
    iso: 'PR',
  },
  {
    capitals: [
      {
        name: 'Charlotte Amalie, U.S. Virgin Islands',
        latlng: {
          lat: 18.3419,
          lng: -64.9332,
        },
      },
    ],
    iso: 'VI',
  },
];
