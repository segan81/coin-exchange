const url = "https://api.coincap.io/v2";

// function getAssets() {
//   return fetch(`${url}/assets?limit=20`)
//     .then(res => res.json())
//     .then(res => res.data);
// }
/** Obtiene la lista top 20 de cryptocoins */
const getAssets = async () => {
  let res = await fetch(`${url}/assets?limit=20`);
  res = await res.json();
  return await res.data;
}

/** Obtiene el detalle de la cryptocoin seleccionada */
const getAsset = async coin => {
  let res = await fetch(`${url}/assets/${coin}`);
  res = await res.json();
  return await res.data;
}

/** Obtiene el historial de la cryptocoin seleccionada */
const getAssetHistory = async coin => {
  let dateNow = new Date();
  let dateEnd = dateNow.getTime();
  dateNow.setDate(dateNow.getDate() - 1);
  let dateStart = dateNow.getTime();
  let res = await fetch(
    `${url}/assets/${coin}/history?interval=h1&start=${dateStart}&end=${dateEnd}`
  );
  res = await res.json();
  return await res.data;
}

/** */
const getMarkets = async coin => {
  let res = await fetch(`${url}/assets/${coin}/markets?limit=5`);
  res = await res.json();
  return await res.data;
}

/** */
const getExchange = async id => {
  let res = await fetch(`${url}/exchanges/${id}`);
  res = await res.json();
  return await res.data;
}

export default {
  getAssets,
  getAsset,
  getAssetHistory,
  getExchange,
  getMarkets
};
