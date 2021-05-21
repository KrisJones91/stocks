const { AppState } = require("../AppState");
const { logger } = require("../utils/Logger");
const { stocksApi } = require("./AxiosService");


class StocksService{
    async getStocks(){
        try {
            const res = await stocksApi.get('8c09c297e1mshabd35c69bfdc1a6p117713jsn74bb91da97e9')
            logger.log(res.data)
            AppState.stocks = res.data
        } catch (error) {
            logger.log(error)
        }
    }
}