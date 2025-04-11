#!/bin/bash

project_directory=$(realpath)
python_src="${project_directory}/src/python/src/"
javascript_src="${project_directory}/src/javascript/src/"

echo $python_src
echo $javascript_src
# Create missing folders/files in javascript/src
find "$python_src" -type d | while IFS= read -r dir; do
    # Convert directory name from underscores to hyphens
    js_dir="${dir/$python_src/$javascript_src}"
    js_dir="${js_dir//_/-}"

    # Create directory if it doesn't exist
    if [[ ! -d "$js_dir" ]]; then
        mkdir -p "$js_dir"
        echo "Created directory: $js_dir"
    fi

    # Compare files in the directory
    find "$dir" -maxdepth 1 -type f | while IFS= read -r file; do
        # Convert file name from underscores to hyphens
        js_file="${file/$python_src/$javascript_src}"
        js_file="${js_file//_/}"

        # Create file if it doesn't exist
        if [[ ! -f "$js_file" ]]; then
            touch "$js_file"
            echo "Created file: $js_file"
        fi
    done
done

# Create missing folders/files in python/src
find "$javascript_src" -type d | while IFS= read -r dir; do
    # Convert directory name from hyphens to underscores
    py_dir="${dir/$javascript_src/$python_src}"
    py_dir="${py_dir//-/_}"

    # Create directory if it doesn't exist
    if [[ ! -d "$py_dir" ]]; then
        mkdir -p "$py_dir"
        echo "Created directory: $py_dir"
    fi

    # Compare files in the directory
    find "$dir" -maxdepth 1 -type f | while IFS= read -r file; do
        # Convert file name from hyphens to underscores
        py_file="${file/$javascript_src/$python_src}"
        py_file="${py_file//-/_}"

        # Create file if it doesn't exist
        if [[ ! -f "$py_file" ]]; then
            touch "$py_file"
            echo "Created file: $py_file"
        fi
    done
done