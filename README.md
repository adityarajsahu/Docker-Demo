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
