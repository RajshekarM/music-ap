import axios from "axios";

axios.defaults.baseURL = 'https://api.spotify.com/v1';

const access_token = 'BQBYl7kmghigbWCOemkMIn-liiJcUdN6yveMiasSvGVR-KukqIg1_d-RNbV9ak1ksqJdG_IJZ6uz3seuvK-4qB966mw8n34s9A7Fs831zc3hDRbkrPwOWVXfARFFbVit6TYiToK13z4sZKx56QpAwkhK70LDQZ6v9hCcbLaiYZ-OBxYZ3_c29mgdqv1-nGcOCFeZ2bIVZNCNKVNE9Q';
axios.defaults.headers['Authorization'] = `Bearer ${access_token}`;
axios.defaults.headers['Content-Type'] = 'application/json';

export const getUserProfile =  ()=>axios.get('/me');



