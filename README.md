# Docker-Demo

### To build a Docker Image

```
docker build -t docker_image_name
```

### Run commands within Docker Image

```
docker run -it --rm -v "path_to_root_directory":/app docker_image_name user_command
```

### Run the application within the Docker Image with port binding

```
docker run -it --rm -p 3000:3000 docker_image_name
```

### Command to create a network

```
docker network create -d bridge network_name
```

### Command to run MongoDB container as a database

```
docker run --rm -d -v database_name:/data/db --name mongo_server_name --network network_name mongo
```
