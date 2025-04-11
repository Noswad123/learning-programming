#!/bin/bash

# Get the absolute path of the script's directory
project_directory=$(realpath "$(dirname "$1")")


echo "Enter a file name:"
read file_name


echo "Creating src file"
mkdir "$project_directory/javascript/src/$file_name"
touch "$project_directory/javascript/src/$file_name/$file_name.ts"

echo "Creating test file"
mkdir "$project_directory/javascript/test/$file_name"
test_path="$project_directory/javascript/test/$file_name/$file_name.spec.ts"
touch "$test_path"
echo "import {assert} from 'chai';" >> $test_path

echo "Folders and files created successfully!"