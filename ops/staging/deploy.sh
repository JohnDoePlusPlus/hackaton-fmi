#!/bin/bash

container_tag=$1
aws_region=$2
aws_registry_id=$3

# Login to ECR
sudo $(aws ecr get-login --region $aws_region --registry-ids $aws_registry_id --no-include-email)

sudo docker-compose down

# Remove any other stopped containers
sudo docker rm $(sudo docker ps -qa --no-trunc --filter "status=exited") || true

if [ ! -f .env ]; then
    touch .env
    echo "FRONTEND_TAG=$container_tag" >> .env
    echo "BACKEND_TAG=" >> .env
    echo "NGINX_TAG=" >> .env
else
    sed -i "s/^FRONTEND_TAG=.*/FRONTEND_TAG=$container_tag/" .env
fi

sudo docker-compose up -d

sudo docker image prune -a -f