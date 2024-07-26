import dotenv from 'dotenv'
dotenv.config();

const api_url = import.meta.env.VITE_APP_API_URL
const ws_url = import.meta.env.VITE_APP_WS_URL
const hunter_api_key = import.meta.env.VITE_APP_HUNTER_API_KEY
export {api_url,ws_url,hunter_api_key}
