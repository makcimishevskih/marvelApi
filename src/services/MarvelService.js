class MarvelService {
    _Apikey = 'apikey=75aef817f3e41428518bd4e3781b08d1';
    _Apibase = 'https://gateway.marvel.com:443/v1/public/';
    _baseOffset = 660;

    getData = async (url) => {

        let response = await fetch(url).then(resp => {
            console.log(resp.status)
            if (!resp.ok || resp.status > 400) {
                throw new Error(`Do not fetching from ${url}, ${resp.status}`);
            }
            return resp;
        }).then(resp => resp.json())


        return response;
    }

    postData = async (url, data) => {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: data,
        })

        if (!response.ok) {
            throw new Error(`Dont fetch - ${url} with data - ${data}`)
        }
    }



    // Characters
    getAllCharacters = async (offset = this._baseOffset) => {
        const response = await this.getData(`${this._Apibase}characters?limit=9&offset=${offset}&${this._Apikey}`);
        return response.data.results.map(this._transformChar);
    }

    getCharacterById = async (id) => {
        const response = await this.getData(`${this._Apibase}characters/${id}?${this._Apikey}`);
        return this._transformChar(response.data.results[0]);
    }

    getComicsForCharacter = (id) => {
        return this.getData(`${this._Apibase}characters/${id}/comics?${this._Apikey}`);
    }




    // Comicses
    getAllComicses = () => {
        return this.getData(`${this._Apibase}comics?limit=8&offset=200&${this._Apikey}`);
    }
    getComicsById = (id) => {
        return this.getData(`${this._Apibase}comics/${id}?${this._Apikey}`);
    }


    // Random character
    getRandomChar = async () => {
        const id = Math.floor(Math.random() * (1011400 - 1011000) + 1011000);

        const response = await this.getData(`${this._Apibase}characters/${id}?${this._Apikey}`);
        return this._transformChar(response.data.results[0]);
    }

    _transformChar = (data) => {
        const comics = data.comics.items.map(el => el.name);

        return {
            description: this._transformText(data.description),
            id: data.id,
            name: data.name,
            thumbnail: `${data.thumbnail.path}.${data.thumbnail.extension}`,
            homepage: data.urls[0].url,
            wiki: data.urls[1].url,
            comics,
        }
    }

    _transformText = (text) => {
        return !text ? "Sorry...We don't have description for this hero..." : `${text.slice(0, 230)}...`;
    }

}

export default MarvelService;