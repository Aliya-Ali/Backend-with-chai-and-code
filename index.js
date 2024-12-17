// console.log("Backend with chai aur code")
require('dotenv').config()
const express = require('express')

const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

const githubData ={
    "login": "Aliya-Ali",
    "id": 107311375,
    "node_id": "U_kgDOBmVxDw",
    "avatar_url": "https://avatars.githubusercontent.com/u/107311375?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/Aliya-Ali",
    "html_url": "https://github.com/Aliya-Ali",
    "followers_url": "https://api.github.com/users/Aliya-Ali/followers",
    "following_url": "https://api.github.com/users/Aliya-Ali/following{/other_user}",
    "gists_url": "https://api.github.com/users/Aliya-Ali/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/Aliya-Ali/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/Aliya-Ali/subscriptions",
    "organizations_url": "https://api.github.com/users/Aliya-Ali/orgs",
    "repos_url": "https://api.github.com/users/Aliya-Ali/repos",
    "events_url": "https://api.github.com/users/Aliya-Ali/events{/privacy}",
    "received_events_url": "https://api.github.com/users/Aliya-Ali/received_events",
    "type": "User",
    "user_view_type": "public",
    "site_admin": false,
    "name": null,
    "company": null,
    "blog": "",
    "location": null,
    "email": null,
    "hireable": null,
    "bio": null,
    "twitter_username": null,
    "public_repos": 21,
    "public_gists": 0,
    "followers": 12,
    "following": 4,
    "created_at": "2022-06-11T13:52:33Z",
    "updated_at": "2024-11-28T15:54:40Z"
  }

app.get('/github',(req,res) =>{
    res.json(githubData)
})

app.get('/twitter', (req, res)=>{
    res.send('hiteshoot')
})

app.get('/login', (req, res)=>{
    res.send('<h1>please login at chai aur codee </h1>')
})

app.get('/youtube', (req, res)=>{
    res.send("<h2> Chai aur code</h2>")
})

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// })
app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${port}`)
  })