#! /bin/bash

DIST="./dist"
CYAN="\033[36m"
GREEN="\033[32m"
WHITE="\033[0m"

echo -e "${CYAN}Start build:\n"

echo -e "${GREEN}Create ${DIST} directory if it does not exist...${WHITE}"
echo -e "> [-d ${DIST} ] || mkdir ${DIST}\n"
[ -d $DIST ] || mkdir $DIST

echo -e "${GREEN}Run node-sass...${WHITE}"
echo -e "> ./node_modules/node-sass/bin/node-sass ./app/src/scss --output ./app/src/css\n"
./node_modules/node-sass/bin/node-sass ./app/src/scss --output ./app/src/css

echo -e "\n${GREEN}Reset distribution directory...${WHITE}"
echo "> rm -r ${DIST}/*"
rm -r $DIST/*

echo -e "\n${GREEN}Copy static files to distribution directory...${WHITE}"
echo "> cp ./app/static/robots.txt ${DIST}/robots.txt"
cp ./app/static/robots.txt $DIST/robots.txt

echo -e "\n${GREEN}Run parcel...${WHITE}"
echo -e "> parcel build ./app/index.html -d ${DIST}\n"
parcel build ./app/index.html -d $DIST

echo -e "\n${CYAN}Done!${WHITE}"