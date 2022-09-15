

class Youtube {
    constructor(httpClient) {
        // axiosにbaseURL , paramsにApiKeyを設定
        this.youtube = httpClient;
    }

    // Postmanに登録したVideo API取得
    // fetchは昔のバージョンを対応しないので、axiosを使う
    async mostPopular() {
        // postManに設定した部分をaxiosのparamsに渡す
        const response = await this.youtube.get('videos', {
            params: {
                part: 'snippet',
                chart: 'mostPopular',
                maxResults: 25,
            },
        });
        return response.data.items;
    }

    async search(query) {
        const response = await this.youtube.get('search', {
            params: {
                part: 'snippet',
                chart: 'mostPopular',
                maxResults: 25,
                type: 'video',
                q: query,
            },
        });
        return response.data.items.map(item => ({...item, id: item.id.videoId}));
    }
}

export default Youtube;
