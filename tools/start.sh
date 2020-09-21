#! /bin/bash

PUBLIC="./app/public"
PUBLIC_ARTICLE="./app/public/article"
PUBLIC_WORK="./app/public/work"

CYAN="\033[36m"
GREEN="\033[32m"
WHITE="\033[0m"

echo -e "${CYAN}Start local server:\n"

echo -e "${GREEN}Create ${PUBLIC} directory if it does not exist...${WHITE}"
echo -e "> [-d ${PUBLIC} ] || mkdir ${PUBLIC}"
[ -d $PUBLIC ] || mkdir $PUBLIC
echo -e "> [-d ${PUBLIC_ARTICLE} ] || mkdir ${PUBLIC_ARTICLE}"
[ -d $PUBLIC_ARTICLE ] || mkdir $PUBLIC_ARTICLE
echo -e "> [-d ${PUBLIC_WORK} ] || mkdir ${PUBLIC_WORK}\n"
[ -d $PUBLIC_WORK ] || mkdir $PUBLIC_WORK

echo -e "${GREEN}Create server directory if it does not exist...${WHITE}"
echo -e "> [-d server ] || mkdir server\n"
[ -d server ] || mkdir server

echo -e "\n${GREEN}Publish the templates...${WHITE}"
echo "> ts-node ./tools/publish.ts page"
ts-node ./tools/publish.ts page
echo "> ts-node ./tools/publish.ts article"
ts-node ./tools/publish.ts article
echo "> ts-node ./tools/publish.ts work"
ts-node ./tools/publish.ts work

echo -e "\n${GREEN}Reset server directory...${WHITE}"
echo "> rm -r ./server/*"
rm -r ./server/*

echo -e "\n${GREEN}Run parcel...${WHITE}"
echo -e "> parcel serve ./app/public/index.html -d ./server --open\n"
parcel serve ./app/public/index.html -d ./server --open
