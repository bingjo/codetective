FROM ubuntu:20.04
ENV DEBIAN_FRONTEND=noninteractive
RUN mkdir backend
COPY ./ /backend
RUN apt-get update && apt-get install -y -q \
    apt-utils \
    python3 \
    python3-pip \
    wine-stable \
    dialog \
   	&& /bin/bash -c "source backend/bin/activate && pip3 install -r backend/requirements.txt" \
    && pip3 install gdown \
    && cd backend/lib/python3.8/site-packages/tensorflow/python/ \
    && gdown https://drive.google.com/u/0/uc?id=1v7sF29u28myrL72SA_Z4ObSlymlYtqc2
    
