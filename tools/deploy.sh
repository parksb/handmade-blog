#! /bin/bash

DIST="dist"
CYAN="\033[36m"
GREEN="\033[32m"
WHITE="\033[0m"

echo -e "${CYAN}Deploy to ./${DIST}:\n"

echo -e "${GREEN}Run build script...${WHITE}"
echo -e "${WHITE}> ./tools/build.sh"
./tools/build.sh

echo -e "${WHITE}> cd ./${DIST}"
cd ./$DIST

echo -e "> git status -s\n"
git status -s
echo ""

echo -e "${GREEN}Stage the all files...${WHITE}"
echo "> git add ."
git add .
echo -e "> git status -s\n"
git status -s
echo ""

DATE=$(date +"%Y-%m-%d %H:%M:%S")
while true; do
  read -p "Do you wish to commit the staged files? (yes/no) " yn
  case $yn in
    [Yy]* ) git commit -m "dist: ${DATE}"; break;;
    [Nn]* ) git reset .; exit;;
  esac
done

echo -e "${GREEN}Use subtree push to gh-pages branch...${WHITE}"
echo -e "${WHITE}> cd ../ && git subtree push --prefix ${DIST} origin gh-pages"
cd ../ && git subtree push --prefix $DIST origin gh-pages

echo -e "\n${CYAN}Done!"