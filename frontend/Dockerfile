FROM ubuntu:20.04
ENV DEBIAN_FRONTEND=noninteractive
RUN mkdir frontend
COPY ./ /frontend
RUN apt update && apt install -y -q \
    nodejs \
    npm
    
