#! /bin/bash

DIST="dist"
DATE=$(date +"%Y-%m-%d %H:%M:%S")

CYAN="\033[36m"
GREEN="\033[32m"
WHITE="\033[0m"
RED="\033[31m"

echo -e "${CYAN}Deploy to ./${DIST}:\n"

echo -e "${GREEN}Run build script...${WHITE}"
echo -e "${WHITE}> ./tools/build.sh"
./tools/build.sh

echo -e "${WHITE}> git checkout ./app/static/sitemap.xml"
git checkout ./app/static/sitemap.xml

if [[ $(git status -s) == "" ]]; then
  echo -e "${GREEN}Modify gitignore list temporarily...${WHITE}"

  if [[ "$OSTYPE" == "darwin"* ]]; then
    echo "> sed -i "" "/${DIST}/d" ./.gitignore"
    sed -i "" "/$DIST/d" ./.gitignore
  else
    echo "> sed -i"" "/${DIST}/d" ./.gitignore"
    sed -i"" "/$DIST/d" ./.gitignore
  fi

  echo -e "\n${GREEN}Stage and commit the all files...${WHITE}"
  echo "> git add ."
  git add .
  echo "> git commit -m \"dist: ${DATE}\""
  git commit -m "dist: $DATE"

  echo -e "\n${GREEN}Use subtree push to gh-pages branch...${WHITE}"
  echo -e "${WHITE}> cd git push origin \`git subtree split --prefix ${DIST} master\`:gh-pages --force"
  git push origin `git subtree split --prefix $DIST master`:gh-pages --force

  echo -e "\n${GREEN}Reset the temporary changes...${WHITE}"
  echo -e "${WHITE}> git reset HEAD~"
  git reset HEAD~
  echo -e "${WHITE}> git checkout .gitignore"
  git checkout .gitignore
else
  echo -e "\n${RED}Failed to deploy: Need clean working directory to deploy.\n"
  exit 1
fi

echo -e "\n${CYAN}Done!"
