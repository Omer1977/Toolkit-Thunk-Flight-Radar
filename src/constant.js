export const options = {
    method: 'GET',
    url: 'https://flight-radar1.p.rapidapi.com/flights/list-in-boundary',
    params: {
      bl_lat: '34.510962',
      bl_lng: '19.355648',
      tr_lat: '42.433872',
      tr_lng: '28.167868',
      limit: '300'
    },
    headers: {
      'X-RapidAPI-Key': '2ee14f57d6mshd3977ce4e513e62p10f679jsn6fa1ca938602',
      'X-RapidAPI-Host': 'flight-radar1.p.rapidapi.com'
    }
  };

  export const options2 = {headers: {
    'X-RapidAPI-Key': '2ee14f57d6mshd3977ce4e513e62p10f679jsn6fa1ca938602',
    'X-RapidAPI-Host': 'flight-radar1.p.rapidapi.com'
  }}