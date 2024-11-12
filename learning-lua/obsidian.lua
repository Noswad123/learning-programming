

local function get_data_from_newest()
	local files = io.popen('ls '..directory)
	if files ~=nil then
		for file_name in files:lines()do
			print(file_name)
		end
		files:close()
	end
end
local peristed_data = get_data_from_newest()

local file = io.open(file_path, 'r')
if file == nil then
	print("it's empty")
	local template_contents = io.open(template, 'r')
	if template_contents ~= nil then
		local content = template_contents:lines('l')
		local new_file = {}
		for line in template_contents:lines() do
			table.insert(new_file, content)
			if linesub(1,9)= "# Current" do
			
			end
		end
	end
	local write_file = io.open(directory..date, 'w')
	write_file:write(line)

else
	print("it already exists")
	-- print(file:read('a'))
end

local function read_lines(file_path)
	local file, err = io.open(file_path, "r")
	if not file then
			return nil, err
	end

	local lines = {}
	for line in file:lines() do
			table.insert(lines, line)
	end

	file:close()
	return lines
end

local function write_lines(file_path, lines)
	local file, err = io.open(file_path, "w")
	if not file then
			return false, err
	end

	for _, line in ipairs(lines) do
			file:write(line .. "\n")
	end

	file:close()
	return true
end

local function insert_text(lines, trigger, text_to_insert)
	local insert_done = false
	local modified_lines = {}

	for _, line in ipairs(lines) do
			if not insert_done and line:sub(1, #trigger) == trigger then
					table.insert(modified_lines, text_to_insert)
					insert_done = true
			end
			table.insert(modified_lines, line)
	end

	return modified_lines
end


-- Specify the file path, the trigger, and the text to insert
local date=os.date("%Y-%m-%d", os.time())
local directory="/Users/jambot/Projects/Darkness/pages/Agenda/Daily/"
local template="/Users/jambot/Projects/Darkness/pages/Agenda/Important Lists/Template List/Daily Template.md"
local file_path=directory..date..".md";

local file_path = "path/to/your/file.txt"
local trigger = "# Current"
local text_to_insert = "Text to insert"

-- Check if file exists
local exists = read_lines(directory..date)

if exists == nil then
	local latest_file_content = read_lines()
	-- get old file
	-- if it exists
		-- extract contents
	-- if not create new_file with just the template_contents
	-- Read the file lines
	local lines, err = read_lines(template)
	if not lines then
		print("Error reading file:", err)
		return
	end
	-- Insert the text and get the modified lines
	local modified_lines = insert_text(lines, trigger, text_to_insert)

	-- Write the modified lines back to the file
	local success, err = write_lines(file_path, modified_lines)
	if not success then
		print("Error writing file:", err)
	end
end


