import { useHttp } from "../hooks/http.hook";

const useMarvelService = () => {
  const { loader, error, request, clearError } = useHttp();

  const _Apikey = "apikey=75aef817f3e41428518bd4e3781b08d1";
  const _Apibase = "https://gateway.marvel.com:443/v1/public/";
  const _baseOffset = 660;

  // Characters

  const getAllChars = async (name) => {
    const response = await request(
      `${_Apibase}characters?name=${name}&${_Apikey}`
    );

    return response.data.results.map(_transformChar);
  };

  const getAllCharactersData = async (offset = _baseOffset) => {
    const response = await request(
      `${_Apibase}characters?limit=9&offset=${offset}&${_Apikey}`
    );
    return response.data.results.map(_transformChar);
  };

  const getCharacterByIdData = async (id) => {
    const response = await request(`${_Apibase}characters/${id}?${_Apikey}`);
    return _transformChar(response.data.results[0]);
  };

  const getRandomCharacter = async () => {
    const id = Math.floor(Math.random() * (1011400 - 1011000) + 1011000);

    const response = await request(`${_Apibase}characters/${id}?${_Apikey}`);

    if (!response) {
      return await getRandomCharacter();
    }

    return _transformChar(response.data.results[0]);
  };

  // Comicses
  const getAllComicsData = (offset = 200) => {
    return request(`${_Apibase}comics?limit=8&offset=${offset}&${_Apikey}`);
  };
  const getComicsByIdData = async (id) => {
    const response = await request(`${_Apibase}comics/${id}?${_Apikey}`);
    return _transformComics(response.data.results[0]);
  };

  const _transformComics = (comics) => {
    return {
      title: comics.title,
      description: _transformText(comics.description),
      id: comics.id,
      thumbnail: `${comics.images[0].path}.${comics.images[0].extension}`,
      price: `${comics.prices[0].price}$`,
      pages: `${comics.pageCount}pages`,
    };
  };

  const _transformChar = (data) => {
    const comics = data.comics.items.map((el) => el.name);

    return {
      description: _transformText(data.description),
      id: data.id,
      title: data.name,
      thumbnail: `${data.thumbnail.path}.${data.thumbnail.extension}`,
      homepage: data.urls[0].url,
      wiki: data.urls[1].url,
      comics,
    };
  };

  const _transformText = (text) => {
    return !text
      ? "Sorry...We don't have description for this one..."
      : `${text.slice(0, 230)}...`;
  };

  return {
    getAllChars,
    getRandomCharacter,
    getAllCharactersData,
    getCharacterByIdData,
    getAllComicsData,
    getComicsByIdData,
    clearError,
    loader,
    error,
  };
};

export default useMarvelService;
