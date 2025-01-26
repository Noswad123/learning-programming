-- comment

-- variables
local number = 5

local truth, lies = true, false
local nothing = nil

local function hello(name)
	print("hello!", name)
end

local greet = function(name)
	print("hello!", name)
end

greet("jamal")

-- tables
-- same struture used for maps and lists
local list = { "fist", 2, false, hello }

-- list[1]

-- threads
-- userdata
-- used for c libraries

-- setmetatable

if truth then
	hello("jamal")
end

-- files are just lua functions

--- these are the same
function MyTable.something(Self, ...) end
function MyTable:something(...) end

-- keymap to run everything in the currect file
vim.keymap.set("n", "<space><space>x", "<cmd>source %<CR>")

vim.keymap.set("n", "<space>x", ":.lua<CR>")

vim.keymap.set("v", "<space>x", ":lua<CR>")
