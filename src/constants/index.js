export const options = {
  method: "GET",
  url: "https://flight-radar1.p.rapidapi.com/flights/list-in-boundary",
  params: {
    bl_lat: "34.30819532640843",
    bl_lng: "25.38003630680674",
    tr_lat: "42.24754810117865",
    tr_lng: "44.34023052023215",
    limit: "300",
  },
  headers: {
    "x-rapidapi-key": "a01f8c9863msh4496ae4728b9bfbp1e00f2jsn1c873837ceb9",
    "x-rapidapi-host": "flight-radar1.p.rapidapi.com",
  },
};

export const detailOptions = {
  headers: {
    "x-rapidapi-key": "a01f8c9863msh4496ae4728b9bfbp1e00f2jsn1c873837ceb9",
    "x-rapidapi-host": "flight-radar1.p.rapidapi.com",
  },
};
