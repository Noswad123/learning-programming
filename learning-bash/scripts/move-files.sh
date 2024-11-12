#!/bin/bash

# Function to recursively search for files in a directory
search_files() {
  local dir=$1
  local file
  # Loop through each file in the directory
  for file in "$dir"/*; do
    if [[ -d "$file" ]]; then
      # If the file is a directory, recursively call the function
      search_files "$file"
    elif [[ -f "$file" && "${file##*.}" == "ts" ]]; then
      # If the file is a .ts file, clear the contents and rename it
      echo "" > "$file"
      mv "$file" "${file%.*}.py"
    fi
  done
}

# Get the absolute path of the script's directory
project_directory=$(realpath "$(dirname "$1")")

# Call the function with the directory path as an argument
search_files "$project_directory/python"