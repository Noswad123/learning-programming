courses = ['History', 'Math', 'Physics', 'CompSci']

print(courses)

# up to but not including (slicing)
print(courses[0:2])
courses.append('Art')

print(courses)

moar_courses = ['PE', 'English']

courses.extend(moar_courses)

# sorted(courses) returns a copy
courses.sort(reverse=True)

print(courses)
isMath = 'Math' in courses

f_string = f'Is Math in here {isMath}'

print(f_string)

# join lists
rejoined_courses = ' - '.join(courses)

# split lists
split_courses = rejoined_courses.split("-")


# tuple is like lists but they are immutable
tuple_course = ('History', 'Math', 'Physics', 'CompSci')

# sets is like lists but they are immutable
empty_set = set()
set_course = {'History', 'Math', 'Physics', 'CompSci'}

# dictionaries
student = {'name': 'Jamal', 'age': 37}
student.get('name')

# print number of keys
for key, value in student.items():
	print(key, value)
