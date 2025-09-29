const allQuestions = [
// 1
  { q: "He ……. at the cinema now.", options: ['is', 'are', 'be'], correct: 0 },
// 2
  { q: "They ……. to school every day.", options: ['go', 'goes', 'going'], correct: 0 },
// 3
  { q: "She ……. like pizza.", options: ["don't", "doesn't", "isn't"], correct: 1 },
// 4
  { q: "We ……. not go tomorrow.", options: ['will', "won't", "don't"], correct: 0 },
// 5
  { q: "I ……. playing football now.", options: ['am', 'is', 'are'], correct: 0 },
// 6
  { q: "My parents ……. in London last year.", options: ['was', 'were', 'are'], correct: 1 },
// 7
  { q: "This book ……. very interesting.", options: ['is', 'are', 'be'], correct: 0 },
// 8
  { q: "There ……. some apples on the table.", options: ['is', 'are', 'be'], correct: 1 },
// 9
  { q: "How ……. you?", options: ['is', 'are', 'am'], correct: 1 },
// 10
  { q: "I ……. born in 2000.", options: ['was', 'were', 'am'], correct: 0 },
// 11
  { q: "He ……. at the cinema now.", options: ['is', 'are', 'be'], correct: 0 },
// 12
  { q: "They ……. to school every day.", options: ['go', 'goes', 'going'], correct: 0 },
// 13
  { q: "She ……. like pizza.", options: ["don't", "doesn't", "isn't"], correct: 1 },
// 14
  { q: "We ……. not go tomorrow.", options: ['will', "won't", "don't"], correct: 0 },
// 15
  { q: "I ……. playing football now.", options: ['am', 'is', 'are'], correct: 0 },
// 16
  { q: "My parents ……. in London last year.", options: ['was', 'were', 'are'], correct: 1 },
// 17
  { q: "This book ……. very interesting.", options: ['is', 'are', 'be'], correct: 0 },
// 18
  { q: "There ……. some apples on the table.", options: ['is', 'are', 'be'], correct: 1 },
// 19
  { q: "How ……. you?", options: ['is', 'are', 'am'], correct: 1 },
// 20
  { q: "I ……. born in 2000.", options: ['was', 'were', 'am'], correct: 0 },
// 21
  { q: "He ……. at the cinema now.", options: ['is', 'are', 'be'], correct: 0 },
// 22
  { q: "They ……. to school every day.", options: ['go', 'goes', 'going'], correct: 0 },
// 23
  { q: "She ……. like pizza.", options: ["don't", "doesn't", "isn't"], correct: 1 },
// 24
  { q: "We ……. not go tomorrow.", options: ['will', "won't", "don't"], correct: 0 },
// 25
  { q: "I ……. playing football now.", options: ['am', 'is', 'are'], correct: 0 },
// 26
  { q: "My parents ……. in London last year.", options: ['was', 'were', 'are'], correct: 1 },
// 27
  { q: "This book ……. very interesting.", options: ['is', 'are', 'be'], correct: 0 },
// 28
  { q: "There ……. some apples on the table.", options: ['is', 'are', 'be'], correct: 1 },
// 29
  { q: "How ……. you?", options: ['is', 'are', 'am'], correct: 1 },
// 30
  { q: "I ……. born in 2000.", options: ['was', 'were', 'am'], correct: 0 },
// 31
  { q: "He ……. at the cinema now.", options: ['is', 'are', 'be'], correct: 0 },
// 32
  { q: "They ……. to school every day.", options: ['go', 'goes', 'going'], correct: 0 },
// 33
  { q: "She ……. like pizza.", options: ["don't", "doesn't", "isn't"], correct: 1 },
// 34
  { q: "We ……. not go tomorrow.", options: ['will', "won't", "don't"], correct: 0 },
// 35
  { q: "I ……. playing football now.", options: ['am', 'is', 'are'], correct: 0 },
// 36
  { q: "My parents ……. in London last year.", options: ['was', 'were', 'are'], correct: 1 },
// 37
  { q: "This book ……. very interesting.", options: ['is', 'are', 'be'], correct: 0 },
// 38
  { q: "There ……. some apples on the table.", options: ['is', 'are', 'be'], correct: 1 },
// 39
  { q: "How ……. you?", options: ['is', 'are', 'am'], correct: 1 },
// 40
  { q: "I ……. born in 2000.", options: ['was', 'were', 'am'], correct: 0 },
// 41
  { q: "He ……. at the cinema now.", options: ['is', 'are', 'be'], correct: 0 },
// 42
  { q: "They ……. to school every day.", options: ['go', 'goes', 'going'], correct: 0 },
// 43
  { q: "She ……. like pizza.", options: ["don't", "doesn't", "isn't"], correct: 1 },
// 44
  { q: "We ……. not go tomorrow.", options: ['will', "won't", "don't"], correct: 0 },
// 45
  { q: "I ……. playing football now.", options: ['am', 'is', 'are'], correct: 0 },
// 46
  { q: "My parents ……. in London last year.", options: ['was', 'were', 'are'], correct: 1 },
// 47
  { q: "This book ……. very interesting.", options: ['is', 'are', 'be'], correct: 0 },
// 48
  { q: "There ……. some apples on the table.", options: ['is', 'are', 'be'], correct: 1 },
// 49
  { q: "How ……. you?", options: ['is', 'are', 'am'], correct: 1 },
// 50
  { q: "I ……. born in 2000.", options: ['was', 'were', 'am'], correct: 0 },
// 51
  { q: "He ……. at the cinema now.", options: ['is', 'are', 'be'], correct: 0 },
// 52
  { q: "They ……. to school every day.", options: ['go', 'goes', 'going'], correct: 0 },
// 53
  { q: "She ……. like pizza.", options: ["don't", "doesn't", "isn't"], correct: 1 },
// 54
  { q: "We ……. not go tomorrow.", options: ['will', "won't", "don't"], correct: 0 },
// 55
  { q: "I ……. playing football now.", options: ['am', 'is', 'are'], correct: 0 },
// 56
  { q: "My parents ……. in London last year.", options: ['was', 'were', 'are'], correct: 1 },
// 57
  { q: "This book ……. very interesting.", options: ['is', 'are', 'be'], correct: 0 },
// 58
  { q: "There ……. some apples on the table.", options: ['is', 'are', 'be'], correct: 1 },
// 59
  { q: "How ……. you?", options: ['is', 'are', 'am'], correct: 1 },
// 60
  { q: "I ……. born in 2000.", options: ['was', 'were', 'am'], correct: 0 },
// 61
  { q: "My favorite fruit is …….", options: ['apple', 'chair', 'table'], correct: 0 },
// 62
  { q: "She is drinking …….", options: ['water', 'book', 'pen'], correct: 0 },
// 63
  { q: "They are eating …….", options: ['car', 'bread', 'door'], correct: 1 },
// 64
  { q: "He bought a new …….", options: ['computer', 'hungry', 'fast'], correct: 0 },
// 65
  { q: "I need a ……. of paper.", options: ['bottle', 'piece', 'cup'], correct: 1 },
// 66
  { q: "We stayed in a big …….", options: ['hotel', 'green', 'sleep'], correct: 0 },
// 67
  { q: "He plays the …….", options: ['piano', 'running', 'tall'], correct: 0 },
// 68
  { q: "She works in a …….", options: ['school', 'swim', 'happy'], correct: 0 },
// 69
  { q: "I wear ……. on my feet.", options: ['shoes', 'hands', 'books'], correct: 0 },
// 70
  { q: "The opposite of 'cold' is …….", options: ['hot', 'warm', 'cool'], correct: 0 },
// 71
  { q: "My favorite fruit is …….", options: ['apple', 'chair', 'table'], correct: 0 },
// 72
  { q: "She is drinking …….", options: ['water', 'book', 'pen'], correct: 0 },
// 73
  { q: "They are eating …….", options: ['car', 'bread', 'door'], correct: 1 },
// 74
  { q: "He bought a new …….", options: ['computer', 'hungry', 'fast'], correct: 0 },
// 75
  { q: "I need a ……. of paper.", options: ['bottle', 'piece', 'cup'], correct: 1 },
// 76
  { q: "We stayed in a big …….", options: ['hotel', 'green', 'sleep'], correct: 0 },
// 77
  { q: "He plays the …….", options: ['piano', 'running', 'tall'], correct: 0 },
// 78
  { q: "She works in a …….", options: ['school', 'swim', 'happy'], correct: 0 },
// 79
  { q: "I wear ……. on my feet.", options: ['shoes', 'hands', 'books'], correct: 0 },
// 80
  { q: "The opposite of 'cold' is …….", options: ['hot', 'warm', 'cool'], correct: 0 },
// 81
  { q: "My favorite fruit is …….", options: ['apple', 'chair', 'table'], correct: 0 },
// 82
  { q: "She is drinking …….", options: ['water', 'book', 'pen'], correct: 0 },
// 83
  { q: "They are eating …….", options: ['car', 'bread', 'door'], correct: 1 },
// 84
  { q: "He bought a new …….", options: ['computer', 'hungry', 'fast'], correct: 0 },
// 85
  { q: "I need a ……. of paper.", options: ['bottle', 'piece', 'cup'], correct: 1 },
// 86
  { q: "We stayed in a big …….", options: ['hotel', 'green', 'sleep'], correct: 0 },
// 87
  { q: "He plays the …….", options: ['piano', 'running', 'tall'], correct: 0 },
// 88
  { q: "She works in a …….", options: ['school', 'swim', 'happy'], correct: 0 },
// 89
  { q: "I wear ……. on my feet.", options: ['shoes', 'hands', 'books'], correct: 0 },
// 90
  { q: "The opposite of 'cold' is …….", options: ['hot', 'warm', 'cool'], correct: 0 },
// 91
  { q: "My favorite fruit is …….", options: ['apple', 'chair', 'table'], correct: 0 },
// 92
  { q: "She is drinking …….", options: ['water', 'book', 'pen'], correct: 0 },
// 93
  { q: "They are eating …….", options: ['car', 'bread', 'door'], correct: 1 },
// 94
  { q: "He bought a new …….", options: ['computer', 'hungry', 'fast'], correct: 0 },
// 95
  { q: "I need a ……. of paper.", options: ['bottle', 'piece', 'cup'], correct: 1 },
// 96
  { q: "We stayed in a big …….", options: ['hotel', 'green', 'sleep'], correct: 0 },
// 97
  { q: "He plays the …….", options: ['piano', 'running', 'tall'], correct: 0 },
// 98
  { q: "She works in a …….", options: ['school', 'swim', 'happy'], correct: 0 },
// 99
  { q: "I wear ……. on my feet.", options: ['shoes', 'hands', 'books'], correct: 0 },
// 100
  { q: "The opposite of 'cold' is …….", options: ['hot', 'warm', 'cool'], correct: 0 },
// 101
  { q: "My favorite fruit is …….", options: ['apple', 'chair', 'table'], correct: 0 },
// 102
  { q: "She is drinking …….", options: ['water', 'book', 'pen'], correct: 0 },
// 103
  { q: "They are eating …….", options: ['car', 'bread', 'door'], correct: 1 },
// 104
  { q: "He bought a new …….", options: ['computer', 'hungry', 'fast'], correct: 0 },
// 105
  { q: "I need a ……. of paper.", options: ['bottle', 'piece', 'cup'], correct: 1 },
// 106
  { q: "We stayed in a big …….", options: ['hotel', 'green', 'sleep'], correct: 0 },
// 107
  { q: "He plays the …….", options: ['piano', 'running', 'tall'], correct: 0 },
// 108
  { q: "She works in a …….", options: ['school', 'swim', 'happy'], correct: 0 },
// 109
  { q: "I wear ……. on my feet.", options: ['shoes', 'hands', 'books'], correct: 0 },
// 110
  { q: "The opposite of 'cold' is …….", options: ['hot', 'warm', 'cool'], correct: 0 },
// 111
  { q: "My favorite fruit is …….", options: ['apple', 'chair', 'table'], correct: 0 },
// 112
  { q: "She is drinking …….", options: ['water', 'book', 'pen'], correct: 0 },
// 113
  { q: "They are eating …….", options: ['car', 'bread', 'door'], correct: 1 },
// 114
  { q: "He bought a new …….", options: ['computer', 'hungry', 'fast'], correct: 0 },
// 115
  { q: "I need a ……. of paper.", options: ['bottle', 'piece', 'cup'], correct: 1 },
// 116
  { q: "We stayed in a big …….", options: ['hotel', 'green', 'sleep'], correct: 0 },
// 117
  { q: "He plays the …….", options: ['piano', 'running', 'tall'], correct: 0 },
// 118
  { q: "She works in a …….", options: ['school', 'swim', 'happy'], correct: 0 },
// 119
  { q: "I wear ……. on my feet.", options: ['shoes', 'hands', 'books'], correct: 0 },
// 120
  { q: "The opposite of 'cold' is …….", options: ['hot', 'warm', 'cool'], correct: 0 },
// 121
  { q: "Do you like tea? – I …….", options: ["doesn't", "don't", 'does'], correct: 1 },
// 122
  { q: "Which one is correct?", options: ['Give the book me!', 'The book me give!', 'Give me the book!'], correct: 2 },
// 123
  { q: "Can you help me? – …….", options: ['Yes, of course.', 'No, I can.', 'I don’t can.'], correct: 0 },
// 124
  { q: "How much is this? – It’s …….", options: ['five euros', 'blue', 'hungry'], correct: 0 },
// 125
  { q: "Good morning! – …….", options: ['Good night!', 'Good morning!', 'Bye bye!'], correct: 1 },
// 126
  { q: "See you tomorrow! – …….", options: ['See you!', 'Good evening!', 'Goodbye yesterday!'], correct: 0 },
// 127
  { q: "Excuse me, where is the bank? – …….", options: ['It’s near the station.', 'Yes, I do.', 'I am fine.'], correct: 0 },
// 128
  { q: "I am hungry. – …….", options: ['Let’s eat something.', 'Good night!', 'What time is it?'], correct: 0 },
// 129
  { q: "Thank you very much! – …….", options: ['Please.', 'You’re welcome.', 'Sorry.'], correct: 1 },
// 130
  { q: "Would you like some coffee? – …….", options: ['Yes, please.', 'I am 20.', 'It’s green.'], correct: 0 },
// 131
  { q: "Do you like tea? – I …….", options: ["doesn't", "don't", 'does'], correct: 1 },
// 132
  { q: "Which one is correct?", options: ['Give the book me!', 'The book me give!', 'Give me the book!'], correct: 2 },
// 133
  { q: "Can you help me? – …….", options: ['Yes, of course.', 'No, I can.', 'I don’t can.'], correct: 0 },
// 134
  { q: "How much is this? – It’s …….", options: ['five euros', 'blue', 'hungry'], correct: 0 },
// 135
  { q: "Good morning! – …….", options: ['Good night!', 'Good morning!', 'Bye bye!'], correct: 1 },
// 136
  { q: "See you tomorrow! – …….", options: ['See you!', 'Good evening!', 'Goodbye yesterday!'], correct: 0 },
// 137
  { q: "Excuse me, where is the bank? – …….", options: ['It’s near the station.', 'Yes, I do.', 'I am fine.'], correct: 0 },
// 138
  { q: "I am hungry. – …….", options: ['Let’s eat something.', 'Good night!', 'What time is it?'], correct: 0 },
// 139
  { q: "Thank you very much! – …….", options: ['Please.', 'You’re welcome.', 'Sorry.'], correct: 1 },
// 140
  { q: "Would you like some coffee? – …….", options: ['Yes, please.', 'I am 20.', 'It’s green.'], correct: 0 },
// 141
  { q: "Do you like tea? – I …….", options: ["doesn't", "don't", 'does'], correct: 1 },
// 142
  { q: "Which one is correct?", options: ['Give the book me!', 'The book me give!', 'Give me the book!'], correct: 2 },
// 143
  { q: "Can you help me? – …….", options: ['Yes, of course.', 'No, I can.', 'I don’t can.'], correct: 0 },
// 144
  { q: "How much is this? – It’s …….", options: ['five euros', 'blue', 'hungry'], correct: 0 },
// 145
  { q: "Good morning! – …….", options: ['Good night!', 'Good morning!', 'Bye bye!'], correct: 1 },
// 146
  { q: "See you tomorrow! – …….", options: ['See you!', 'Good evening!', 'Goodbye yesterday!'], correct: 0 },
// 147
  { q: "Excuse me, where is the bank? – …….", options: ['It’s near the station.', 'Yes, I do.', 'I am fine.'], correct: 0 },
// 148
  { q: "I am hungry. – …….", options: ['Let’s eat something.', 'Good night!', 'What time is it?'], correct: 0 },
// 149
  { q: "Thank you very much! – …….", options: ['Please.', 'You’re welcome.', 'Sorry.'], correct: 1 },
// 150
  { q: "Would you like some coffee? – …….", options: ['Yes, please.', 'I am 20.', 'It’s green.'], correct: 0 },
// 151
  { q: "Do you like tea? – I …….", options: ["doesn't", "don't", 'does'], correct: 1 },
// 152
  { q: "Which one is correct?", options: ['Give the book me!', 'The book me give!', 'Give me the book!'], correct: 2 },
// 153
  { q: "Can you help me? – …….", options: ['Yes, of course.', 'No, I can.', 'I don’t can.'], correct: 0 },
// 154
  { q: "How much is this? – It’s …….", options: ['five euros', 'blue', 'hungry'], correct: 0 },
// 155
  { q: "Good morning! – …….", options: ['Good night!', 'Good morning!', 'Bye bye!'], correct: 1 },
// 156
  { q: "See you tomorrow! – …….", options: ['See you!', 'Good evening!', 'Goodbye yesterday!'], correct: 0 },
// 157
  { q: "Excuse me, where is the bank? – …….", options: ['It’s near the station.', 'Yes, I do.', 'I am fine.'], correct: 0 },
// 158
  { q: "I am hungry. – …….", options: ['Let’s eat something.', 'Good night!', 'What time is it?'], correct: 0 },
// 159
  { q: "Thank you very much! – …….", options: ['Please.', 'You’re welcome.', 'Sorry.'], correct: 1 },
// 160
  { q: "Would you like some coffee? – …….", options: ['Yes, please.', 'I am 20.', 'It’s green.'], correct: 0 },
// 161
  { q: "Do you like tea? – I …….", options: ["doesn't", "don't", 'does'], correct: 1 },
// 162
  { q: "Which one is correct?", options: ['Give the book me!', 'The book me give!', 'Give me the book!'], correct: 2 },
// 163
  { q: "Can you help me? – …….", options: ['Yes, of course.', 'No, I can.', 'I don’t can.'], correct: 0 },
// 164
  { q: "How much is this? – It’s …….", options: ['five euros', 'blue', 'hungry'], correct: 0 },
// 165
  { q: "Good morning! – …….", options: ['Good night!', 'Good morning!', 'Bye bye!'], correct: 1 },
// 166
  { q: "See you tomorrow! – …….", options: ['See you!', 'Good evening!', 'Goodbye yesterday!'], correct: 0 },
// 167
  { q: "Excuse me, where is the bank? – …….", options: ['It’s near the station.', 'Yes, I do.', 'I am fine.'], correct: 0 },
// 168
  { q: "I am hungry. – …….", options: ['Let’s eat something.', 'Good night!', 'What time is it?'], correct: 0 },
// 169
  { q: "Thank you very much! – …….", options: ['Please.', 'You’re welcome.', 'Sorry.'], correct: 1 },
// 170
  { q: "Would you like some coffee? – …….", options: ['Yes, please.', 'I am 20.', 'It’s green.'], correct: 0 },
];