#! /bin/bash

DIST="./dist"
PUBLIC="./app/public"
PUBLIC_ARTICLE="./app/public/article"
PUBLIC_WORK="./app/public/work"

CYAN="\033[36m"
GREEN="\033[32m"
WHITE="\033[0m"

echo -e "${CYAN}Start build:\n"

echo -e "${GREEN}Create ${PUBLIC} directory if it does not exist...${WHITE}"
echo -e "> [-d ${PUBLIC} ] || mkdir ${PUBLIC}"
[ -d $PUBLIC ] || mkdir $PUBLIC
echo -e "> [-d ${PUBLIC_ARTICLE} ] || mkdir ${PUBLIC_ARTICLE}"
[ -d $PUBLIC_ARTICLE ] || mkdir $PUBLIC_ARTICLE
echo -e "> [-d ${PUBLIC_WORK} ] || mkdir ${PUBLIC_WORK}\n"
[ -d $PUBLIC_WORK ] || mkdir $PUBLIC_WORK

echo -e "${GREEN}Create ${DIST} directory if it does not exist...${WHITE}"
echo -e "> [-d ${DIST} ] || mkdir ${DIST}\n"
[ -d $DIST ] || mkdir $DIST

echo -e "\n${GREEN}Publish the templates...${WHITE}"
echo "> ts-node ./tools/publish.ts page"
ts-node ./tools/publish.ts page
echo "> ts-node ./tools/publish.ts article"
ts-node ./tools/publish.ts article
echo "> ts-node ./tools/publish.ts work"
ts-node ./tools/publish.ts work

echo -e "\n${GREEN}Reset distribution directory...${WHITE}"
echo "> rm -r ${DIST}/*"
rm -r $DIST/*

echo -e "\n${GREEN}Copy static files to distribution directory...${WHITE}"
echo "> cp -r ./app/static/* ${DIST}/"
cp -r ./app/static/* $DIST/

echo -e "\n${GREEN}Run parcel...${WHITE}"
echo -e "> ./node_modules/.bin/parcel build ./app/public/index.html -d ${DIST}\n"
./node_modules/.bin/parcel build ./app/public/index.html -d $DIST

echo -e "\n${CYAN}Done!${WHITE}"
