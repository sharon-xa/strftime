#!/bin/bash

check_version_change() {
  read -p "Have you changed the version number in the package.json file? (yes/no): " response

  case "$response" in
    [yY][eE][sS]|[yY])
      echo "Great! Make sure to commit the changes."
      ;;
    [nN][oO]|[nN])
      echo "Please update the version number in the package.json file before proceeding."
      exit 1
      ;;
    *)
      echo "Invalid response. Please answer yes or no."
      check_version_change
      ;;
  esac
}

check_version_change

echo ""
echo "Building the library..."
npm run compile


echo ""
echo "Publishing the library..."
cd dist/
npm publish

exit 0
