import axios from "axios"

const BASE_URL="http://localhost:5000/api"
const TOKEN="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyMmMxNjAzMzAzMWZkNDNkZmRjN2RkNCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0NzA1ODQyMSwiZXhwIjoxNjQ3MzE3NjIxfQ.5qaxTsCnJqSzLz-N0h9M4nqOxq8_j-PGSOwxehtWWuU"
export const publicRequest=axios.create({
    baseURL:BASE_URL,
})


export const userRequest=axios.create({
    baseURL:BASE_URL,
    header:{token:`Bearer ${TOKEN}` }
})

 