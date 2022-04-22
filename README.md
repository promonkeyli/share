### This project was generated with [CRA](https://react.docschina.org/) version 17.0.2

### 🍀Project Info
> Project Name: Share
> Project function: share front-end knowledge & tools & personal life
> Deploy website：promonkeyli.top

### 🍀Project working
> npm run start: start-up project(default port: 3000)
> npm run build: build project

### 🍀Technology stack
- React: version 17.0.2
- TypeScript: version 4.5.5
- Less: built-in react

### 🍀Deploy
> automation deploy: use github Actions

### 🍀workflows info
|             workflows               |    execute timing    |                            function                          |
|  :-------------------------------:  |  :---------------:   |   :------------------------------------------------------:   |
|            build-images             | pull_request(master) |                    set images separately                     |
|  deploy docker images include code  | pull_request(master) |              set images includes source code                 |
|             push-code               |     push(develop)    |  modify docker external data volume (automation fast deploy) |
