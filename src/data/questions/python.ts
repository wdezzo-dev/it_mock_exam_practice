import { Question } from '../../types';

export const pythonQuestions: Question[] = [
  {
    id: 1,
    subject: 'python',
    questionText: 'Python is a ______ language.',
    options: ['Compiled only', 'High-level and interpreted', 'Assembly', 'Machine language'],
    correctAnswerIndex: 1,
    explanation: 'Python is a high-level interpreted programming language.'
  },
  {
    id: 2,
    subject: 'python',
    questionText: 'Which function displays output?',
    options: ['input()', 'display()', 'print()', 'echo()'],
    correctAnswerIndex: 2,
    explanation: 'print() displays output on the screen.'
  },
  {
    id: 3,
    subject: 'python',
    questionText: 'Which is a valid variable name?',
    options: ['2age', 'student name', 'student_name', 'class'],
    correctAnswerIndex: 2,
    explanation: 'Variable names cannot start with numbers, contain spaces, or use reserved keywords like class.'
  },
  {
    id: 4,
    subject: 'python',
    questionText: 'Which data type stores True or False?',
    options: ['int', 'bool', 'float', 'str'],
    correctAnswerIndex: 1,
    explanation: 'Boolean values (bool) are either True or False.'
  },
  {
    id: 5,
    subject: 'python',
    questionText: 'What is the output of type(5)?',
    options: ['float', 'int', 'number', 'integer'],
    correctAnswerIndex: 1,
    explanation: 'type(5) returns <class "int">.'
  },
  {
    id: 6,
    subject: 'python',
    questionText: 'Which function converts a string to an integer?',
    options: ['str()', 'float()', 'int()', 'bool()'],
    correctAnswerIndex: 2,
    explanation: 'int() converts compatible strings or numbers to integers.'
  },
  {
    id: 7,
    subject: 'python',
    questionText: 'What does input() return?',
    options: ['int', 'float', 'string', 'boolean'],
    correctAnswerIndex: 2,
    explanation: 'input() always returns a string unless explicitly converted.'
  },
  {
    id: 8,
    subject: 'python',
    questionText: 'Which operator performs exponentiation?',
    options: ['^', '**', '//', '%'],
    correctAnswerIndex: 1,
    explanation: '** performs exponentiation (power in Python).'
  },
  {
    id: 9,
    subject: 'python',
    questionText: 'Which operator performs floor division?',
    options: ['/', '%', '//', '**'],
    correctAnswerIndex: 2,
    explanation: '// performs floor (integer) division.'
  },
  {
    id: 10,
    subject: 'python',
    questionText: 'Which comparison operator means "not equal"?',
    options: ['<>', '!=', '==', '='],
    correctAnswerIndex: 1,
    explanation: '!= checks whether two values are different.'
  },
  {
    id: 11,
    subject: 'python',
    questionText: 'Which logical operator returns True only if both conditions are True?',
    options: ['or', 'and', 'not', 'xor'],
    correctAnswerIndex: 1,
    explanation: 'and returns True only if both conditions evaluate to True.'
  },
  {
    id: 12,
    subject: 'python',
    questionText: 'Which membership operator checks if an item exists?',
    options: ['is', 'in', '==', 'has'],
    correctAnswerIndex: 1,
    explanation: 'in checks membership in a sequence or collection.'
  },
  {
    id: 13,
    subject: 'python',
    questionText: 'Which operator compares object identity?',
    options: ['==', 'equals', 'is', 'in'],
    correctAnswerIndex: 2,
    explanation: 'is compares whether two variables reference the exact same object in memory.'
  },
  {
    id: 14,
    subject: 'python',
    questionText: 'Negative index -1 returns',
    options: ['First character', 'Middle character', 'Last character', 'Error'],
    correctAnswerIndex: 2,
    explanation: 'Index -1 accesses the last item in a Python sequence.'
  },
  {
    id: 15,
    subject: 'python',
    questionText: 'Which method converts text to uppercase?',
    options: ['capitalize()', 'upper()', 'title()', 'case()'],
    correctAnswerIndex: 1,
    explanation: 'upper() converts all characters in a string to uppercase.'
  },
  {
    id: 16,
    subject: 'python',
    questionText: 'Which method removes whitespace from both ends?',
    options: ['trim()', 'remove()', 'strip()', 'clean()'],
    correctAnswerIndex: 2,
    explanation: 'strip() removes leading and trailing whitespace.'
  },
  {
    id: 17,
    subject: 'python',
    questionText: 'Modern Python string formatting uses',
    options: ['printf', 'format only', 'f-strings', 'sprintf'],
    correctAnswerIndex: 2,
    explanation: 'f-strings (f"...") are the modern, readable string formatting method in Python 3.6+.'
  },
  {
    id: 18,
    subject: 'python',
    questionText: 'Which function returns the absolute value?',
    options: ['round()', 'abs()', 'max()', 'pow()'],
    correctAnswerIndex: 1,
    explanation: 'abs() returns the absolute (positive) value of a number.'
  },
  {
    id: 19,
    subject: 'python',
    questionText: 'Which keyword starts a conditional statement?',
    options: ['when', 'switch', 'if', 'case'],
    correctAnswerIndex: 2,
    explanation: 'if begins a conditional statement in Python.'
  },
  {
    id: 20,
    subject: 'python',
    questionText: 'Which keyword checks another condition?',
    options: ['else if', 'elseif', 'elif', 'then'],
    correctAnswerIndex: 2,
    explanation: 'elif checks additional conditions after an initial if statement.'
  },
  {
    id: 21,
    subject: 'python',
    questionText: 'Which loop is commonly used with range()?',
    options: ['while', 'for', 'repeat', 'do'],
    correctAnswerIndex: 1,
    explanation: 'range() is commonly iterated over using a for loop.'
  },
  {
    id: 22,
    subject: 'python',
    questionText: 'break does what?',
    options: ['Skips one iteration', 'Ends the loop', 'Restarts the loop', 'Does nothing'],
    correctAnswerIndex: 1,
    explanation: 'break immediately exits and terminates the current loop.'
  },
  {
    id: 23,
    subject: 'python',
    questionText: 'continue does what?',
    options: ['Ends the loop', 'Skips current iteration', 'Restarts program', 'Stops execution'],
    correctAnswerIndex: 1,
    explanation: 'continue skips the rest of the current iteration and moves to the next.'
  },
  {
    id: 24,
    subject: 'python',
    questionText: 'pass means',
    options: ['Stop program', 'Placeholder with no action', 'Return value', 'Exit loop'],
    correctAnswerIndex: 1,
    explanation: 'pass is a null statement used as a placeholder where syntax requires code execution.'
  },
  {
    id: 25,
    subject: 'python',
    questionText: 'Which keyword sends a value back from a function?',
    options: ['send', 'print', 'return', 'yield'],
    correctAnswerIndex: 2,
    explanation: 'return sends a value back to the caller of a function.'
  },
  {
    id: 26,
    subject: 'python',
    questionText: 'Lists are',
    options: ['Immutable', 'Mutable', 'Fixed', 'Read-only'],
    correctAnswerIndex: 1,
    explanation: 'Lists are mutable, meaning their contents can be altered after creation.'
  },
  {
    id: 27,
    subject: 'python',
    questionText: 'Which list method adds one item to the end?',
    options: ['extend()', 'append()', 'insert()', 'add()'],
    correctAnswerIndex: 1,
    explanation: 'append() appends a single item to the end of a list.'
  },
  {
    id: 28,
    subject: 'python',
    questionText: 'Which method removes the last element by default?',
    options: ['pop()', 'remove()', 'clear()', 'delete()'],
    correctAnswerIndex: 0,
    explanation: 'pop() removes and returns the last item if no index is specified.'
  },
  {
    id: 29,
    subject: 'python',
    questionText: 'Tuples are',
    options: ['Mutable', 'Immutable', 'Dictionaries', 'Sets'],
    correctAnswerIndex: 1,
    explanation: 'Tuples are immutable; once created, their elements cannot be changed or reassigned.'
  },
  {
    id: 30,
    subject: 'python',
    questionText: 'Sets allow',
    options: ['Duplicate values', 'Ordered duplicates', 'No duplicates', 'Only numbers'],
    correctAnswerIndex: 2,
    explanation: 'Sets are unordered collections that automatically eliminate duplicate values.'
  },
  {
    id: 31,
    subject: 'python',
    questionText: 'Dictionaries store',
    options: ['Key-value pairs', 'Numbers only', 'Characters', 'Tuples only'],
    correctAnswerIndex: 0,
    explanation: 'Dictionaries store data in key-value pairs.'
  },
  {
    id: 32,
    subject: 'python',
    questionText: 'Which dictionary method safely gets a value?',
    options: ['fetch()', 'value()', 'get()', 'read()'],
    correctAnswerIndex: 2,
    explanation: 'get() safely retrieves a value without throwing a KeyError if the key does not exist.'
  },
  {
    id: 33,
    subject: 'python',
    questionText: 'List comprehensions create',
    options: ['Dictionaries', 'Shorter list construction', 'Classes', 'Modules'],
    correctAnswerIndex: 1,
    explanation: 'List comprehensions provide a concise syntax for constructing new lists.'
  },
  {
    id: 34,
    subject: 'python',
    questionText: 'Which block handles exceptions?',
    options: ['error', 'except', 'catch', 'finally'],
    correctAnswerIndex: 1,
    explanation: 'except handles exceptions raised within a try block.'
  },
  {
    id: 35,
    subject: 'python',
    questionText: 'Which block always executes?',
    options: ['except', 'finally', 'try', 'else'],
    correctAnswerIndex: 1,
    explanation: 'finally executes regardless of whether an exception occurred or not.'
  },
  {
    id: 36,
    subject: 'python',
    questionText: 'Which file mode writes and overwrites a file?',
    options: ['r', 'a', 'w', 'x'],
    correctAnswerIndex: 2,
    explanation: 'mode "w" opens a file for writing and overwrites existing contents.'
  },
  {
    id: 37,
    subject: 'python',
    questionText: 'Which statement imports the entire math module?',
    options: ['include math', 'import math', 'using math', 'from math'],
    correctAnswerIndex: 1,
    explanation: 'import math imports the complete math module.'
  },
  {
    id: 38,
    subject: 'python',
    questionText: 'A package is',
    options: ['A variable', 'A folder of modules', 'A function', 'A class'],
    correctAnswerIndex: 1,
    explanation: 'A package is a directory containing Python modules and usually an __init__.py file.'
  },
  {
    id: 39,
    subject: 'python',
    questionText: 'OOP stands for',
    options: ['Object-Oriented Programming', 'Ordered Object Process', 'Object Optimization Program', 'Operational Object Programming'],
    correctAnswerIndex: 0,
    explanation: 'OOP stands for Object-Oriented Programming.'
  },
  {
    id: 40,
    subject: 'python',
    questionText: 'Which method is the constructor?',
    options: ['__start__()', '__main__()', '__init__()', 'init()'],
    correctAnswerIndex: 2,
    explanation: '__init__() is the constructor method invoked when an object is instantiated.'
  },
  {
    id: 41,
    subject: 'python',
    questionText: 'Inheritance allows',
    options: ['Classes to inherit from another class', 'Functions inside loops', 'Faster execution', 'File handling'],
    correctAnswerIndex: 0,
    explanation: 'Inheritance enables a child class to inherit attributes and methods from a parent class.'
  },
  {
    id: 42,
    subject: 'python',
    questionText: 'Lambda functions are',
    options: ['Anonymous functions', 'Classes', 'Modules', 'Packages'],
    correctAnswerIndex: 0,
    explanation: 'Lambda functions are small, anonymous single-line functions.'
  },
  {
    id: 43,
    subject: 'python',
    questionText: 'map() applies',
    options: ['A condition', 'A function to each item', 'Sorting', 'Searching'],
    correctAnswerIndex: 1,
    explanation: 'map() applies a given function to all items in an input iterable.'
  },
  {
    id: 44,
    subject: 'python',
    questionText: 'filter() returns',
    options: ['Every item', 'Items satisfying a condition', 'Random items', 'Sorted items'],
    correctAnswerIndex: 1,
    explanation: 'filter() constructs an iterator from elements for which a function returns True.'
  },
  {
    id: 45,
    subject: 'python',
    questionText: 'Which module contains reduce()?',
    options: ['math', 'functools', 'random', 'itertools'],
    correctAnswerIndex: 1,
    explanation: 'reduce() is located in the functools module in Python 3.'
  },
  {
    id: 46,
    subject: 'python',
    questionText: 'Which keyword creates a generator?',
    options: ['return', 'next', 'yield', 'pass'],
    correctAnswerIndex: 2,
    explanation: 'yield pauses function execution and returns a value, making it a generator.'
  },
  {
    id: 47,
    subject: 'python',
    questionText: 'A virtual environment isolates',
    options: ['Hardware', 'Python dependencies', 'Files', 'Memory'],
    correctAnswerIndex: 1,
    explanation: 'A virtual environment isolates package dependencies per project.'
  },
  {
    id: 48,
    subject: 'python',
    questionText: 'Which command installs a package?',
    options: ['pip add', 'pip install', 'python install', 'apt install'],
    correctAnswerIndex: 1,
    explanation: 'pip install <package_name> is the standard command to install Python packages.'
  },
  {
    id: 49,
    subject: 'python',
    questionText: 'Which built-in returns the number of items?',
    options: ['size()', 'len()', 'count()', 'type()'],
    correctAnswerIndex: 1,
    explanation: 'len() returns the length (number of items) of an object.'
  },
  {
    id: 50,
    subject: 'python',
    questionText: 'Which object is mutable?',
    options: ['tuple', 'string', 'list', 'integer'],
    correctAnswerIndex: 2,
    explanation: 'Lists are mutable; tuples, strings, and integers are immutable.'
  }
];
