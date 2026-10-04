/* ============================================================
   📘 CAMBRIDGE GLOBAL ENGLISH 1-4 COMPLETE CURRICULUM DATA
   36 Units, 216 Vocab Cards, Baamboozle Arena, Tongue Twisters,
   Curated Songs & Educational Video Library
   ============================================================ */

const CURRICULUM_DATA = {
  "stage1": {
    "title": "Stage 1 (Primary 1 / Pre-A1)",
    "description": "Foundational English for Primary 1: Phonics, Greetings, Animals, Senses, and School.",
    "units": [
      {
        "id": "stage1_u1",
        "number": 1,
        "title": "Welcome to School",
        "cefr": "Pre-A1",
        "theme": "School Life & Classroom Objects",
        "grammar": "What is this? It is a... / Stand up, sit down",
        "phonics": "Short /æ/ in bag, cat; Initial /b/, /p/, /s/, /t/",
        "vocabulary": [
          {
            "word": "Pencil",
            "meaning": "A tool for writing and drawing",
            "turkish": "Kurşun kalem",
            "realPhoto": "https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?w=600&auto=format&fit=crop&q=80",
            "gifUrl": "https://media.giphy.com/media/3o7TKSjRrfIPjeiVyM/giphy.gif",
            "characterVoice": "polly",
            "voiceLine": "Look! A pencil to draw nice pictures!"
          },
          {
            "word": "School Bag",
            "meaning": "A bag used to carry books",
            "turkish": "Okul çantası",
            "realPhoto": "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&auto=format&fit=crop&q=80",
            "gifUrl": "https://media.giphy.com/media/l0HlHFRbmaZtBRhXG/giphy.gif",
            "characterVoice": "peppa",
            "voiceLine": "Pack your school bag, it is time for school!"
          },
          {
            "word": "Teacher",
            "meaning": "A person who helps students learn",
            "turkish": "Öğretmen",
            "realPhoto": "https://images.unsplash.com/photo-1580894732488-ea187b5a8e0e?w=600&auto=format&fit=crop&q=80",
            "gifUrl": "https://media.giphy.com/media/26FPJGjhefSJuaR0Y/giphy.gif",
            "characterVoice": "bluey",
            "voiceLine": "Good morning teacher! Let us play and learn!"
          },
          {
            "word": "Book",
            "meaning": "Pages bound together for reading",
            "turkish": "Kitap",
            "realPhoto": "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=600&auto=format&fit=crop&q=80",
            "gifUrl": "https://media.giphy.com/media/13HgwGsXF0aiGY/giphy.gif",
            "characterVoice": "polly",
            "voiceLine": "Open your book! Turn the page!"
          },
          {
            "word": "Desk",
            "meaning": "A table used for reading and writing",
            "turkish": "Sıra / Çalışma Masası",
            "realPhoto": "https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?w=600&auto=format&fit=crop&q=80",
            "gifUrl": "https://media.giphy.com/media/l41lFw057lAJQMwg0/giphy.gif",
            "characterVoice": "chase",
            "voiceLine": "Put your pencil neatly on the desk!"
          },
          {
            "word": "Chair",
            "meaning": "A seat for one person with a back",
            "turkish": "Sandalye",
            "realPhoto": "https://images.unsplash.com/photo-1503602642458-232111445657?w=600&auto=format&fit=crop&q=80",
            "gifUrl": "https://media.giphy.com/media/26u4cqiYI30juCOGY/giphy.gif",
            "characterVoice": "peppa",
            "voiceLine": "Please sit down on your chair, team!"
          }
        ],
        "baamboozleQuestions": [
          {
            "q": "What is the English word for 'Kurşun kalem'?",
            "a": "Pencil",
            "pts": 15,
            "type": "question"
          },
          {
            "q": "MYSTERY BOX: Polly found bonus treasure for your team!",
            "a": "You won 20 points!",
            "pts": 20,
            "type": "bonus"
          },
          {
            "q": "TPR CHALLENGE: Act out the theme 'School Life & Classroom Objects' for 5 seconds!",
            "a": "Demonstrated by team with cheers",
            "pts": 10,
            "type": "action"
          },
          {
            "q": "How do you spell the word 'School Bag'?",
            "a": "S - C - H - O - O - L -   - B - A - G",
            "pts": 15,
            "type": "question"
          },
          {
            "q": "OOPS! Peppa slipped in a muddy puddle! Lose 10 points.",
            "a": "Lost 10 points!",
            "pts": -10,
            "type": "penalty"
          },
          {
            "q": "TEAM ACTION: Stand up and give your teammates a high five!",
            "a": "High fives completed!",
            "pts": 10,
            "type": "action"
          },
          {
            "q": "STEAL! Steal 15 points from another team!",
            "a": "15 points transferred!",
            "pts": 15,
            "type": "steal"
          },
          {
            "q": "Name three things connected to 'Welcome to School'!",
            "a": "Pencil, School Bag, and Teacher",
            "pts": 20,
            "type": "question"
          },
          {
            "q": "Say 'Good job team!' in a funny robot voice!",
            "a": "Beep boop performed!",
            "pts": 10,
            "type": "action"
          },
          {
            "q": "SWAP SCORES! Swap points with the leading team!",
            "a": "Scores swapped!",
            "pts": 0,
            "type": "swap"
          },
          {
            "q": "What does 'Teacher' mean in Turkish?",
            "a": "Öğretmen",
            "pts": 15,
            "type": "question"
          },
          {
            "q": "GALAXY WIN: Bluey awards 25 bonus points!",
            "a": "Gained 25 points!",
            "pts": 25,
            "type": "bonus"
          },
          {
            "q": "Use the word 'Pencil' in an English sentence!",
            "a": "Example: I like this pencil.",
            "pts": 20,
            "type": "question"
          },
          {
            "q": "BLACK HOLE: Lose 15 points into space!",
            "a": "Lost 15 points!",
            "pts": -15,
            "type": "penalty"
          },
          {
            "q": "DOUBLE BONUS: Answer correctly: Is school fun?",
            "a": "Yes, learning with friends is super fun!",
            "pts": 30,
            "type": "question"
          },
          {
            "q": "TEAM VICTORY: Everyone shout 'Polly!' together!",
            "a": "Polly!",
            "pts": 10,
            "type": "action"
          }
        ],
        "lessonPlan": {
          "weeklyGoal": "Students can communicate confidently about 'Welcome to School' (School Life & Classroom Objects), identify core vocabulary, and participate in collaborative smartboard games.",
          "dailyPlan": [
            {
              "day": "Monday (Day 1)",
              "focus": "Vocabulary Exploration: Pencil, School Bag",
              "warmUp": "Polly's Morning Song & Mascot Welcome Chant",
              "presentation": "Smartboard interactive visual flashcards with GIPHY animations & real photos (No emojis).",
              "practice": "Pair matching card drill & natural character pronunciation practice.",
              "production": "Role-play dialogue: Ask peers about pencil.",
              "wrapUp": "Quick-fire exit ticket check before lineup."
            },
            {
              "day": "Wednesday (Day 2)",
              "focus": "Grammar & Phonics Focus (Short /æ/ in bag, cat; Initial...)",
              "warmUp": "TPR Simon Says: Follow teacher's movement commands.",
              "presentation": "Interactive smartboard sorting and spelling drill.",
              "practice": "Baamboozle 4-Team Championship Round on Smartboard.",
              "production": "Student drawing portfolio & sentence builder.",
              "wrapUp": "Star badge award and team points celebration."
            }
          ],
          "teacherResources": {
            "physicalGames": [
              "Flyswatter Board Relay: Stick photo flashcards of Pencil on the whiteboard. Two teams race to slap the called word.",
              "Magic Bag Mystery: Place real classroom props or word cards in a bag. Students feel without looking and describe the item."
            ],
            "smartboardActivities": [
              "Baamboozle 4-Team Interactive Arena for Welcome to School with mystery cards and sound effects.",
              "GIF & Real Photo Carousel Drill: Tap the moving GIPHY sticker to hear character pronunciation."
            ]
          }
        }
      },
      {
        "id": "stage1_u2",
        "number": 2,
        "title": "Family Time",
        "cefr": "Pre-A1",
        "theme": "Family Members & Home",
        "grammar": "This is my mother / father / brother / sister. He is... / She is...",
        "phonics": "Consonants: m, d, f, b; Rhyming words: dad - sad",
        "vocabulary": [
          {
            "word": "Mother / Mum",
            "meaning": "A female parent",
            "turkish": "Anne",
            "realPhoto": "https://images.unsplash.com/photo-1544717305-2782549b5136?w=600&auto=format&fit=crop&q=80",
            "gifUrl": "https://media.giphy.com/media/xT0xeJpnrWC4XWblEk/giphy.gif",
            "characterVoice": "peppa",
            "voiceLine": "Mummy Pig is making delicious pancakes!"
          },
          {
            "word": "Father / Dad",
            "meaning": "A male parent",
            "turkish": "Baba",
            "realPhoto": "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=600&auto=format&fit=crop&q=80",
            "gifUrl": "https://media.giphy.com/media/3o7TKDkDbIDJieKbVm/giphy.gif",
            "characterVoice": "bluey",
            "voiceLine": "Bandit Dad loves playing funny games!"
          },
          {
            "word": "Brother",
            "meaning": "A boy who has the same parents",
            "turkish": "Erkek kardeş",
            "realPhoto": "https://images.unsplash.com/photo-1485546246426-74dc88dec4d9?w=600&auto=format&fit=crop&q=80",
            "gifUrl": "https://media.giphy.com/media/26FLdm964upq8108U/giphy.gif",
            "characterVoice": "chase",
            "voiceLine": "My brother loves building Lego towers!"
          },
          {
            "word": "Sister",
            "meaning": "A girl who has the same parents",
            "turkish": "Kız kardeş",
            "realPhoto": "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=600&auto=format&fit=crop&q=80",
            "gifUrl": "https://media.giphy.com/media/3o7TKMt1VVNkHV2PaE/giphy.gif",
            "characterVoice": "bluey",
            "voiceLine": "Bingo is my sweet sister!"
          },
          {
            "word": "Baby",
            "meaning": "A very young child",
            "turkish": "Bebek",
            "realPhoto": "https://images.unsplash.com/photo-1519689680058-324335c77eba?w=600&auto=format&fit=crop&q=80",
            "gifUrl": "https://media.giphy.com/media/3o6ZsU7C4QQca8CLjy/giphy.gif",
            "characterVoice": "peppa",
            "voiceLine": "Shh! The baby is sleeping softly!"
          },
          {
            "word": "Grandma",
            "meaning": "The mother of your mother or father",
            "turkish": "Büyükanne / Nine",
            "realPhoto": "https://images.unsplash.com/photo-1581579438747-1dc8d17bbce4?w=600&auto=format&fit=crop&q=80",
            "gifUrl": "https://media.giphy.com/media/l41lI4bYmcsPJX9Go/giphy.gif",
            "characterVoice": "polly",
            "voiceLine": "Grandma bakes the tastiest cookies!"
          }
        ],
        "baamboozleQuestions": [
          {
            "q": "What is the English word for 'Anne'?",
            "a": "Mother / Mum",
            "pts": 15,
            "type": "question"
          },
          {
            "q": "MYSTERY BOX: Polly found bonus treasure for your team!",
            "a": "You won 20 points!",
            "pts": 20,
            "type": "bonus"
          },
          {
            "q": "TPR CHALLENGE: Act out the theme 'Family Members & Home' for 5 seconds!",
            "a": "Demonstrated by team with cheers",
            "pts": 10,
            "type": "action"
          },
          {
            "q": "How do you spell the word 'Father / Dad'?",
            "a": "F - A - T - H - E - R -   - / -   - D - A - D",
            "pts": 15,
            "type": "question"
          },
          {
            "q": "OOPS! Peppa slipped in a muddy puddle! Lose 10 points.",
            "a": "Lost 10 points!",
            "pts": -10,
            "type": "penalty"
          },
          {
            "q": "TEAM ACTION: Stand up and give your teammates a high five!",
            "a": "High fives completed!",
            "pts": 10,
            "type": "action"
          },
          {
            "q": "STEAL! Steal 15 points from another team!",
            "a": "15 points transferred!",
            "pts": 15,
            "type": "steal"
          },
          {
            "q": "Name three things connected to 'Family Time'!",
            "a": "Mother / Mum, Father / Dad, and Brother",
            "pts": 20,
            "type": "question"
          },
          {
            "q": "Say 'Good job team!' in a funny robot voice!",
            "a": "Beep boop performed!",
            "pts": 10,
            "type": "action"
          },
          {
            "q": "SWAP SCORES! Swap points with the leading team!",
            "a": "Scores swapped!",
            "pts": 0,
            "type": "swap"
          },
          {
            "q": "What does 'Brother' mean in Turkish?",
            "a": "Erkek kardeş",
            "pts": 15,
            "type": "question"
          },
          {
            "q": "GALAXY WIN: Bluey awards 25 bonus points!",
            "a": "Gained 25 points!",
            "pts": 25,
            "type": "bonus"
          },
          {
            "q": "Use the word 'Mother / Mum' in an English sentence!",
            "a": "Example: I like this mother / mum.",
            "pts": 20,
            "type": "question"
          },
          {
            "q": "BLACK HOLE: Lose 15 points into space!",
            "a": "Lost 15 points!",
            "pts": -15,
            "type": "penalty"
          },
          {
            "q": "DOUBLE BONUS: Answer correctly: Is school fun?",
            "a": "Yes, learning with friends is super fun!",
            "pts": 30,
            "type": "question"
          },
          {
            "q": "TEAM VICTORY: Everyone shout 'Polly!' together!",
            "a": "Polly!",
            "pts": 10,
            "type": "action"
          }
        ],
        "lessonPlan": {
          "weeklyGoal": "Students can communicate confidently about 'Family Time' (Family Members & Home), identify core vocabulary, and participate in collaborative smartboard games.",
          "dailyPlan": [
            {
              "day": "Monday (Day 1)",
              "focus": "Vocabulary Exploration: Mother / Mum, Father / Dad",
              "warmUp": "Polly's Morning Song & Mascot Welcome Chant",
              "presentation": "Smartboard interactive visual flashcards with GIPHY animations & real photos (No emojis).",
              "practice": "Pair matching card drill & natural character pronunciation practice.",
              "production": "Role-play dialogue: Ask peers about mother / mum.",
              "wrapUp": "Quick-fire exit ticket check before lineup."
            },
            {
              "day": "Wednesday (Day 2)",
              "focus": "Grammar & Phonics Focus (Consonants: m, d, f, b; Rhymin...)",
              "warmUp": "TPR Simon Says: Follow teacher's movement commands.",
              "presentation": "Interactive smartboard sorting and spelling drill.",
              "practice": "Baamboozle 4-Team Championship Round on Smartboard.",
              "production": "Student drawing portfolio & sentence builder.",
              "wrapUp": "Star badge award and team points celebration."
            }
          ],
          "teacherResources": {
            "physicalGames": [
              "Flyswatter Board Relay: Stick photo flashcards of Mother / Mum on the whiteboard. Two teams race to slap the called word.",
              "Magic Bag Mystery: Place real classroom props or word cards in a bag. Students feel without looking and describe the item."
            ],
            "smartboardActivities": [
              "Baamboozle 4-Team Interactive Arena for Family Time with mystery cards and sound effects.",
              "GIF & Real Photo Carousel Drill: Tap the moving GIPHY sticker to hear character pronunciation."
            ]
          }
        }
      },
      {
        "id": "stage1_u3",
        "number": 3,
        "title": "Fun and Games",
        "cefr": "Pre-A1",
        "theme": "Toys, Sports & Body Movements",
        "grammar": "Can / Can't / Action verbs: jump, hop, run, skip",
        "phonics": "Short /ɪ/ in pin, sit; /g/, /k/",
        "vocabulary": [
          {
            "word": "Ball",
            "meaning": "A round object used in games",
            "turkish": "Top",
            "realPhoto": "https://images.unsplash.com/photo-1511886929837-354d827aae26?w=600&auto=format&fit=crop&q=80",
            "gifUrl": "https://media.giphy.com/media/3o7btPCcdNniyf0ArS/giphy.gif",
            "characterVoice": "bluey",
            "voiceLine": "Kick the ball high into the goal!"
          },
          {
            "word": "Teddy Bear",
            "meaning": "A soft cuddly toy bear",
            "turkish": "Oyuncak ayı",
            "realPhoto": "https://images.unsplash.com/photo-1559454403-b8fb88521f11?w=600&auto=format&fit=crop&q=80",
            "gifUrl": "https://media.giphy.com/media/l0MYt5jPR6QX5pnqM/giphy.gif",
            "characterVoice": "peppa",
            "voiceLine": "My teddy bear gives the warmest hugs!"
          },
          {
            "word": "Jump",
            "meaning": "Push yourself off the ground into air",
            "turkish": "Zıplamak",
            "realPhoto": "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=600&auto=format&fit=crop&q=80",
            "gifUrl": "https://media.giphy.com/media/3o7TKDkDbIDJieKbVm/giphy.gif",
            "characterVoice": "polly",
            "voiceLine": "Jump up high and touch the clouds!"
          },
          {
            "word": "Robot",
            "meaning": "A toy machine that can move",
            "turkish": "Robot",
            "realPhoto": "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&auto=format&fit=crop&q=80",
            "gifUrl": "https://media.giphy.com/media/26FPJGjhefSJuaR0Y/giphy.gif",
            "characterVoice": "chase",
            "voiceLine": "Beep boop! The robot is ready to roll!"
          },
          {
            "word": "Doll",
            "meaning": "A toy looking like a small person",
            "turkish": "Oyuncak bebek",
            "realPhoto": "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=600&auto=format&fit=crop&q=80",
            "gifUrl": "https://media.giphy.com/media/l41lFw057lAJQMwg0/giphy.gif",
            "characterVoice": "peppa",
            "voiceLine": "Let us have a tea party with my doll!"
          },
          {
            "word": "Run",
            "meaning": "Move quickly on your feet",
            "turkish": "Koşmak",
            "realPhoto": "https://images.unsplash.com/photo-1486218119243-13883505764c?w=600&auto=format&fit=crop&q=80",
            "gifUrl": "https://media.giphy.com/media/26u4cqiYI30juCOGY/giphy.gif",
            "characterVoice": "chase",
            "voiceLine": "Run fast like Chase on a rescue mission!"
          }
        ],
        "baamboozleQuestions": [
          {
            "q": "What is the English word for 'Top'?",
            "a": "Ball",
            "pts": 15,
            "type": "question"
          },
          {
            "q": "MYSTERY BOX: Polly found bonus treasure for your team!",
            "a": "You won 20 points!",
            "pts": 20,
            "type": "bonus"
          },
          {
            "q": "TPR CHALLENGE: Act out the theme 'Toys, Sports & Body Movements' for 5 seconds!",
            "a": "Demonstrated by team with cheers",
            "pts": 10,
            "type": "action"
          },
          {
            "q": "How do you spell the word 'Teddy Bear'?",
            "a": "T - E - D - D - Y -   - B - E - A - R",
            "pts": 15,
            "type": "question"
          },
          {
            "q": "OOPS! Peppa slipped in a muddy puddle! Lose 10 points.",
            "a": "Lost 10 points!",
            "pts": -10,
            "type": "penalty"
          },
          {
            "q": "TEAM ACTION: Stand up and give your teammates a high five!",
            "a": "High fives completed!",
            "pts": 10,
            "type": "action"
          },
          {
            "q": "STEAL! Steal 15 points from another team!",
            "a": "15 points transferred!",
            "pts": 15,
            "type": "steal"
          },
          {
            "q": "Name three things connected to 'Fun and Games'!",
            "a": "Ball, Teddy Bear, and Jump",
            "pts": 20,
            "type": "question"
          },
          {
            "q": "Say 'Good job team!' in a funny robot voice!",
            "a": "Beep boop performed!",
            "pts": 10,
            "type": "action"
          },
          {
            "q": "SWAP SCORES! Swap points with the leading team!",
            "a": "Scores swapped!",
            "pts": 0,
            "type": "swap"
          },
          {
            "q": "What does 'Jump' mean in Turkish?",
            "a": "Zıplamak",
            "pts": 15,
            "type": "question"
          },
          {
            "q": "GALAXY WIN: Bluey awards 25 bonus points!",
            "a": "Gained 25 points!",
            "pts": 25,
            "type": "bonus"
          },
          {
            "q": "Use the word 'Ball' in an English sentence!",
            "a": "Example: I like this ball.",
            "pts": 20,
            "type": "question"
          },
          {
            "q": "BLACK HOLE: Lose 15 points into space!",
            "a": "Lost 15 points!",
            "pts": -15,
            "type": "penalty"
          },
          {
            "q": "DOUBLE BONUS: Answer correctly: Is school fun?",
            "a": "Yes, learning with friends is super fun!",
            "pts": 30,
            "type": "question"
          },
          {
            "q": "TEAM VICTORY: Everyone shout 'Polly!' together!",
            "a": "Polly!",
            "pts": 10,
            "type": "action"
          }
        ],
        "lessonPlan": {
          "weeklyGoal": "Students can communicate confidently about 'Fun and Games' (Toys, Sports & Body Movements), identify core vocabulary, and participate in collaborative smartboard games.",
          "dailyPlan": [
            {
              "day": "Monday (Day 1)",
              "focus": "Vocabulary Exploration: Ball, Teddy Bear",
              "warmUp": "Polly's Morning Song & Mascot Welcome Chant",
              "presentation": "Smartboard interactive visual flashcards with GIPHY animations & real photos (No emojis).",
              "practice": "Pair matching card drill & natural character pronunciation practice.",
              "production": "Role-play dialogue: Ask peers about ball.",
              "wrapUp": "Quick-fire exit ticket check before lineup."
            },
            {
              "day": "Wednesday (Day 2)",
              "focus": "Grammar & Phonics Focus (Short /ɪ/ in pin, sit; /g/, /k...)",
              "warmUp": "TPR Simon Says: Follow teacher's movement commands.",
              "presentation": "Interactive smartboard sorting and spelling drill.",
              "practice": "Baamboozle 4-Team Championship Round on Smartboard.",
              "production": "Student drawing portfolio & sentence builder.",
              "wrapUp": "Star badge award and team points celebration."
            }
          ],
          "teacherResources": {
            "physicalGames": [
              "Flyswatter Board Relay: Stick photo flashcards of Ball on the whiteboard. Two teams race to slap the called word.",
              "Magic Bag Mystery: Place real classroom props or word cards in a bag. Students feel without looking and describe the item."
            ],
            "smartboardActivities": [
              "Baamboozle 4-Team Interactive Arena for Fun and Games with mystery cards and sound effects.",
              "GIF & Real Photo Carousel Drill: Tap the moving GIPHY sticker to hear character pronunciation."
            ]
          }
        }
      },
      {
        "id": "stage1_u4",
        "number": 4,
        "title": "Making Things",
        "cefr": "Pre-A1",
        "theme": "Art, Craft, Shapes & Colors",
        "grammar": "2D shapes: circle, square, triangle / cut, fold, stick",
        "phonics": "Short /e/ in pen, red; Digraphs /sh/, /ch/",
        "vocabulary": [
          {
            "word": "Scissors",
            "meaning": "A tool used for cutting paper",
            "turkish": "Makas",
            "realPhoto": "https://images.unsplash.com/photo-1503792501406-2c40da09e1e2?w=600&auto=format&fit=crop&q=80",
            "gifUrl": "https://media.giphy.com/media/l41lFw057lAJQMwg0/giphy.gif",
            "characterVoice": "chase",
            "voiceLine": "Carefully cut along the dashed line!"
          },
          {
            "word": "Glue",
            "meaning": "A sticky substance used to join things",
            "turkish": "Yapıştırıcı",
            "realPhoto": "https://images.unsplash.com/photo-1586075010923-2dd4570fb338?w=600&auto=format&fit=crop&q=80",
            "gifUrl": "https://media.giphy.com/media/26BRv0ThflsDTjDUs/giphy.gif",
            "characterVoice": "polly",
            "voiceLine": "Stick the colorful shapes together!"
          },
          {
            "word": "Circle",
            "meaning": "A round geometric shape",
            "turkish": "Daire / Çember",
            "realPhoto": "https://images.unsplash.com/photo-1541701494587-cb58502866ab?w=600&auto=format&fit=crop&q=80",
            "gifUrl": "https://media.giphy.com/media/3o7TKMt1VVNkHV2PaE/giphy.gif",
            "characterVoice": "bluey",
            "voiceLine": "Draw a shiny yellow circle for the sun!"
          },
          {
            "word": "Square",
            "meaning": "A shape with four equal sides",
            "turkish": "Kare",
            "realPhoto": "https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?w=600&auto=format&fit=crop&q=80",
            "gifUrl": "https://media.giphy.com/media/3o7TKSjRrfIPjeiVyM/giphy.gif",
            "characterVoice": "peppa",
            "voiceLine": "Four straight sides make a nice square house!"
          },
          {
            "word": "Triangle",
            "meaning": "A shape with three sides and angles",
            "turkish": "Üçgen",
            "realPhoto": "https://images.unsplash.com/photo-1509228468518-180dd4864904?w=600&auto=format&fit=crop&q=80",
            "gifUrl": "https://media.giphy.com/media/26FPJGjhefSJuaR0Y/giphy.gif",
            "characterVoice": "polly",
            "voiceLine": "Three points make a pointy triangle roof!"
          },
          {
            "word": "Paint",
            "meaning": "Coloured liquid used for art",
            "turkish": "Boya",
            "realPhoto": "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=600&auto=format&fit=crop&q=80",
            "gifUrl": "https://media.giphy.com/media/13HgwGsXF0aiGY/giphy.gif",
            "characterVoice": "bluey",
            "voiceLine": "Dip the brush and splash bright colours!"
          }
        ],
        "baamboozleQuestions": [
          {
            "q": "What is the English word for 'Makas'?",
            "a": "Scissors",
            "pts": 15,
            "type": "question"
          },
          {
            "q": "MYSTERY BOX: Polly found bonus treasure for your team!",
            "a": "You won 20 points!",
            "pts": 20,
            "type": "bonus"
          },
          {
            "q": "TPR CHALLENGE: Act out the theme 'Art, Craft, Shapes & Colors' for 5 seconds!",
            "a": "Demonstrated by team with cheers",
            "pts": 10,
            "type": "action"
          },
          {
            "q": "How do you spell the word 'Glue'?",
            "a": "G - L - U - E",
            "pts": 15,
            "type": "question"
          },
          {
            "q": "OOPS! Peppa slipped in a muddy puddle! Lose 10 points.",
            "a": "Lost 10 points!",
            "pts": -10,
            "type": "penalty"
          },
          {
            "q": "TEAM ACTION: Stand up and give your teammates a high five!",
            "a": "High fives completed!",
            "pts": 10,
            "type": "action"
          },
          {
            "q": "STEAL! Steal 15 points from another team!",
            "a": "15 points transferred!",
            "pts": 15,
            "type": "steal"
          },
          {
            "q": "Name three things connected to 'Making Things'!",
            "a": "Scissors, Glue, and Circle",
            "pts": 20,
            "type": "question"
          },
          {
            "q": "Say 'Good job team!' in a funny robot voice!",
            "a": "Beep boop performed!",
            "pts": 10,
            "type": "action"
          },
          {
            "q": "SWAP SCORES! Swap points with the leading team!",
            "a": "Scores swapped!",
            "pts": 0,
            "type": "swap"
          },
          {
            "q": "What does 'Circle' mean in Turkish?",
            "a": "Daire / Çember",
            "pts": 15,
            "type": "question"
          },
          {
            "q": "GALAXY WIN: Bluey awards 25 bonus points!",
            "a": "Gained 25 points!",
            "pts": 25,
            "type": "bonus"
          },
          {
            "q": "Use the word 'Scissors' in an English sentence!",
            "a": "Example: I like this scissors.",
            "pts": 20,
            "type": "question"
          },
          {
            "q": "BLACK HOLE: Lose 15 points into space!",
            "a": "Lost 15 points!",
            "pts": -15,
            "type": "penalty"
          },
          {
            "q": "DOUBLE BONUS: Answer correctly: Is school fun?",
            "a": "Yes, learning with friends is super fun!",
            "pts": 30,
            "type": "question"
          },
          {
            "q": "TEAM VICTORY: Everyone shout 'Polly!' together!",
            "a": "Polly!",
            "pts": 10,
            "type": "action"
          }
        ],
        "lessonPlan": {
          "weeklyGoal": "Students can communicate confidently about 'Making Things' (Art, Craft, Shapes & Colors), identify core vocabulary, and participate in collaborative smartboard games.",
          "dailyPlan": [
            {
              "day": "Monday (Day 1)",
              "focus": "Vocabulary Exploration: Scissors, Glue",
              "warmUp": "Polly's Morning Song & Mascot Welcome Chant",
              "presentation": "Smartboard interactive visual flashcards with GIPHY animations & real photos (No emojis).",
              "practice": "Pair matching card drill & natural character pronunciation practice.",
              "production": "Role-play dialogue: Ask peers about scissors.",
              "wrapUp": "Quick-fire exit ticket check before lineup."
            },
            {
              "day": "Wednesday (Day 2)",
              "focus": "Grammar & Phonics Focus (Short /e/ in pen, red; Digraph...)",
              "warmUp": "TPR Simon Says: Follow teacher's movement commands.",
              "presentation": "Interactive smartboard sorting and spelling drill.",
              "practice": "Baamboozle 4-Team Championship Round on Smartboard.",
              "production": "Student drawing portfolio & sentence builder.",
              "wrapUp": "Star badge award and team points celebration."
            }
          ],
          "teacherResources": {
            "physicalGames": [
              "Flyswatter Board Relay: Stick photo flashcards of Scissors on the whiteboard. Two teams race to slap the called word.",
              "Magic Bag Mystery: Place real classroom props or word cards in a bag. Students feel without looking and describe the item."
            ],
            "smartboardActivities": [
              "Baamboozle 4-Team Interactive Arena for Making Things with mystery cards and sound effects.",
              "GIF & Real Photo Carousel Drill: Tap the moving GIPHY sticker to hear character pronunciation."
            ]
          }
        }
      },
      {
        "id": "stage1_u5",
        "number": 5,
        "title": "On the Farm",
        "cefr": "Pre-A1",
        "theme": "Farm Animals, Animal Sounds & Crops",
        "grammar": "Is it a cow? Yes, it is / No, it isn't / There is, there are",
        "phonics": "Short /ɒ/ in dog, pot; Vowels /a/, /e/, /i/, /o/, /u/",
        "vocabulary": [
          {
            "word": "Cow",
            "meaning": "A large farm animal that gives milk",
            "turkish": "İnek",
            "realPhoto": "https://images.unsplash.com/photo-1570042225831-d98fa7577f1e?w=600&auto=format&fit=crop&q=80",
            "gifUrl": "https://media.giphy.com/media/3o7TKSjRrfIPjeiVyM/giphy.gif",
            "characterVoice": "peppa",
            "voiceLine": "Moo moo! The cow eats fresh green grass!"
          },
          {
            "word": "Sheep",
            "meaning": "A woolly farm animal",
            "turkish": "Koyun",
            "realPhoto": "https://images.unsplash.com/photo-1484557052118-f32bd25b45b5?w=600&auto=format&fit=crop&q=80",
            "gifUrl": "https://media.giphy.com/media/26FPJGjhefSJuaR0Y/giphy.gif",
            "characterVoice": "bluey",
            "voiceLine": "Baa baa! The sheep has soft fluffy fleece!"
          },
          {
            "word": "Horse",
            "meaning": "A strong farm animal with hooves",
            "turkish": "At",
            "realPhoto": "https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?w=600&auto=format&fit=crop&q=80",
            "gifUrl": "https://media.giphy.com/media/13HgwGsXF0aiGY/giphy.gif",
            "characterVoice": "chase",
            "voiceLine": "Neigh! Gallop across the farm meadow!"
          },
          {
            "word": "Duck",
            "meaning": "A bird that swims and quacks",
            "turkish": "Ördek",
            "realPhoto": "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=600&auto=format&fit=crop&q=80",
            "gifUrl": "https://media.giphy.com/media/l41lFw057lAJQMwg0/giphy.gif",
            "characterVoice": "peppa",
            "voiceLine": "Quack quack! The ducks paddle in the pond!"
          },
          {
            "word": "Hen",
            "meaning": "A female chicken that lays eggs",
            "turkish": "Tavuk",
            "realPhoto": "https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?w=600&auto=format&fit=crop&q=80",
            "gifUrl": "https://media.giphy.com/media/3o7TKDkDbIDJieKbVm/giphy.gif",
            "characterVoice": "polly",
            "voiceLine": "Cluck cluck! Look at the fresh farm eggs!"
          },
          {
            "word": "Pig",
            "meaning": "A pink farm animal that loves mud",
            "turkish": "Domuzcuk",
            "realPhoto": "https://images.unsplash.com/photo-1516467508483-a7212febe31a?w=600&auto=format&fit=crop&q=80",
            "gifUrl": "https://media.giphy.com/media/xT0xeJpnrWC4XWblEk/giphy.gif",
            "characterVoice": "peppa",
            "voiceLine": "Oink oink! Peppa loves jumping in muddy puddles!"
          }
        ],
        "baamboozleQuestions": [
          {
            "q": "What is the English word for 'İnek'?",
            "a": "Cow",
            "pts": 15,
            "type": "question"
          },
          {
            "q": "MYSTERY BOX: Polly found bonus treasure for your team!",
            "a": "You won 20 points!",
            "pts": 20,
            "type": "bonus"
          },
          {
            "q": "TPR CHALLENGE: Act out the theme 'Farm Animals, Animal Sounds & Crops' for 5 seconds!",
            "a": "Demonstrated by team with cheers",
            "pts": 10,
            "type": "action"
          },
          {
            "q": "How do you spell the word 'Sheep'?",
            "a": "S - H - E - E - P",
            "pts": 15,
            "type": "question"
          },
          {
            "q": "OOPS! Peppa slipped in a muddy puddle! Lose 10 points.",
            "a": "Lost 10 points!",
            "pts": -10,
            "type": "penalty"
          },
          {
            "q": "TEAM ACTION: Stand up and give your teammates a high five!",
            "a": "High fives completed!",
            "pts": 10,
            "type": "action"
          },
          {
            "q": "STEAL! Steal 15 points from another team!",
            "a": "15 points transferred!",
            "pts": 15,
            "type": "steal"
          },
          {
            "q": "Name three things connected to 'On the Farm'!",
            "a": "Cow, Sheep, and Horse",
            "pts": 20,
            "type": "question"
          },
          {
            "q": "Say 'Good job team!' in a funny robot voice!",
            "a": "Beep boop performed!",
            "pts": 10,
            "type": "action"
          },
          {
            "q": "SWAP SCORES! Swap points with the leading team!",
            "a": "Scores swapped!",
            "pts": 0,
            "type": "swap"
          },
          {
            "q": "What does 'Horse' mean in Turkish?",
            "a": "At",
            "pts": 15,
            "type": "question"
          },
          {
            "q": "GALAXY WIN: Bluey awards 25 bonus points!",
            "a": "Gained 25 points!",
            "pts": 25,
            "type": "bonus"
          },
          {
            "q": "Use the word 'Cow' in an English sentence!",
            "a": "Example: I like this cow.",
            "pts": 20,
            "type": "question"
          },
          {
            "q": "BLACK HOLE: Lose 15 points into space!",
            "a": "Lost 15 points!",
            "pts": -15,
            "type": "penalty"
          },
          {
            "q": "DOUBLE BONUS: Answer correctly: Is school fun?",
            "a": "Yes, learning with friends is super fun!",
            "pts": 30,
            "type": "question"
          },
          {
            "q": "TEAM VICTORY: Everyone shout 'Polly!' together!",
            "a": "Polly!",
            "pts": 10,
            "type": "action"
          }
        ],
        "lessonPlan": {
          "weeklyGoal": "Students can communicate confidently about 'On the Farm' (Farm Animals, Animal Sounds & Crops), identify core vocabulary, and participate in collaborative smartboard games.",
          "dailyPlan": [
            {
              "day": "Monday (Day 1)",
              "focus": "Vocabulary Exploration: Cow, Sheep",
              "warmUp": "Polly's Morning Song & Mascot Welcome Chant",
              "presentation": "Smartboard interactive visual flashcards with GIPHY animations & real photos (No emojis).",
              "practice": "Pair matching card drill & natural character pronunciation practice.",
              "production": "Role-play dialogue: Ask peers about cow.",
              "wrapUp": "Quick-fire exit ticket check before lineup."
            },
            {
              "day": "Wednesday (Day 2)",
              "focus": "Grammar & Phonics Focus (Short /ɒ/ in dog, pot; Vowels ...)",
              "warmUp": "TPR Simon Says: Follow teacher's movement commands.",
              "presentation": "Interactive smartboard sorting and spelling drill.",
              "practice": "Baamboozle 4-Team Championship Round on Smartboard.",
              "production": "Student drawing portfolio & sentence builder.",
              "wrapUp": "Star badge award and team points celebration."
            }
          ],
          "teacherResources": {
            "physicalGames": [
              "Flyswatter Board Relay: Stick photo flashcards of Cow on the whiteboard. Two teams race to slap the called word.",
              "Magic Bag Mystery: Place real classroom props or word cards in a bag. Students feel without looking and describe the item."
            ],
            "smartboardActivities": [
              "Baamboozle 4-Team Interactive Arena for On the Farm with mystery cards and sound effects.",
              "GIF & Real Photo Carousel Drill: Tap the moving GIPHY sticker to hear character pronunciation."
            ]
          }
        }
      },
      {
        "id": "stage1_u6",
        "number": 6,
        "title": "My Five Senses",
        "cefr": "Pre-A1",
        "theme": "The 5 Senses, Body Parts & Health",
        "grammar": "I can see/hear/smell/taste/touch with my...",
        "phonics": "Short /ʌ/ in sun, cup; Initial /h/, /n/, /m/",
        "vocabulary": [
          {
            "word": "Eyes",
            "meaning": "The organs in your face for seeing",
            "turkish": "Gözler",
            "realPhoto": "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=600&auto=format&fit=crop&q=80",
            "gifUrl": "https://media.giphy.com/media/l41lI4bYmcsPJX9Go/giphy.gif",
            "characterVoice": "polly",
            "voiceLine": "I can see colorful butterflies with my eyes!"
          },
          {
            "word": "Ears",
            "meaning": "The organs on your head for hearing",
            "turkish": "Kulaklar",
            "realPhoto": "https://images.unsplash.com/photo-1544717305-2782549b5136?w=600&auto=format&fit=crop&q=80",
            "gifUrl": "https://media.giphy.com/media/3o7TKDkDbIDJieKbVm/giphy.gif",
            "characterVoice": "chase",
            "voiceLine": "These big ears hear every rescue call!"
          },
          {
            "word": "Nose",
            "meaning": "The organ on your face for smelling",
            "turkish": "Burun",
            "realPhoto": "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=600&auto=format&fit=crop&q=80",
            "gifUrl": "https://media.giphy.com/media/26u4cqiYI30juCOGY/giphy.gif",
            "characterVoice": "bluey",
            "voiceLine": "Sniff sniff! Mmm, freshly baked pizza!"
          },
          {
            "word": "Mouth",
            "meaning": "Used for eating, drinking and speaking",
            "turkish": "Ağız",
            "realPhoto": "https://images.unsplash.com/photo-1485546246426-74dc88dec4d9?w=600&auto=format&fit=crop&q=80",
            "gifUrl": "https://media.giphy.com/media/26FLdm964upq8108U/giphy.gif",
            "characterVoice": "peppa",
            "voiceLine": "Taste sweet red strawberries with your mouth!"
          },
          {
            "word": "Hands",
            "meaning": "Body parts with fingers for touching",
            "turkish": "Eller",
            "realPhoto": "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=600&auto=format&fit=crop&q=80",
            "gifUrl": "https://media.giphy.com/media/3o7TKMt1VVNkHV2PaE/giphy.gif",
            "characterVoice": "polly",
            "voiceLine": "Clap your hands together to the music!"
          },
          {
            "word": "Feet",
            "meaning": "Lower extremities for walking and jumping",
            "turkish": "Ayaklar",
            "realPhoto": "https://images.unsplash.com/photo-1519689680058-324335c77eba?w=600&auto=format&fit=crop&q=80",
            "gifUrl": "https://media.giphy.com/media/3o6ZsU7C4QQca8CLjy/giphy.gif",
            "characterVoice": "bluey",
            "voiceLine": "Stomp your feet! Stomp stomp stomp!"
          }
        ],
        "baamboozleQuestions": [
          {
            "q": "What is the English word for 'Gözler'?",
            "a": "Eyes",
            "pts": 15,
            "type": "question"
          },
          {
            "q": "MYSTERY BOX: Polly found bonus treasure for your team!",
            "a": "You won 20 points!",
            "pts": 20,
            "type": "bonus"
          },
          {
            "q": "TPR CHALLENGE: Act out the theme 'The 5 Senses, Body Parts & Health' for 5 seconds!",
            "a": "Demonstrated by team with cheers",
            "pts": 10,
            "type": "action"
          },
          {
            "q": "How do you spell the word 'Ears'?",
            "a": "E - A - R - S",
            "pts": 15,
            "type": "question"
          },
          {
            "q": "OOPS! Peppa slipped in a muddy puddle! Lose 10 points.",
            "a": "Lost 10 points!",
            "pts": -10,
            "type": "penalty"
          },
          {
            "q": "TEAM ACTION: Stand up and give your teammates a high five!",
            "a": "High fives completed!",
            "pts": 10,
            "type": "action"
          },
          {
            "q": "STEAL! Steal 15 points from another team!",
            "a": "15 points transferred!",
            "pts": 15,
            "type": "steal"
          },
          {
            "q": "Name three things connected to 'My Five Senses'!",
            "a": "Eyes, Ears, and Nose",
            "pts": 20,
            "type": "question"
          },
          {
            "q": "Say 'Good job team!' in a funny robot voice!",
            "a": "Beep boop performed!",
            "pts": 10,
            "type": "action"
          },
          {
            "q": "SWAP SCORES! Swap points with the leading team!",
            "a": "Scores swapped!",
            "pts": 0,
            "type": "swap"
          },
          {
            "q": "What does 'Nose' mean in Turkish?",
            "a": "Burun",
            "pts": 15,
            "type": "question"
          },
          {
            "q": "GALAXY WIN: Bluey awards 25 bonus points!",
            "a": "Gained 25 points!",
            "pts": 25,
            "type": "bonus"
          },
          {
            "q": "Use the word 'Eyes' in an English sentence!",
            "a": "Example: I like this eyes.",
            "pts": 20,
            "type": "question"
          },
          {
            "q": "BLACK HOLE: Lose 15 points into space!",
            "a": "Lost 15 points!",
            "pts": -15,
            "type": "penalty"
          },
          {
            "q": "DOUBLE BONUS: Answer correctly: Is school fun?",
            "a": "Yes, learning with friends is super fun!",
            "pts": 30,
            "type": "question"
          },
          {
            "q": "TEAM VICTORY: Everyone shout 'Polly!' together!",
            "a": "Polly!",
            "pts": 10,
            "type": "action"
          }
        ],
        "lessonPlan": {
          "weeklyGoal": "Students can communicate confidently about 'My Five Senses' (The 5 Senses, Body Parts & Health), identify core vocabulary, and participate in collaborative smartboard games.",
          "dailyPlan": [
            {
              "day": "Monday (Day 1)",
              "focus": "Vocabulary Exploration: Eyes, Ears",
              "warmUp": "Polly's Morning Song & Mascot Welcome Chant",
              "presentation": "Smartboard interactive visual flashcards with GIPHY animations & real photos (No emojis).",
              "practice": "Pair matching card drill & natural character pronunciation practice.",
              "production": "Role-play dialogue: Ask peers about eyes.",
              "wrapUp": "Quick-fire exit ticket check before lineup."
            },
            {
              "day": "Wednesday (Day 2)",
              "focus": "Grammar & Phonics Focus (Short /ʌ/ in sun, cup; Initial...)",
              "warmUp": "TPR Simon Says: Follow teacher's movement commands.",
              "presentation": "Interactive smartboard sorting and spelling drill.",
              "practice": "Baamboozle 4-Team Championship Round on Smartboard.",
              "production": "Student drawing portfolio & sentence builder.",
              "wrapUp": "Star badge award and team points celebration."
            }
          ],
          "teacherResources": {
            "physicalGames": [
              "Flyswatter Board Relay: Stick photo flashcards of Eyes on the whiteboard. Two teams race to slap the called word.",
              "Magic Bag Mystery: Place real classroom props or word cards in a bag. Students feel without looking and describe the item."
            ],
            "smartboardActivities": [
              "Baamboozle 4-Team Interactive Arena for My Five Senses with mystery cards and sound effects.",
              "GIF & Real Photo Carousel Drill: Tap the moving GIPHY sticker to hear character pronunciation."
            ]
          }
        }
      },
      {
        "id": "stage1_u7",
        "number": 7,
        "title": "Let's Go! (Transport)",
        "cefr": "Pre-A1",
        "theme": "Vehicles, Journeys & Road Safety",
        "grammar": "How do you go to school? By bus, bicycle, car, train",
        "phonics": "Initial blends /tr/, /pl/, /st/; Digraphs /ch/, /sh/",
        "vocabulary": [
          {
            "word": "School Bus",
            "meaning": "A large yellow vehicle for school students",
            "turkish": "Okul otobüsü",
            "realPhoto": "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?w=600&auto=format&fit=crop&q=80",
            "gifUrl": "https://media.giphy.com/media/l0HlHFRbmaZtBRhXG/giphy.gif",
            "characterVoice": "peppa",
            "voiceLine": "The wheels on the bus go round and round!"
          },
          {
            "word": "Airplane",
            "meaning": "A vehicle with wings that flies in sky",
            "turkish": "Uçak",
            "realPhoto": "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=600&auto=format&fit=crop&q=80",
            "gifUrl": "https://media.giphy.com/media/3o7btPCcdNniyf0ArS/giphy.gif",
            "characterVoice": "chase",
            "voiceLine": "Skye and Chase zoom high through the clouds!"
          },
          {
            "word": "Bicycle",
            "meaning": "A two-wheel pedal vehicle",
            "turkish": "Bisiklet",
            "realPhoto": "https://images.unsplash.com/photo-1485965120184-e220f721d03e?w=600&auto=format&fit=crop&q=80",
            "gifUrl": "https://media.giphy.com/media/3o7TKR1bMmR08vGZz2/giphy.gif",
            "characterVoice": "bluey",
            "voiceLine": "Ring the bell! Ding ding! Let us cycle!"
          },
          {
            "word": "Car",
            "meaning": "A road vehicle with four wheels",
            "turkish": "Araba",
            "realPhoto": "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=600&auto=format&fit=crop&q=80",
            "gifUrl": "https://media.giphy.com/media/26FPJGjhefSJuaR0Y/giphy.gif",
            "characterVoice": "chase",
            "voiceLine": "Buckle your seatbelt and be safe!"
          },
          {
            "word": "Train",
            "meaning": "Connected railway carriages on tracks",
            "turkish": "Tren",
            "realPhoto": "https://images.unsplash.com/photo-1474487548417-781cb71495f3?w=600&auto=format&fit=crop&q=80",
            "gifUrl": "https://media.giphy.com/media/l41lFw057lAJQMwg0/giphy.gif",
            "characterVoice": "polly",
            "voiceLine": "Choo choo! The train is on track!"
          },
          {
            "word": "Boat",
            "meaning": "A water vehicle for sailing rivers and seas",
            "turkish": "Tekne / Sandal",
            "realPhoto": "https://images.unsplash.com/photo-1505705694340-019e1e335916?w=600&auto=format&fit=crop&q=80",
            "gifUrl": "https://media.giphy.com/media/26FPy3QZLnLCyHIJa/giphy.gif",
            "characterVoice": "peppa",
            "voiceLine": "Grandpa Pig sailing his little wooden boat!"
          }
        ],
        "baamboozleQuestions": [
          {
            "q": "What is the English word for 'Okul otobüsü'?",
            "a": "School Bus",
            "pts": 15,
            "type": "question"
          },
          {
            "q": "MYSTERY BOX: Polly found bonus treasure for your team!",
            "a": "You won 20 points!",
            "pts": 20,
            "type": "bonus"
          },
          {
            "q": "TPR CHALLENGE: Act out the theme 'Vehicles, Journeys & Road Safety' for 5 seconds!",
            "a": "Demonstrated by team with cheers",
            "pts": 10,
            "type": "action"
          },
          {
            "q": "How do you spell the word 'Airplane'?",
            "a": "A - I - R - P - L - A - N - E",
            "pts": 15,
            "type": "question"
          },
          {
            "q": "OOPS! Peppa slipped in a muddy puddle! Lose 10 points.",
            "a": "Lost 10 points!",
            "pts": -10,
            "type": "penalty"
          },
          {
            "q": "TEAM ACTION: Stand up and give your teammates a high five!",
            "a": "High fives completed!",
            "pts": 10,
            "type": "action"
          },
          {
            "q": "STEAL! Steal 15 points from another team!",
            "a": "15 points transferred!",
            "pts": 15,
            "type": "steal"
          },
          {
            "q": "Name three things connected to 'Let's Go! (Transport)'!",
            "a": "School Bus, Airplane, and Bicycle",
            "pts": 20,
            "type": "question"
          },
          {
            "q": "Say 'Good job team!' in a funny robot voice!",
            "a": "Beep boop performed!",
            "pts": 10,
            "type": "action"
          },
          {
            "q": "SWAP SCORES! Swap points with the leading team!",
            "a": "Scores swapped!",
            "pts": 0,
            "type": "swap"
          },
          {
            "q": "What does 'Bicycle' mean in Turkish?",
            "a": "Bisiklet",
            "pts": 15,
            "type": "question"
          },
          {
            "q": "GALAXY WIN: Bluey awards 25 bonus points!",
            "a": "Gained 25 points!",
            "pts": 25,
            "type": "bonus"
          },
          {
            "q": "Use the word 'School Bus' in an English sentence!",
            "a": "Example: I like this school bus.",
            "pts": 20,
            "type": "question"
          },
          {
            "q": "BLACK HOLE: Lose 15 points into space!",
            "a": "Lost 15 points!",
            "pts": -15,
            "type": "penalty"
          },
          {
            "q": "DOUBLE BONUS: Answer correctly: Is school fun?",
            "a": "Yes, learning with friends is super fun!",
            "pts": 30,
            "type": "question"
          },
          {
            "q": "TEAM VICTORY: Everyone shout 'Polly!' together!",
            "a": "Polly!",
            "pts": 10,
            "type": "action"
          }
        ],
        "lessonPlan": {
          "weeklyGoal": "Students can communicate confidently about 'Let's Go! (Transport)' (Vehicles, Journeys & Road Safety), identify core vocabulary, and participate in collaborative smartboard games.",
          "dailyPlan": [
            {
              "day": "Monday (Day 1)",
              "focus": "Vocabulary Exploration: School Bus, Airplane",
              "warmUp": "Polly's Morning Song & Mascot Welcome Chant",
              "presentation": "Smartboard interactive visual flashcards with GIPHY animations & real photos (No emojis).",
              "practice": "Pair matching card drill & natural character pronunciation practice.",
              "production": "Role-play dialogue: Ask peers about school bus.",
              "wrapUp": "Quick-fire exit ticket check before lineup."
            },
            {
              "day": "Wednesday (Day 2)",
              "focus": "Grammar & Phonics Focus (Initial blends /tr/, /pl/, /st...)",
              "warmUp": "TPR Simon Says: Follow teacher's movement commands.",
              "presentation": "Interactive smartboard sorting and spelling drill.",
              "practice": "Baamboozle 4-Team Championship Round on Smartboard.",
              "production": "Student drawing portfolio & sentence builder.",
              "wrapUp": "Star badge award and team points celebration."
            }
          ],
          "teacherResources": {
            "physicalGames": [
              "Flyswatter Board Relay: Stick photo flashcards of School Bus on the whiteboard. Two teams race to slap the called word.",
              "Magic Bag Mystery: Place real classroom props or word cards in a bag. Students feel without looking and describe the item."
            ],
            "smartboardActivities": [
              "Baamboozle 4-Team Interactive Arena for Let's Go! (Transport) with mystery cards and sound effects.",
              "GIF & Real Photo Carousel Drill: Tap the moving GIPHY sticker to hear character pronunciation."
            ]
          }
        }
      },
      {
        "id": "stage1_u8",
        "number": 8,
        "title": "Wonderful Water",
        "cefr": "Pre-A1",
        "theme": "Water, Weather, Science & Sea Life",
        "grammar": "Present simple: It is raining / Float and sink",
        "phonics": "Digraphs /th/, /wh/; Liquid consonants /l/, /r/, /w/",
        "vocabulary": [
          {
            "word": "Rain",
            "meaning": "Water drops falling from clouds",
            "turkish": "Yağmur",
            "realPhoto": "https://images.unsplash.com/photo-1519692933481-e162a57d6721?w=600&auto=format&fit=crop&q=80",
            "gifUrl": "https://media.giphy.com/media/3o6ZsU7C4QQca8CLjy/giphy.gif",
            "characterVoice": "peppa",
            "voiceLine": "Rain rain go away, come again another day!"
          },
          {
            "word": "Fish",
            "meaning": "A creature swimming in water with fins",
            "turkish": "Balık",
            "realPhoto": "https://images.unsplash.com/photo-1524704654690-b56c05c78a00?w=600&auto=format&fit=crop&q=80",
            "gifUrl": "https://media.giphy.com/media/26FPy3QZLnLCyHIJa/giphy.gif",
            "characterVoice": "polly",
            "voiceLine": "Look at the shiny golden fish swimming!"
          },
          {
            "word": "Sea",
            "meaning": "A large body of blue salty water",
            "turkish": "Deniz",
            "realPhoto": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&auto=format&fit=crop&q=80",
            "gifUrl": "https://media.giphy.com/media/xT0xeJpnrWC4XWblEk/giphy.gif",
            "characterVoice": "bluey",
            "voiceLine": "Listen to the crashing blue sea waves!"
          },
          {
            "word": "Puddle",
            "meaning": "A small pool of rainwater on ground",
            "turkish": "Su birikintisi",
            "realPhoto": "https://images.unsplash.com/photo-1515694346937-94d85e41e6f0?w=600&auto=format&fit=crop&q=80",
            "gifUrl": "https://media.giphy.com/media/3o7TKDkDbIDJieKbVm/giphy.gif",
            "characterVoice": "peppa",
            "voiceLine": "Splish splash! Peppa loves muddy puddles!"
          },
          {
            "word": "Cloud",
            "meaning": "A white fluffy water mass in the sky",
            "turkish": "Bulut",
            "realPhoto": "https://images.unsplash.com/photo-1534088568595-a066f410bcda?w=600&auto=format&fit=crop&q=80",
            "gifUrl": "https://media.giphy.com/media/26u4cqiYI30juCOGY/giphy.gif",
            "characterVoice": "polly",
            "voiceLine": "Fluffy white clouds sailing across the sky!"
          },
          {
            "word": "Ice",
            "meaning": "Cold solid frozen water",
            "turkish": "Buz",
            "realPhoto": "https://images.unsplash.com/photo-1518173946687-a4c8a383392e?w=600&auto=format&fit=crop&q=80",
            "gifUrl": "https://media.giphy.com/media/13HgwGsXF0aiGY/giphy.gif",
            "characterVoice": "chase",
            "voiceLine": "Brrr! The ice is slippery and freezing!"
          }
        ],
        "baamboozleQuestions": [
          {
            "q": "What is the English word for 'Yağmur'?",
            "a": "Rain",
            "pts": 15,
            "type": "question"
          },
          {
            "q": "MYSTERY BOX: Polly found bonus treasure for your team!",
            "a": "You won 20 points!",
            "pts": 20,
            "type": "bonus"
          },
          {
            "q": "TPR CHALLENGE: Act out the theme 'Water, Weather, Science & Sea Life' for 5 seconds!",
            "a": "Demonstrated by team with cheers",
            "pts": 10,
            "type": "action"
          },
          {
            "q": "How do you spell the word 'Fish'?",
            "a": "F - I - S - H",
            "pts": 15,
            "type": "question"
          },
          {
            "q": "OOPS! Peppa slipped in a muddy puddle! Lose 10 points.",
            "a": "Lost 10 points!",
            "pts": -10,
            "type": "penalty"
          },
          {
            "q": "TEAM ACTION: Stand up and give your teammates a high five!",
            "a": "High fives completed!",
            "pts": 10,
            "type": "action"
          },
          {
            "q": "STEAL! Steal 15 points from another team!",
            "a": "15 points transferred!",
            "pts": 15,
            "type": "steal"
          },
          {
            "q": "Name three things connected to 'Wonderful Water'!",
            "a": "Rain, Fish, and Sea",
            "pts": 20,
            "type": "question"
          },
          {
            "q": "Say 'Good job team!' in a funny robot voice!",
            "a": "Beep boop performed!",
            "pts": 10,
            "type": "action"
          },
          {
            "q": "SWAP SCORES! Swap points with the leading team!",
            "a": "Scores swapped!",
            "pts": 0,
            "type": "swap"
          },
          {
            "q": "What does 'Sea' mean in Turkish?",
            "a": "Deniz",
            "pts": 15,
            "type": "question"
          },
          {
            "q": "GALAXY WIN: Bluey awards 25 bonus points!",
            "a": "Gained 25 points!",
            "pts": 25,
            "type": "bonus"
          },
          {
            "q": "Use the word 'Rain' in an English sentence!",
            "a": "Example: I like this rain.",
            "pts": 20,
            "type": "question"
          },
          {
            "q": "BLACK HOLE: Lose 15 points into space!",
            "a": "Lost 15 points!",
            "pts": -15,
            "type": "penalty"
          },
          {
            "q": "DOUBLE BONUS: Answer correctly: Is school fun?",
            "a": "Yes, learning with friends is super fun!",
            "pts": 30,
            "type": "question"
          },
          {
            "q": "TEAM VICTORY: Everyone shout 'Polly!' together!",
            "a": "Polly!",
            "pts": 10,
            "type": "action"
          }
        ],
        "lessonPlan": {
          "weeklyGoal": "Students can communicate confidently about 'Wonderful Water' (Water, Weather, Science & Sea Life), identify core vocabulary, and participate in collaborative smartboard games.",
          "dailyPlan": [
            {
              "day": "Monday (Day 1)",
              "focus": "Vocabulary Exploration: Rain, Fish",
              "warmUp": "Polly's Morning Song & Mascot Welcome Chant",
              "presentation": "Smartboard interactive visual flashcards with GIPHY animations & real photos (No emojis).",
              "practice": "Pair matching card drill & natural character pronunciation practice.",
              "production": "Role-play dialogue: Ask peers about rain.",
              "wrapUp": "Quick-fire exit ticket check before lineup."
            },
            {
              "day": "Wednesday (Day 2)",
              "focus": "Grammar & Phonics Focus (Digraphs /th/, /wh/; Liquid co...)",
              "warmUp": "TPR Simon Says: Follow teacher's movement commands.",
              "presentation": "Interactive smartboard sorting and spelling drill.",
              "practice": "Baamboozle 4-Team Championship Round on Smartboard.",
              "production": "Student drawing portfolio & sentence builder.",
              "wrapUp": "Star badge award and team points celebration."
            }
          ],
          "teacherResources": {
            "physicalGames": [
              "Flyswatter Board Relay: Stick photo flashcards of Rain on the whiteboard. Two teams race to slap the called word.",
              "Magic Bag Mystery: Place real classroom props or word cards in a bag. Students feel without looking and describe the item."
            ],
            "smartboardActivities": [
              "Baamboozle 4-Team Interactive Arena for Wonderful Water with mystery cards and sound effects.",
              "GIF & Real Photo Carousel Drill: Tap the moving GIPHY sticker to hear character pronunciation."
            ]
          }
        }
      },
      {
        "id": "stage1_u9",
        "number": 9,
        "title": "City Places",
        "cefr": "Pre-A1",
        "theme": "Neighborhood, Community & Shops",
        "grammar": "Where is the park? Next to / In front of / Behind",
        "phonics": "Revision of short vowels and initial consonants",
        "vocabulary": [
          {
            "word": "Park",
            "meaning": "A public green area for fun and games",
            "turkish": "Park",
            "realPhoto": "https://images.unsplash.com/photo-1519331379826-f10be5486c6f?w=600&auto=format&fit=crop&q=80",
            "gifUrl": "https://media.giphy.com/media/3o7TKDkDbIDJieKbVm/giphy.gif",
            "characterVoice": "bluey",
            "voiceLine": "Let us swing and slide at the sunny park!"
          },
          {
            "word": "Hospital",
            "meaning": "A place where medical staff help people",
            "turkish": "Hastane",
            "realPhoto": "https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?w=600&auto=format&fit=crop&q=80",
            "gifUrl": "https://media.giphy.com/media/26FPJGjhefSJuaR0Y/giphy.gif",
            "characterVoice": "chase",
            "voiceLine": "The doctors and nurses are helping everyone!"
          },
          {
            "word": "Supermarket",
            "meaning": "A large food and goods store",
            "turkish": "Süpermarket",
            "realPhoto": "https://images.unsplash.com/photo-1578916171728-46686eac8d58?w=600&auto=format&fit=crop&q=80",
            "gifUrl": "https://media.giphy.com/media/l41lFw057lAJQMwg0/giphy.gif",
            "characterVoice": "peppa",
            "voiceLine": "Put yummy apples and bread into the trolley!"
          },
          {
            "word": "School",
            "meaning": "A place where children learn together",
            "turkish": "Okul",
            "realPhoto": "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=600&auto=format&fit=crop&q=80",
            "gifUrl": "https://media.giphy.com/media/l0HlHFRbmaZtBRhXG/giphy.gif",
            "characterVoice": "polly",
            "voiceLine": "Welcome back to school, my dear friends!"
          },
          {
            "word": "Playground",
            "meaning": "An outdoor area with swings and slides",
            "turkish": "Oyun alanı",
            "realPhoto": "https://images.unsplash.com/photo-1562774053-701939374585?w=600&auto=format&fit=crop&q=80",
            "gifUrl": "https://media.giphy.com/media/3o7btPCcdNniyf0ArS/giphy.gif",
            "characterVoice": "bluey",
            "voiceLine": "Race to the top of the climbing frame!"
          },
          {
            "word": "Library",
            "meaning": "A quiet building with books to read",
            "turkish": "Kütüphane",
            "realPhoto": "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?w=600&auto=format&fit=crop&q=80",
            "gifUrl": "https://media.giphy.com/media/13HgwGsXF0aiGY/giphy.gif",
            "characterVoice": "polly",
            "voiceLine": "Quiet please! Discover great adventure stories!"
          }
        ],
        "baamboozleQuestions": [
          {
            "q": "What is the English word for 'Park'?",
            "a": "Park",
            "pts": 15,
            "type": "question"
          },
          {
            "q": "MYSTERY BOX: Polly found bonus treasure for your team!",
            "a": "You won 20 points!",
            "pts": 20,
            "type": "bonus"
          },
          {
            "q": "TPR CHALLENGE: Act out the theme 'Neighborhood, Community & Shops' for 5 seconds!",
            "a": "Demonstrated by team with cheers",
            "pts": 10,
            "type": "action"
          },
          {
            "q": "How do you spell the word 'Hospital'?",
            "a": "H - O - S - P - I - T - A - L",
            "pts": 15,
            "type": "question"
          },
          {
            "q": "OOPS! Peppa slipped in a muddy puddle! Lose 10 points.",
            "a": "Lost 10 points!",
            "pts": -10,
            "type": "penalty"
          },
          {
            "q": "TEAM ACTION: Stand up and give your teammates a high five!",
            "a": "High fives completed!",
            "pts": 10,
            "type": "action"
          },
          {
            "q": "STEAL! Steal 15 points from another team!",
            "a": "15 points transferred!",
            "pts": 15,
            "type": "steal"
          },
          {
            "q": "Name three things connected to 'City Places'!",
            "a": "Park, Hospital, and Supermarket",
            "pts": 20,
            "type": "question"
          },
          {
            "q": "Say 'Good job team!' in a funny robot voice!",
            "a": "Beep boop performed!",
            "pts": 10,
            "type": "action"
          },
          {
            "q": "SWAP SCORES! Swap points with the leading team!",
            "a": "Scores swapped!",
            "pts": 0,
            "type": "swap"
          },
          {
            "q": "What does 'Supermarket' mean in Turkish?",
            "a": "Süpermarket",
            "pts": 15,
            "type": "question"
          },
          {
            "q": "GALAXY WIN: Bluey awards 25 bonus points!",
            "a": "Gained 25 points!",
            "pts": 25,
            "type": "bonus"
          },
          {
            "q": "Use the word 'Park' in an English sentence!",
            "a": "Example: I like this park.",
            "pts": 20,
            "type": "question"
          },
          {
            "q": "BLACK HOLE: Lose 15 points into space!",
            "a": "Lost 15 points!",
            "pts": -15,
            "type": "penalty"
          },
          {
            "q": "DOUBLE BONUS: Answer correctly: Is school fun?",
            "a": "Yes, learning with friends is super fun!",
            "pts": 30,
            "type": "question"
          },
          {
            "q": "TEAM VICTORY: Everyone shout 'Polly!' together!",
            "a": "Polly!",
            "pts": 10,
            "type": "action"
          }
        ],
        "lessonPlan": {
          "weeklyGoal": "Students can communicate confidently about 'City Places' (Neighborhood, Community & Shops), identify core vocabulary, and participate in collaborative smartboard games.",
          "dailyPlan": [
            {
              "day": "Monday (Day 1)",
              "focus": "Vocabulary Exploration: Park, Hospital",
              "warmUp": "Polly's Morning Song & Mascot Welcome Chant",
              "presentation": "Smartboard interactive visual flashcards with GIPHY animations & real photos (No emojis).",
              "practice": "Pair matching card drill & natural character pronunciation practice.",
              "production": "Role-play dialogue: Ask peers about park.",
              "wrapUp": "Quick-fire exit ticket check before lineup."
            },
            {
              "day": "Wednesday (Day 2)",
              "focus": "Grammar & Phonics Focus (Revision of short vowels and i...)",
              "warmUp": "TPR Simon Says: Follow teacher's movement commands.",
              "presentation": "Interactive smartboard sorting and spelling drill.",
              "practice": "Baamboozle 4-Team Championship Round on Smartboard.",
              "production": "Student drawing portfolio & sentence builder.",
              "wrapUp": "Star badge award and team points celebration."
            }
          ],
          "teacherResources": {
            "physicalGames": [
              "Flyswatter Board Relay: Stick photo flashcards of Park on the whiteboard. Two teams race to slap the called word.",
              "Magic Bag Mystery: Place real classroom props or word cards in a bag. Students feel without looking and describe the item."
            ],
            "smartboardActivities": [
              "Baamboozle 4-Team Interactive Arena for City Places with mystery cards and sound effects.",
              "GIF & Real Photo Carousel Drill: Tap the moving GIPHY sticker to hear character pronunciation."
            ]
          }
        }
      }
    ]
  },
  "stage2": {
    "title": "Stage 2 (Primary 2 / A1)",
    "description": "Elementary English for Primary 2: Communication, Talents, Habitats, Community, and Stories.",
    "units": [
      {
        "id": "stage2_u1",
        "number": 1,
        "title": "Look in a Book",
        "cefr": "A1",
        "theme": "Reading, Books & Adventure Stories",
        "grammar": "Have got / Haven't got / Adjectives describing stories",
        "phonics": "Long /eɪ/ in play, stay, skate, rain",
        "vocabulary": [
          {
            "word": "Storybook",
            "meaning": "A book containing tales for children",
            "turkish": "Hikaye kitabı",
            "realPhoto": "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=600&auto=format&fit=crop&q=80",
            "gifUrl": "https://media.giphy.com/media/13HgwGsXF0aiGY/giphy.gif",
            "characterVoice": "polly",
            "voiceLine": "Let us dive into an exciting adventure story!"
          },
          {
            "word": "Adventure",
            "meaning": "An exciting and brave experience",
            "turkish": "Macera",
            "realPhoto": "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=600&auto=format&fit=crop&q=80",
            "gifUrl": "https://media.giphy.com/media/3o7TKMt1VVNkHV2PaE/giphy.gif",
            "characterVoice": "chase",
            "voiceLine": "Chase is ready for the jungle adventure!"
          },
          {
            "word": "Character",
            "meaning": "A person or animal in a story",
            "turkish": "Karakter",
            "realPhoto": "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&auto=format&fit=crop&q=80",
            "gifUrl": "https://media.giphy.com/media/3o7TKDkDbIDJieKbVm/giphy.gif",
            "characterVoice": "bluey",
            "voiceLine": "My favourite character is the clever detective!"
          },
          {
            "word": "Library",
            "meaning": "A room or building filled with books",
            "turkish": "Kütüphane",
            "realPhoto": "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?w=600&auto=format&fit=crop&q=80",
            "gifUrl": "https://media.giphy.com/media/26FPJGjhefSJuaR0Y/giphy.gif",
            "characterVoice": "peppa",
            "voiceLine": "Choose a magic book from the library shelf!"
          },
          {
            "word": "Poem",
            "meaning": "A piece of writing with rhyme and rhythm",
            "turkish": "Şiir",
            "realPhoto": "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=600&auto=format&fit=crop&q=80",
            "gifUrl": "https://media.giphy.com/media/l41lI4bYmcsPJX9Go/giphy.gif",
            "characterVoice": "polly",
            "voiceLine": "Listen to the lovely rhymes in the poem!"
          },
          {
            "word": "Page",
            "meaning": "A leaf of paper in a book",
            "turkish": "Sayfa",
            "realPhoto": "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=600&auto=format&fit=crop&q=80",
            "gifUrl": "https://media.giphy.com/media/26u4cqiYI30juCOGY/giphy.gif",
            "characterVoice": "peppa",
            "voiceLine": "Turn the page gently to see what happens next!"
          }
        ],
        "baamboozleQuestions": [
          {
            "q": "What is the English word for 'Hikaye kitabı'?",
            "a": "Storybook",
            "pts": 15,
            "type": "question"
          },
          {
            "q": "MYSTERY BOX: Polly found bonus treasure for your team!",
            "a": "You won 20 points!",
            "pts": 20,
            "type": "bonus"
          },
          {
            "q": "TPR CHALLENGE: Act out the theme 'Reading, Books & Adventure Stories' for 5 seconds!",
            "a": "Demonstrated by team with cheers",
            "pts": 10,
            "type": "action"
          },
          {
            "q": "How do you spell the word 'Adventure'?",
            "a": "A - D - V - E - N - T - U - R - E",
            "pts": 15,
            "type": "question"
          },
          {
            "q": "OOPS! Peppa slipped in a muddy puddle! Lose 10 points.",
            "a": "Lost 10 points!",
            "pts": -10,
            "type": "penalty"
          },
          {
            "q": "TEAM ACTION: Stand up and give your teammates a high five!",
            "a": "High fives completed!",
            "pts": 10,
            "type": "action"
          },
          {
            "q": "STEAL! Steal 15 points from another team!",
            "a": "15 points transferred!",
            "pts": 15,
            "type": "steal"
          },
          {
            "q": "Name three things connected to 'Look in a Book'!",
            "a": "Storybook, Adventure, and Character",
            "pts": 20,
            "type": "question"
          },
          {
            "q": "Say 'Good job team!' in a funny robot voice!",
            "a": "Beep boop performed!",
            "pts": 10,
            "type": "action"
          },
          {
            "q": "SWAP SCORES! Swap points with the leading team!",
            "a": "Scores swapped!",
            "pts": 0,
            "type": "swap"
          },
          {
            "q": "What does 'Character' mean in Turkish?",
            "a": "Karakter",
            "pts": 15,
            "type": "question"
          },
          {
            "q": "GALAXY WIN: Bluey awards 25 bonus points!",
            "a": "Gained 25 points!",
            "pts": 25,
            "type": "bonus"
          },
          {
            "q": "Use the word 'Storybook' in an English sentence!",
            "a": "Example: I like this storybook.",
            "pts": 20,
            "type": "question"
          },
          {
            "q": "BLACK HOLE: Lose 15 points into space!",
            "a": "Lost 15 points!",
            "pts": -15,
            "type": "penalty"
          },
          {
            "q": "DOUBLE BONUS: Answer correctly: Is school fun?",
            "a": "Yes, learning with friends is super fun!",
            "pts": 30,
            "type": "question"
          },
          {
            "q": "TEAM VICTORY: Everyone shout 'Polly!' together!",
            "a": "Polly!",
            "pts": 10,
            "type": "action"
          }
        ],
        "lessonPlan": {
          "weeklyGoal": "Students can communicate confidently about 'Look in a Book' (Reading, Books & Adventure Stories), identify core vocabulary, and participate in collaborative smartboard games.",
          "dailyPlan": [
            {
              "day": "Monday (Day 1)",
              "focus": "Vocabulary Exploration: Storybook, Adventure",
              "warmUp": "Polly's Morning Song & Mascot Welcome Chant",
              "presentation": "Smartboard interactive visual flashcards with GIPHY animations & real photos (No emojis).",
              "practice": "Pair matching card drill & natural character pronunciation practice.",
              "production": "Role-play dialogue: Ask peers about storybook.",
              "wrapUp": "Quick-fire exit ticket check before lineup."
            },
            {
              "day": "Wednesday (Day 2)",
              "focus": "Grammar & Phonics Focus (Long /eɪ/ in play, stay, skate...)",
              "warmUp": "TPR Simon Says: Follow teacher's movement commands.",
              "presentation": "Interactive smartboard sorting and spelling drill.",
              "practice": "Baamboozle 4-Team Championship Round on Smartboard.",
              "production": "Student drawing portfolio & sentence builder.",
              "wrapUp": "Star badge award and team points celebration."
            }
          ],
          "teacherResources": {
            "physicalGames": [
              "Flyswatter Board Relay: Stick photo flashcards of Storybook on the whiteboard. Two teams race to slap the called word.",
              "Magic Bag Mystery: Place real classroom props or word cards in a bag. Students feel without looking and describe the item."
            ],
            "smartboardActivities": [
              "Baamboozle 4-Team Interactive Arena for Look in a Book with mystery cards and sound effects.",
              "GIF & Real Photo Carousel Drill: Tap the moving GIPHY sticker to hear character pronunciation."
            ]
          }
        }
      },
      {
        "id": "stage2_u2",
        "number": 2,
        "title": "Good Neighbours",
        "cefr": "A1",
        "theme": "Community Helpers & Professions",
        "grammar": "Where does he/she work? Present simple 3rd person -s",
        "phonics": "Long /iː/ in tree, leaf, green, teacher",
        "vocabulary": [
          {
            "word": "Doctor",
            "meaning": "A healthcare professional who treats illness",
            "turkish": "Doktor",
            "realPhoto": "https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=600&auto=format&fit=crop&q=80",
            "gifUrl": "https://media.giphy.com/media/26FPJGjhefSJuaR0Y/giphy.gif",
            "characterVoice": "chase",
            "voiceLine": "The doctor listens carefully with a stethoscope!"
          },
          {
            "word": "Firefighter",
            "meaning": "A brave person who extinguishes fires",
            "turkish": "İtfaiyeci",
            "realPhoto": "https://images.unsplash.com/photo-1542385151-efd9000785a0?w=600&auto=format&fit=crop&q=80",
            "gifUrl": "https://media.giphy.com/media/l0HlHFRbmaZtBRhXG/giphy.gif",
            "characterVoice": "chase",
            "voiceLine": "Marshall the fire dog rushes to help!"
          },
          {
            "word": "Postman",
            "meaning": "A worker who delivers mail and parcels",
            "turkish": "Postacı",
            "realPhoto": "https://images.unsplash.com/photo-1526367790999-0150786686a2?w=600&auto=format&fit=crop&q=80",
            "gifUrl": "https://media.giphy.com/media/3o7TKDkDbIDJieKbVm/giphy.gif",
            "characterVoice": "peppa",
            "voiceLine": "Special delivery! A postcard from grandmother!"
          },
          {
            "word": "Police Officer",
            "meaning": "An officer who protects the peace",
            "turkish": "Polis Memuru",
            "realPhoto": "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=600&auto=format&fit=crop&q=80",
            "gifUrl": "https://media.giphy.com/media/3o7btPCcdNniyf0ArS/giphy.gif",
            "characterVoice": "chase",
            "voiceLine": "Chase is on the case to keep our streets safe!"
          },
          {
            "word": "Nurse",
            "meaning": "A medical professional caring for patients",
            "turkish": "Hemşire",
            "realPhoto": "https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?w=600&auto=format&fit=crop&q=80",
            "gifUrl": "https://media.giphy.com/media/13HgwGsXF0aiGY/giphy.gif",
            "characterVoice": "polly",
            "voiceLine": "A gentle bandage makes the scrape feel better!"
          },
          {
            "word": "Chef",
            "meaning": "A professional cook in a restaurant",
            "turkish": "Aşçı / Şef",
            "realPhoto": "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=600&auto=format&fit=crop&q=80",
            "gifUrl": "https://media.giphy.com/media/xT0xeJpnrWC4XWblEk/giphy.gif",
            "characterVoice": "bluey",
            "voiceLine": "Stir the warm soup and sprinkle green herbs!"
          }
        ],
        "baamboozleQuestions": [
          {
            "q": "What is the English word for 'Doktor'?",
            "a": "Doctor",
            "pts": 15,
            "type": "question"
          },
          {
            "q": "MYSTERY BOX: Polly found bonus treasure for your team!",
            "a": "You won 20 points!",
            "pts": 20,
            "type": "bonus"
          },
          {
            "q": "TPR CHALLENGE: Act out the theme 'Community Helpers & Professions' for 5 seconds!",
            "a": "Demonstrated by team with cheers",
            "pts": 10,
            "type": "action"
          },
          {
            "q": "How do you spell the word 'Firefighter'?",
            "a": "F - I - R - E - F - I - G - H - T - E - R",
            "pts": 15,
            "type": "question"
          },
          {
            "q": "OOPS! Peppa slipped in a muddy puddle! Lose 10 points.",
            "a": "Lost 10 points!",
            "pts": -10,
            "type": "penalty"
          },
          {
            "q": "TEAM ACTION: Stand up and give your teammates a high five!",
            "a": "High fives completed!",
            "pts": 10,
            "type": "action"
          },
          {
            "q": "STEAL! Steal 15 points from another team!",
            "a": "15 points transferred!",
            "pts": 15,
            "type": "steal"
          },
          {
            "q": "Name three things connected to 'Good Neighbours'!",
            "a": "Doctor, Firefighter, and Postman",
            "pts": 20,
            "type": "question"
          },
          {
            "q": "Say 'Good job team!' in a funny robot voice!",
            "a": "Beep boop performed!",
            "pts": 10,
            "type": "action"
          },
          {
            "q": "SWAP SCORES! Swap points with the leading team!",
            "a": "Scores swapped!",
            "pts": 0,
            "type": "swap"
          },
          {
            "q": "What does 'Postman' mean in Turkish?",
            "a": "Postacı",
            "pts": 15,
            "type": "question"
          },
          {
            "q": "GALAXY WIN: Bluey awards 25 bonus points!",
            "a": "Gained 25 points!",
            "pts": 25,
            "type": "bonus"
          },
          {
            "q": "Use the word 'Doctor' in an English sentence!",
            "a": "Example: I like this doctor.",
            "pts": 20,
            "type": "question"
          },
          {
            "q": "BLACK HOLE: Lose 15 points into space!",
            "a": "Lost 15 points!",
            "pts": -15,
            "type": "penalty"
          },
          {
            "q": "DOUBLE BONUS: Answer correctly: Is school fun?",
            "a": "Yes, learning with friends is super fun!",
            "pts": 30,
            "type": "question"
          },
          {
            "q": "TEAM VICTORY: Everyone shout 'Polly!' together!",
            "a": "Polly!",
            "pts": 10,
            "type": "action"
          }
        ],
        "lessonPlan": {
          "weeklyGoal": "Students can communicate confidently about 'Good Neighbours' (Community Helpers & Professions), identify core vocabulary, and participate in collaborative smartboard games.",
          "dailyPlan": [
            {
              "day": "Monday (Day 1)",
              "focus": "Vocabulary Exploration: Doctor, Firefighter",
              "warmUp": "Polly's Morning Song & Mascot Welcome Chant",
              "presentation": "Smartboard interactive visual flashcards with GIPHY animations & real photos (No emojis).",
              "practice": "Pair matching card drill & natural character pronunciation practice.",
              "production": "Role-play dialogue: Ask peers about doctor.",
              "wrapUp": "Quick-fire exit ticket check before lineup."
            },
            {
              "day": "Wednesday (Day 2)",
              "focus": "Grammar & Phonics Focus (Long /iː/ in tree, leaf, green...)",
              "warmUp": "TPR Simon Says: Follow teacher's movement commands.",
              "presentation": "Interactive smartboard sorting and spelling drill.",
              "practice": "Baamboozle 4-Team Championship Round on Smartboard.",
              "production": "Student drawing portfolio & sentence builder.",
              "wrapUp": "Star badge award and team points celebration."
            }
          ],
          "teacherResources": {
            "physicalGames": [
              "Flyswatter Board Relay: Stick photo flashcards of Doctor on the whiteboard. Two teams race to slap the called word.",
              "Magic Bag Mystery: Place real classroom props or word cards in a bag. Students feel without looking and describe the item."
            ],
            "smartboardActivities": [
              "Baamboozle 4-Team Interactive Arena for Good Neighbours with mystery cards and sound effects.",
              "GIF & Real Photo Carousel Drill: Tap the moving GIPHY sticker to hear character pronunciation."
            ]
          }
        }
      },
      {
        "id": "stage2_u3",
        "number": 3,
        "title": "Ready, Steady, Go!",
        "cefr": "A1",
        "theme": "Sports, Fitness & Talents",
        "grammar": "Can you swim? Yes, I can / Adverbs: fast, high, well",
        "phonics": "Long /aɪ/ in bike, ride, fly, kite",
        "vocabulary": [
          {
            "word": "Ride a bike",
            "meaning": "Pedalling and balancing on a bicycle",
            "turkish": "Bisiklete binmek",
            "realPhoto": "https://images.unsplash.com/photo-1485965120184-e220f721d03e?w=600&auto=format&fit=crop&q=80",
            "gifUrl": "https://media.giphy.com/media/3o7TKR1bMmR08vGZz2/giphy.gif",
            "characterVoice": "peppa",
            "voiceLine": "Look at me! I can cycle without stabilizers!"
          },
          {
            "word": "Roller skate",
            "meaning": "Gliding on shoes fitted with wheels",
            "turkish": "Paten kaymak",
            "realPhoto": "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=600&auto=format&fit=crop&q=80",
            "gifUrl": "https://media.giphy.com/media/3o7btPCcdNniyf0ArS/giphy.gif",
            "characterVoice": "bluey",
            "voiceLine": "Wheeee! Roller skating in the park is amazing!"
          },
          {
            "word": "Swim",
            "meaning": "Moving through water with arms and legs",
            "turkish": "Yüzmek",
            "realPhoto": "https://images.unsplash.com/photo-1530549387789-4c1017266635?w=600&auto=format&fit=crop&q=80",
            "gifUrl": "https://media.giphy.com/media/26FPy3QZLnLCyHIJa/giphy.gif",
            "characterVoice": "chase",
            "voiceLine": "Zuma and Chase love swimming in blue pools!"
          },
          {
            "word": "Play guitar",
            "meaning": "Strumming musical chords on a guitar",
            "turkish": "Gitar çalmak",
            "realPhoto": "https://images.unsplash.com/photo-1510915361894-db8b60106cb1?w=600&auto=format&fit=crop&q=80",
            "gifUrl": "https://media.giphy.com/media/l41lFw057lAJQMwg0/giphy.gif",
            "characterVoice": "polly",
            "voiceLine": "Strum the strings and sing a cheerful tune!"
          },
          {
            "word": "Run fast",
            "meaning": "Sprinting at high velocity",
            "turkish": "Hızlı koşmak",
            "realPhoto": "https://images.unsplash.com/photo-1486218119243-13883505764c?w=600&auto=format&fit=crop&q=80",
            "gifUrl": "https://media.giphy.com/media/26u4cqiYI30juCOGY/giphy.gif",
            "characterVoice": "chase",
            "voiceLine": "Sprint fast to cross the finish line first!"
          },
          {
            "word": "Dance",
            "meaning": "Moving rhythmically to music",
            "turkish": "Dans etmek",
            "realPhoto": "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=600&auto=format&fit=crop&q=80",
            "gifUrl": "https://media.giphy.com/media/3o7TKDkDbIDJieKbVm/giphy.gif",
            "characterVoice": "bluey",
            "voiceLine": "Spin, twist, and tap your toes in rhythm!"
          }
        ],
        "baamboozleQuestions": [
          {
            "q": "What is the English word for 'Bisiklete binmek'?",
            "a": "Ride a bike",
            "pts": 15,
            "type": "question"
          },
          {
            "q": "MYSTERY BOX: Polly found bonus treasure for your team!",
            "a": "You won 20 points!",
            "pts": 20,
            "type": "bonus"
          },
          {
            "q": "TPR CHALLENGE: Act out the theme 'Sports, Fitness & Talents' for 5 seconds!",
            "a": "Demonstrated by team with cheers",
            "pts": 10,
            "type": "action"
          },
          {
            "q": "How do you spell the word 'Roller skate'?",
            "a": "R - O - L - L - E - R -   - S - K - A - T - E",
            "pts": 15,
            "type": "question"
          },
          {
            "q": "OOPS! Peppa slipped in a muddy puddle! Lose 10 points.",
            "a": "Lost 10 points!",
            "pts": -10,
            "type": "penalty"
          },
          {
            "q": "TEAM ACTION: Stand up and give your teammates a high five!",
            "a": "High fives completed!",
            "pts": 10,
            "type": "action"
          },
          {
            "q": "STEAL! Steal 15 points from another team!",
            "a": "15 points transferred!",
            "pts": 15,
            "type": "steal"
          },
          {
            "q": "Name three things connected to 'Ready, Steady, Go!'!",
            "a": "Ride a bike, Roller skate, and Swim",
            "pts": 20,
            "type": "question"
          },
          {
            "q": "Say 'Good job team!' in a funny robot voice!",
            "a": "Beep boop performed!",
            "pts": 10,
            "type": "action"
          },
          {
            "q": "SWAP SCORES! Swap points with the leading team!",
            "a": "Scores swapped!",
            "pts": 0,
            "type": "swap"
          },
          {
            "q": "What does 'Swim' mean in Turkish?",
            "a": "Yüzmek",
            "pts": 15,
            "type": "question"
          },
          {
            "q": "GALAXY WIN: Bluey awards 25 bonus points!",
            "a": "Gained 25 points!",
            "pts": 25,
            "type": "bonus"
          },
          {
            "q": "Use the word 'Ride a bike' in an English sentence!",
            "a": "Example: I like this ride a bike.",
            "pts": 20,
            "type": "question"
          },
          {
            "q": "BLACK HOLE: Lose 15 points into space!",
            "a": "Lost 15 points!",
            "pts": -15,
            "type": "penalty"
          },
          {
            "q": "DOUBLE BONUS: Answer correctly: Is school fun?",
            "a": "Yes, learning with friends is super fun!",
            "pts": 30,
            "type": "question"
          },
          {
            "q": "TEAM VICTORY: Everyone shout 'Polly!' together!",
            "a": "Polly!",
            "pts": 10,
            "type": "action"
          }
        ],
        "lessonPlan": {
          "weeklyGoal": "Students can communicate confidently about 'Ready, Steady, Go!' (Sports, Fitness & Talents), identify core vocabulary, and participate in collaborative smartboard games.",
          "dailyPlan": [
            {
              "day": "Monday (Day 1)",
              "focus": "Vocabulary Exploration: Ride a bike, Roller skate",
              "warmUp": "Polly's Morning Song & Mascot Welcome Chant",
              "presentation": "Smartboard interactive visual flashcards with GIPHY animations & real photos (No emojis).",
              "practice": "Pair matching card drill & natural character pronunciation practice.",
              "production": "Role-play dialogue: Ask peers about ride a bike.",
              "wrapUp": "Quick-fire exit ticket check before lineup."
            },
            {
              "day": "Wednesday (Day 2)",
              "focus": "Grammar & Phonics Focus (Long /aɪ/ in bike, ride, fly, ...)",
              "warmUp": "TPR Simon Says: Follow teacher's movement commands.",
              "presentation": "Interactive smartboard sorting and spelling drill.",
              "practice": "Baamboozle 4-Team Championship Round on Smartboard.",
              "production": "Student drawing portfolio & sentence builder.",
              "wrapUp": "Star badge award and team points celebration."
            }
          ],
          "teacherResources": {
            "physicalGames": [
              "Flyswatter Board Relay: Stick photo flashcards of Ride a bike on the whiteboard. Two teams race to slap the called word.",
              "Magic Bag Mystery: Place real classroom props or word cards in a bag. Students feel without looking and describe the item."
            ],
            "smartboardActivities": [
              "Baamboozle 4-Team Interactive Arena for Ready, Steady, Go! with mystery cards and sound effects.",
              "GIF & Real Photo Carousel Drill: Tap the moving GIPHY sticker to hear character pronunciation."
            ]
          }
        }
      },
      {
        "id": "stage2_u4",
        "number": 4,
        "title": "The Big Sky",
        "cefr": "A1",
        "theme": "Weather, Astronomy & Seasons",
        "grammar": "Past simple was/were / Why is it dark? Because...",
        "phonics": "Long /əʊ/ in boat, snow, glow, home",
        "vocabulary": [
          {
            "word": "Moon",
            "meaning": "The natural satellite that lights the night",
            "turkish": "Ay",
            "realPhoto": "https://images.unsplash.com/photo-1522030299830-16b8d3d049fe?w=600&auto=format&fit=crop&q=80",
            "gifUrl": "https://media.giphy.com/media/3o7TKSjRrfIPjeiVyM/giphy.gif",
            "characterVoice": "polly",
            "voiceLine": "The silver crescent moon shines brightly tonight!"
          },
          {
            "word": "Stars",
            "meaning": "Luminous points of light in outer space",
            "turkish": "Yıldızlar",
            "realPhoto": "https://images.unsplash.com/photo-1506703719100-a0f3a48c0f86?w=600&auto=format&fit=crop&q=80",
            "gifUrl": "https://media.giphy.com/media/26FPJGjhefSJuaR0Y/giphy.gif",
            "characterVoice": "peppa",
            "voiceLine": "Twinkle twinkle, millions of sparkling stars!"
          },
          {
            "word": "Sunny",
            "meaning": "Bright with sunlight and warm skies",
            "turkish": "Güneşli",
            "realPhoto": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&auto=format&fit=crop&q=80",
            "gifUrl": "https://media.giphy.com/media/3o7TKDkDbIDJieKbVm/giphy.gif",
            "characterVoice": "bluey",
            "voiceLine": "Put on your sunglasses, it is a sunny day!"
          },
          {
            "word": "Raincoat",
            "meaning": "Waterproof jacket worn when it rains",
            "turkish": "Yağmurluk",
            "realPhoto": "https://images.unsplash.com/photo-1515694346937-94d85e41e6f0?w=600&auto=format&fit=crop&q=80",
            "gifUrl": "https://media.giphy.com/media/3o6ZsU7C4QQca8CLjy/giphy.gif",
            "characterVoice": "peppa",
            "voiceLine": "Zip up your yellow raincoat and boots!"
          },
          {
            "word": "Rainbow",
            "meaning": "An arch of colors formed in the sky",
            "turkish": "Gökkuşağı",
            "realPhoto": "https://images.unsplash.com/photo-1534088568595-a066f410bcda?w=600&auto=format&fit=crop&q=80",
            "gifUrl": "https://media.giphy.com/media/13HgwGsXF0aiGY/giphy.gif",
            "characterVoice": "polly",
            "voiceLine": "Seven bright colors shining after the rain!"
          },
          {
            "word": "Snow",
            "meaning": "Soft white frozen water crystals",
            "turkish": "Kar",
            "realPhoto": "https://images.unsplash.com/photo-1517299321909-509423392e62?w=600&auto=format&fit=crop&q=80",
            "gifUrl": "https://media.giphy.com/media/l41lFw057lAJQMwg0/giphy.gif",
            "characterVoice": "chase",
            "voiceLine": "Build a happy snowman with a carrot nose!"
          }
        ],
        "baamboozleQuestions": [
          {
            "q": "What is the English word for 'Ay'?",
            "a": "Moon",
            "pts": 15,
            "type": "question"
          },
          {
            "q": "MYSTERY BOX: Polly found bonus treasure for your team!",
            "a": "You won 20 points!",
            "pts": 20,
            "type": "bonus"
          },
          {
            "q": "TPR CHALLENGE: Act out the theme 'Weather, Astronomy & Seasons' for 5 seconds!",
            "a": "Demonstrated by team with cheers",
            "pts": 10,
            "type": "action"
          },
          {
            "q": "How do you spell the word 'Stars'?",
            "a": "S - T - A - R - S",
            "pts": 15,
            "type": "question"
          },
          {
            "q": "OOPS! Peppa slipped in a muddy puddle! Lose 10 points.",
            "a": "Lost 10 points!",
            "pts": -10,
            "type": "penalty"
          },
          {
            "q": "TEAM ACTION: Stand up and give your teammates a high five!",
            "a": "High fives completed!",
            "pts": 10,
            "type": "action"
          },
          {
            "q": "STEAL! Steal 15 points from another team!",
            "a": "15 points transferred!",
            "pts": 15,
            "type": "steal"
          },
          {
            "q": "Name three things connected to 'The Big Sky'!",
            "a": "Moon, Stars, and Sunny",
            "pts": 20,
            "type": "question"
          },
          {
            "q": "Say 'Good job team!' in a funny robot voice!",
            "a": "Beep boop performed!",
            "pts": 10,
            "type": "action"
          },
          {
            "q": "SWAP SCORES! Swap points with the leading team!",
            "a": "Scores swapped!",
            "pts": 0,
            "type": "swap"
          },
          {
            "q": "What does 'Sunny' mean in Turkish?",
            "a": "Güneşli",
            "pts": 15,
            "type": "question"
          },
          {
            "q": "GALAXY WIN: Bluey awards 25 bonus points!",
            "a": "Gained 25 points!",
            "pts": 25,
            "type": "bonus"
          },
          {
            "q": "Use the word 'Moon' in an English sentence!",
            "a": "Example: I like this moon.",
            "pts": 20,
            "type": "question"
          },
          {
            "q": "BLACK HOLE: Lose 15 points into space!",
            "a": "Lost 15 points!",
            "pts": -15,
            "type": "penalty"
          },
          {
            "q": "DOUBLE BONUS: Answer correctly: Is school fun?",
            "a": "Yes, learning with friends is super fun!",
            "pts": 30,
            "type": "question"
          },
          {
            "q": "TEAM VICTORY: Everyone shout 'Polly!' together!",
            "a": "Polly!",
            "pts": 10,
            "type": "action"
          }
        ],
        "lessonPlan": {
          "weeklyGoal": "Students can communicate confidently about 'The Big Sky' (Weather, Astronomy & Seasons), identify core vocabulary, and participate in collaborative smartboard games.",
          "dailyPlan": [
            {
              "day": "Monday (Day 1)",
              "focus": "Vocabulary Exploration: Moon, Stars",
              "warmUp": "Polly's Morning Song & Mascot Welcome Chant",
              "presentation": "Smartboard interactive visual flashcards with GIPHY animations & real photos (No emojis).",
              "practice": "Pair matching card drill & natural character pronunciation practice.",
              "production": "Role-play dialogue: Ask peers about moon.",
              "wrapUp": "Quick-fire exit ticket check before lineup."
            },
            {
              "day": "Wednesday (Day 2)",
              "focus": "Grammar & Phonics Focus (Long /əʊ/ in boat, snow, glow,...)",
              "warmUp": "TPR Simon Says: Follow teacher's movement commands.",
              "presentation": "Interactive smartboard sorting and spelling drill.",
              "practice": "Baamboozle 4-Team Championship Round on Smartboard.",
              "production": "Student drawing portfolio & sentence builder.",
              "wrapUp": "Star badge award and team points celebration."
            }
          ],
          "teacherResources": {
            "physicalGames": [
              "Flyswatter Board Relay: Stick photo flashcards of Moon on the whiteboard. Two teams race to slap the called word.",
              "Magic Bag Mystery: Place real classroom props or word cards in a bag. Students feel without looking and describe the item."
            ],
            "smartboardActivities": [
              "Baamboozle 4-Team Interactive Arena for The Big Sky with mystery cards and sound effects.",
              "GIF & Real Photo Carousel Drill: Tap the moving GIPHY sticker to hear character pronunciation."
            ]
          }
        }
      },
      {
        "id": "stage2_u5",
        "number": 5,
        "title": "Let's Count and Measure",
        "cefr": "A1",
        "theme": "Measurement, Math & Sizes",
        "grammar": "Comparatives: taller, heavier, longer, shorter than",
        "phonics": "Long /uː/ in moon, zoo, ruler, blue",
        "vocabulary": [
          {
            "word": "Centimetre",
            "meaning": "A metric unit of length (cm)",
            "turkish": "Santimetre",
            "realPhoto": "https://images.unsplash.com/photo-1589330694653-dad6d3240a91?w=600&auto=format&fit=crop&q=80",
            "gifUrl": "https://media.giphy.com/media/3o7TKSjRrfIPjeiVyM/giphy.gif",
            "characterVoice": "polly",
            "voiceLine": "Measure the pencil in centimetres with a ruler!"
          },
          {
            "word": "Ruler",
            "meaning": "A straight measuring stick marked in units",
            "turkish": "Cetvel",
            "realPhoto": "https://images.unsplash.com/photo-1584697964190-705b89369e65?w=600&auto=format&fit=crop&q=80",
            "gifUrl": "https://media.giphy.com/media/26FPJGjhefSJuaR0Y/giphy.gif",
            "characterVoice": "chase",
            "voiceLine": "Draw a crisp straight line using your ruler!"
          },
          {
            "word": "Heavy",
            "meaning": "Having great weight and hard to lift",
            "turkish": "Ağır",
            "realPhoto": "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?w=600&auto=format&fit=crop&q=80",
            "gifUrl": "https://media.giphy.com/media/l0MYt5jPR6QX5pnqM/giphy.gif",
            "characterVoice": "bluey",
            "voiceLine": "An elephant is much heavier than a mouse!"
          },
          {
            "word": "Light",
            "meaning": "Having little weight and easy to carry",
            "turkish": "Hafif",
            "realPhoto": "https://images.unsplash.com/photo-1520763185298-1b434c919102?w=600&auto=format&fit=crop&q=80",
            "gifUrl": "https://media.giphy.com/media/3o7TKDkDbIDJieKbVm/giphy.gif",
            "characterVoice": "polly",
            "voiceLine": "A fluffy bird feather is super light!"
          },
          {
            "word": "Tall",
            "meaning": "Having greater height than average",
            "turkish": "Uzun (Boylu)",
            "realPhoto": "https://images.unsplash.com/photo-1534567153574-2b12153a87f0?w=600&auto=format&fit=crop&q=80",
            "gifUrl": "https://media.giphy.com/media/13HgwGsXF0aiGY/giphy.gif",
            "characterVoice": "peppa",
            "voiceLine": "A gentle giraffe is very tall!"
          },
          {
            "word": "Short",
            "meaning": "Having little height or length",
            "turkish": "Kısa",
            "realPhoto": "https://images.unsplash.com/photo-1425082661705-1834bfd09dca?w=600&auto=format&fit=crop&q=80",
            "gifUrl": "https://media.giphy.com/media/l41lFw057lAJQMwg0/giphy.gif",
            "characterVoice": "bluey",
            "voiceLine": "The little puppy is short and cute!"
          }
        ],
        "baamboozleQuestions": [
          {
            "q": "What is the English word for 'Santimetre'?",
            "a": "Centimetre",
            "pts": 15,
            "type": "question"
          },
          {
            "q": "MYSTERY BOX: Polly found bonus treasure for your team!",
            "a": "You won 20 points!",
            "pts": 20,
            "type": "bonus"
          },
          {
            "q": "TPR CHALLENGE: Act out the theme 'Measurement, Math & Sizes' for 5 seconds!",
            "a": "Demonstrated by team with cheers",
            "pts": 10,
            "type": "action"
          },
          {
            "q": "How do you spell the word 'Ruler'?",
            "a": "R - U - L - E - R",
            "pts": 15,
            "type": "question"
          },
          {
            "q": "OOPS! Peppa slipped in a muddy puddle! Lose 10 points.",
            "a": "Lost 10 points!",
            "pts": -10,
            "type": "penalty"
          },
          {
            "q": "TEAM ACTION: Stand up and give your teammates a high five!",
            "a": "High fives completed!",
            "pts": 10,
            "type": "action"
          },
          {
            "q": "STEAL! Steal 15 points from another team!",
            "a": "15 points transferred!",
            "pts": 15,
            "type": "steal"
          },
          {
            "q": "Name three things connected to 'Let's Count and Measure'!",
            "a": "Centimetre, Ruler, and Heavy",
            "pts": 20,
            "type": "question"
          },
          {
            "q": "Say 'Good job team!' in a funny robot voice!",
            "a": "Beep boop performed!",
            "pts": 10,
            "type": "action"
          },
          {
            "q": "SWAP SCORES! Swap points with the leading team!",
            "a": "Scores swapped!",
            "pts": 0,
            "type": "swap"
          },
          {
            "q": "What does 'Heavy' mean in Turkish?",
            "a": "Ağır",
            "pts": 15,
            "type": "question"
          },
          {
            "q": "GALAXY WIN: Bluey awards 25 bonus points!",
            "a": "Gained 25 points!",
            "pts": 25,
            "type": "bonus"
          },
          {
            "q": "Use the word 'Centimetre' in an English sentence!",
            "a": "Example: I like this centimetre.",
            "pts": 20,
            "type": "question"
          },
          {
            "q": "BLACK HOLE: Lose 15 points into space!",
            "a": "Lost 15 points!",
            "pts": -15,
            "type": "penalty"
          },
          {
            "q": "DOUBLE BONUS: Answer correctly: Is school fun?",
            "a": "Yes, learning with friends is super fun!",
            "pts": 30,
            "type": "question"
          },
          {
            "q": "TEAM VICTORY: Everyone shout 'Polly!' together!",
            "a": "Polly!",
            "pts": 10,
            "type": "action"
          }
        ],
        "lessonPlan": {
          "weeklyGoal": "Students can communicate confidently about 'Let's Count and Measure' (Measurement, Math & Sizes), identify core vocabulary, and participate in collaborative smartboard games.",
          "dailyPlan": [
            {
              "day": "Monday (Day 1)",
              "focus": "Vocabulary Exploration: Centimetre, Ruler",
              "warmUp": "Polly's Morning Song & Mascot Welcome Chant",
              "presentation": "Smartboard interactive visual flashcards with GIPHY animations & real photos (No emojis).",
              "practice": "Pair matching card drill & natural character pronunciation practice.",
              "production": "Role-play dialogue: Ask peers about centimetre.",
              "wrapUp": "Quick-fire exit ticket check before lineup."
            },
            {
              "day": "Wednesday (Day 2)",
              "focus": "Grammar & Phonics Focus (Long /uː/ in moon, zoo, ruler,...)",
              "warmUp": "TPR Simon Says: Follow teacher's movement commands.",
              "presentation": "Interactive smartboard sorting and spelling drill.",
              "practice": "Baamboozle 4-Team Championship Round on Smartboard.",
              "production": "Student drawing portfolio & sentence builder.",
              "wrapUp": "Star badge award and team points celebration."
            }
          ],
          "teacherResources": {
            "physicalGames": [
              "Flyswatter Board Relay: Stick photo flashcards of Centimetre on the whiteboard. Two teams race to slap the called word.",
              "Magic Bag Mystery: Place real classroom props or word cards in a bag. Students feel without looking and describe the item."
            ],
            "smartboardActivities": [
              "Baamboozle 4-Team Interactive Arena for Let's Count and Measure with mystery cards and sound effects.",
              "GIF & Real Photo Carousel Drill: Tap the moving GIPHY sticker to hear character pronunciation."
            ]
          }
        }
      },
      {
        "id": "stage2_u6",
        "number": 6,
        "title": "Bugs and Minibeasts",
        "cefr": "A1",
        "theme": "Insects & Micro-Habitats",
        "grammar": "Prepositions of place: under, behind, between, inside",
        "phonics": "R-controlled vowels /ɑː/ in star, /ɔː/ in horn",
        "vocabulary": [
          {
            "word": "Butterfly",
            "meaning": "An insect with large colourful wings",
            "turkish": "Kelebek",
            "realPhoto": "https://images.unsplash.com/photo-1526336024174-e58f5cdd8e13?w=600&auto=format&fit=crop&q=80",
            "gifUrl": "https://media.giphy.com/media/3o7TKMt1VVNkHV2PaE/giphy.gif",
            "characterVoice": "polly",
            "voiceLine": "A beautiful butterfly flutters from flower to flower!"
          },
          {
            "word": "Ladybird",
            "meaning": "A small red beetle with black spots",
            "turkish": "Uğur böceği",
            "realPhoto": "https://images.unsplash.com/photo-1470240731273-7821a6eeb6bd?w=600&auto=format&fit=crop&q=80",
            "gifUrl": "https://media.giphy.com/media/26u4cqiYI30juCOGY/giphy.gif",
            "characterVoice": "peppa",
            "voiceLine": "Count the tiny black spots on the ladybird!"
          },
          {
            "word": "Caterpillar",
            "meaning": "A crawling larva before becoming a butterfly",
            "turkish": "Tırtıl",
            "realPhoto": "https://images.unsplash.com/photo-1533227268428-f9ed0900fb3b?w=600&auto=format&fit=crop&q=80",
            "gifUrl": "https://media.giphy.com/media/l41lFw057lAJQMwg0/giphy.gif",
            "characterVoice": "bluey",
            "voiceLine": "The hungry caterpillar munches green leaves!"
          },
          {
            "word": "Bee",
            "meaning": "A buzzing yellow-and-black honey insect",
            "turkish": "Arı",
            "realPhoto": "https://images.unsplash.com/photo-1473081556163-2a17de81fc97?w=600&auto=format&fit=crop&q=80",
            "gifUrl": "https://media.giphy.com/media/26FPJGjhefSJuaR0Y/giphy.gif",
            "characterVoice": "chase",
            "voiceLine": "Buzz buzz! The busy bee makes sweet honey!"
          },
          {
            "word": "Ant",
            "meaning": "A tiny hardworking insect that lives in colonies",
            "turkish": "Karınca",
            "realPhoto": "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=600&auto=format&fit=crop&q=80",
            "gifUrl": "https://media.giphy.com/media/13HgwGsXF0aiGY/giphy.gif",
            "characterVoice": "polly",
            "voiceLine": "The little ant can carry heavy seeds!"
          },
          {
            "word": "Spider",
            "meaning": "An eight-legged arachnid that spins webs",
            "turkish": "Örümcek",
            "realPhoto": "https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?w=600&auto=format&fit=crop&q=80",
            "gifUrl": "https://media.giphy.com/media/3o7TKDkDbIDJieKbVm/giphy.gif",
            "characterVoice": "chase",
            "voiceLine": "Incy wincy spider climbing up the spout!"
          }
        ],
        "baamboozleQuestions": [
          {
            "q": "What is the English word for 'Kelebek'?",
            "a": "Butterfly",
            "pts": 15,
            "type": "question"
          },
          {
            "q": "MYSTERY BOX: Polly found bonus treasure for your team!",
            "a": "You won 20 points!",
            "pts": 20,
            "type": "bonus"
          },
          {
            "q": "TPR CHALLENGE: Act out the theme 'Insects & Micro-Habitats' for 5 seconds!",
            "a": "Demonstrated by team with cheers",
            "pts": 10,
            "type": "action"
          },
          {
            "q": "How do you spell the word 'Ladybird'?",
            "a": "L - A - D - Y - B - I - R - D",
            "pts": 15,
            "type": "question"
          },
          {
            "q": "OOPS! Peppa slipped in a muddy puddle! Lose 10 points.",
            "a": "Lost 10 points!",
            "pts": -10,
            "type": "penalty"
          },
          {
            "q": "TEAM ACTION: Stand up and give your teammates a high five!",
            "a": "High fives completed!",
            "pts": 10,
            "type": "action"
          },
          {
            "q": "STEAL! Steal 15 points from another team!",
            "a": "15 points transferred!",
            "pts": 15,
            "type": "steal"
          },
          {
            "q": "Name three things connected to 'Bugs and Minibeasts'!",
            "a": "Butterfly, Ladybird, and Caterpillar",
            "pts": 20,
            "type": "question"
          },
          {
            "q": "Say 'Good job team!' in a funny robot voice!",
            "a": "Beep boop performed!",
            "pts": 10,
            "type": "action"
          },
          {
            "q": "SWAP SCORES! Swap points with the leading team!",
            "a": "Scores swapped!",
            "pts": 0,
            "type": "swap"
          },
          {
            "q": "What does 'Caterpillar' mean in Turkish?",
            "a": "Tırtıl",
            "pts": 15,
            "type": "question"
          },
          {
            "q": "GALAXY WIN: Bluey awards 25 bonus points!",
            "a": "Gained 25 points!",
            "pts": 25,
            "type": "bonus"
          },
          {
            "q": "Use the word 'Butterfly' in an English sentence!",
            "a": "Example: I like this butterfly.",
            "pts": 20,
            "type": "question"
          },
          {
            "q": "BLACK HOLE: Lose 15 points into space!",
            "a": "Lost 15 points!",
            "pts": -15,
            "type": "penalty"
          },
          {
            "q": "DOUBLE BONUS: Answer correctly: Is school fun?",
            "a": "Yes, learning with friends is super fun!",
            "pts": 30,
            "type": "question"
          },
          {
            "q": "TEAM VICTORY: Everyone shout 'Polly!' together!",
            "a": "Polly!",
            "pts": 10,
            "type": "action"
          }
        ],
        "lessonPlan": {
          "weeklyGoal": "Students can communicate confidently about 'Bugs and Minibeasts' (Insects & Micro-Habitats), identify core vocabulary, and participate in collaborative smartboard games.",
          "dailyPlan": [
            {
              "day": "Monday (Day 1)",
              "focus": "Vocabulary Exploration: Butterfly, Ladybird",
              "warmUp": "Polly's Morning Song & Mascot Welcome Chant",
              "presentation": "Smartboard interactive visual flashcards with GIPHY animations & real photos (No emojis).",
              "practice": "Pair matching card drill & natural character pronunciation practice.",
              "production": "Role-play dialogue: Ask peers about butterfly.",
              "wrapUp": "Quick-fire exit ticket check before lineup."
            },
            {
              "day": "Wednesday (Day 2)",
              "focus": "Grammar & Phonics Focus (R-controlled vowels /ɑː/ in st...)",
              "warmUp": "TPR Simon Says: Follow teacher's movement commands.",
              "presentation": "Interactive smartboard sorting and spelling drill.",
              "practice": "Baamboozle 4-Team Championship Round on Smartboard.",
              "production": "Student drawing portfolio & sentence builder.",
              "wrapUp": "Star badge award and team points celebration."
            }
          ],
          "teacherResources": {
            "physicalGames": [
              "Flyswatter Board Relay: Stick photo flashcards of Butterfly on the whiteboard. Two teams race to slap the called word.",
              "Magic Bag Mystery: Place real classroom props or word cards in a bag. Students feel without looking and describe the item."
            ],
            "smartboardActivities": [
              "Baamboozle 4-Team Interactive Arena for Bugs and Minibeasts with mystery cards and sound effects.",
              "GIF & Real Photo Carousel Drill: Tap the moving GIPHY sticker to hear character pronunciation."
            ]
          }
        }
      },
      {
        "id": "stage2_u7",
        "number": 7,
        "title": "Our Green Earth",
        "cefr": "A1",
        "theme": "Ecology, Recycling & Historical Planet",
        "grammar": "Past simple regular -ed (planted, cleaned, recycled)",
        "phonics": "Past tense -ed endings /t/, /d/, /ɪd/",
        "vocabulary": [
          {
            "word": "Tree",
            "meaning": "A tall woody perennial plant",
            "turkish": "Ağaç",
            "realPhoto": "https://images.unsplash.com/photo-1448375240586-882707db888b?w=600&auto=format&fit=crop&q=80",
            "gifUrl": "https://media.giphy.com/media/3o7TKSjRrfIPjeiVyM/giphy.gif",
            "characterVoice": "polly",
            "voiceLine": "Plant a green tree to give clean air to our planet!"
          },
          {
            "word": "Recycle",
            "meaning": "Converting waste into reusable material",
            "turkish": "Geri dönüştürmek",
            "realPhoto": "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=600&auto=format&fit=crop&q=80",
            "gifUrl": "https://media.giphy.com/media/26BRv0ThflsDTjDUs/giphy.gif",
            "characterVoice": "chase",
            "voiceLine": "Rocky says: Don't lose it, reuse it!"
          },
          {
            "word": "Forest",
            "meaning": "A large area covered chiefly with trees",
            "turkish": "Orman",
            "realPhoto": "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?w=600&auto=format&fit=crop&q=80",
            "gifUrl": "https://media.giphy.com/media/l0MYt5jPR6QX5pnqM/giphy.gif",
            "characterVoice": "bluey",
            "voiceLine": "The woodland forest is home to singing birds!"
          },
          {
            "word": "River",
            "meaning": "A flowing stream of fresh water",
            "turkish": "Nehir / Irmak",
            "realPhoto": "https://images.unsplash.com/photo-1437482078695-73f5ca6c96e2?w=600&auto=format&fit=crop&q=80",
            "gifUrl": "https://media.giphy.com/media/xT0xeJpnrWC4XWblEk/giphy.gif",
            "characterVoice": "peppa",
            "voiceLine": "Paddle the red canoe down the rushing river!"
          },
          {
            "word": "Planet Earth",
            "meaning": "The third planet from the Sun, our home",
            "turkish": "Dünya Gezegeni",
            "realPhoto": "https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?w=600&auto=format&fit=crop&q=80",
            "gifUrl": "https://media.giphy.com/media/26FPJGjhefSJuaR0Y/giphy.gif",
            "characterVoice": "polly",
            "voiceLine": "Earth is our beautiful blue and green home!"
          },
          {
            "word": "Flower",
            "meaning": "The seed-bearing part of a plant",
            "turkish": "Çiçek",
            "realPhoto": "https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=600&auto=format&fit=crop&q=80",
            "gifUrl": "https://media.giphy.com/media/13HgwGsXF0aiGY/giphy.gif",
            "characterVoice": "peppa",
            "voiceLine": "A sweet red rose smelling fresh and fragrant!"
          }
        ],
        "baamboozleQuestions": [
          {
            "q": "What is the English word for 'Ağaç'?",
            "a": "Tree",
            "pts": 15,
            "type": "question"
          },
          {
            "q": "MYSTERY BOX: Polly found bonus treasure for your team!",
            "a": "You won 20 points!",
            "pts": 20,
            "type": "bonus"
          },
          {
            "q": "TPR CHALLENGE: Act out the theme 'Ecology, Recycling & Historical Planet' for 5 seconds!",
            "a": "Demonstrated by team with cheers",
            "pts": 10,
            "type": "action"
          },
          {
            "q": "How do you spell the word 'Recycle'?",
            "a": "R - E - C - Y - C - L - E",
            "pts": 15,
            "type": "question"
          },
          {
            "q": "OOPS! Peppa slipped in a muddy puddle! Lose 10 points.",
            "a": "Lost 10 points!",
            "pts": -10,
            "type": "penalty"
          },
          {
            "q": "TEAM ACTION: Stand up and give your teammates a high five!",
            "a": "High fives completed!",
            "pts": 10,
            "type": "action"
          },
          {
            "q": "STEAL! Steal 15 points from another team!",
            "a": "15 points transferred!",
            "pts": 15,
            "type": "steal"
          },
          {
            "q": "Name three things connected to 'Our Green Earth'!",
            "a": "Tree, Recycle, and Forest",
            "pts": 20,
            "type": "question"
          },
          {
            "q": "Say 'Good job team!' in a funny robot voice!",
            "a": "Beep boop performed!",
            "pts": 10,
            "type": "action"
          },
          {
            "q": "SWAP SCORES! Swap points with the leading team!",
            "a": "Scores swapped!",
            "pts": 0,
            "type": "swap"
          },
          {
            "q": "What does 'Forest' mean in Turkish?",
            "a": "Orman",
            "pts": 15,
            "type": "question"
          },
          {
            "q": "GALAXY WIN: Bluey awards 25 bonus points!",
            "a": "Gained 25 points!",
            "pts": 25,
            "type": "bonus"
          },
          {
            "q": "Use the word 'Tree' in an English sentence!",
            "a": "Example: I like this tree.",
            "pts": 20,
            "type": "question"
          },
          {
            "q": "BLACK HOLE: Lose 15 points into space!",
            "a": "Lost 15 points!",
            "pts": -15,
            "type": "penalty"
          },
          {
            "q": "DOUBLE BONUS: Answer correctly: Is school fun?",
            "a": "Yes, learning with friends is super fun!",
            "pts": 30,
            "type": "question"
          },
          {
            "q": "TEAM VICTORY: Everyone shout 'Polly!' together!",
            "a": "Polly!",
            "pts": 10,
            "type": "action"
          }
        ],
        "lessonPlan": {
          "weeklyGoal": "Students can communicate confidently about 'Our Green Earth' (Ecology, Recycling & Historical Planet), identify core vocabulary, and participate in collaborative smartboard games.",
          "dailyPlan": [
            {
              "day": "Monday (Day 1)",
              "focus": "Vocabulary Exploration: Tree, Recycle",
              "warmUp": "Polly's Morning Song & Mascot Welcome Chant",
              "presentation": "Smartboard interactive visual flashcards with GIPHY animations & real photos (No emojis).",
              "practice": "Pair matching card drill & natural character pronunciation practice.",
              "production": "Role-play dialogue: Ask peers about tree.",
              "wrapUp": "Quick-fire exit ticket check before lineup."
            },
            {
              "day": "Wednesday (Day 2)",
              "focus": "Grammar & Phonics Focus (Past tense -ed endings /t/, /d...)",
              "warmUp": "TPR Simon Says: Follow teacher's movement commands.",
              "presentation": "Interactive smartboard sorting and spelling drill.",
              "practice": "Baamboozle 4-Team Championship Round on Smartboard.",
              "production": "Student drawing portfolio & sentence builder.",
              "wrapUp": "Star badge award and team points celebration."
            }
          ],
          "teacherResources": {
            "physicalGames": [
              "Flyswatter Board Relay: Stick photo flashcards of Tree on the whiteboard. Two teams race to slap the called word.",
              "Magic Bag Mystery: Place real classroom props or word cards in a bag. Students feel without looking and describe the item."
            ],
            "smartboardActivities": [
              "Baamboozle 4-Team Interactive Arena for Our Green Earth with mystery cards and sound effects.",
              "GIF & Real Photo Carousel Drill: Tap the moving GIPHY sticker to hear character pronunciation."
            ]
          }
        }
      },
      {
        "id": "stage2_u8",
        "number": 8,
        "title": "Home Sweet Home",
        "cefr": "A1",
        "theme": "Homes Around the World & Building Materials",
        "grammar": "Made of wood / stone / brick / There was / There were",
        "phonics": "Diphthongs /aʊ/ in house, /ɔɪ/ in boy, coin",
        "vocabulary": [
          {
            "word": "Living Room",
            "meaning": "A room in a home for everyday relaxation",
            "turkish": "Oturma odası",
            "realPhoto": "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&auto=format&fit=crop&q=80",
            "gifUrl": "https://media.giphy.com/media/3o7TKMt1VVNkHV2PaE/giphy.gif",
            "characterVoice": "bluey",
            "voiceLine": "Relax on the cozy sofa in the living room!"
          },
          {
            "word": "Bedroom",
            "meaning": "A room furnished with a bed for sleeping",
            "turkish": "Yatak odası",
            "realPhoto": "https://images.unsplash.com/photo-1540518614846-7ede433c4ef7?w=600&auto=format&fit=crop&q=80",
            "gifUrl": "https://media.giphy.com/media/3o7TKDkDbIDJieKbVm/giphy.gif",
            "characterVoice": "peppa",
            "voiceLine": "Snuggle into bed and dream of adventures!"
          },
          {
            "word": "Kitchen",
            "meaning": "A room where food is prepared and cooked",
            "turkish": "Mutfak",
            "realPhoto": "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=600&auto=format&fit=crop&q=80",
            "gifUrl": "https://media.giphy.com/media/l41lFw057lAJQMwg0/giphy.gif",
            "characterVoice": "chase",
            "voiceLine": "Smell the yummy warm soup on the stove!"
          },
          {
            "word": "Roof",
            "meaning": "The structure forming the top of a building",
            "turkish": "Çatı",
            "realPhoto": "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=600&auto=format&fit=crop&q=80",
            "gifUrl": "https://media.giphy.com/media/26u4cqiYI30juCOGY/giphy.gif",
            "characterVoice": "polly",
            "voiceLine": "The red tiled roof protects the house from rain!"
          },
          {
            "word": "Garden",
            "meaning": "A piece of ground for growing flowers or grass",
            "turkish": "Bahçe",
            "realPhoto": "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=600&auto=format&fit=crop&q=80",
            "gifUrl": "https://media.giphy.com/media/13HgwGsXF0aiGY/giphy.gif",
            "characterVoice": "peppa",
            "voiceLine": "Plant crunchy carrots in the sunny vegetable patch!"
          },
          {
            "word": "Balcony",
            "meaning": "A platform enclosed by a wall on an upper floor",
            "turkish": "Balkon",
            "realPhoto": "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=600&auto=format&fit=crop&q=80",
            "gifUrl": "https://media.giphy.com/media/26FPJGjhefSJuaR0Y/giphy.gif",
            "characterVoice": "bluey",
            "voiceLine": "Wave hello to neighbors from the breezy balcony!"
          }
        ],
        "baamboozleQuestions": [
          {
            "q": "What is the English word for 'Oturma odası'?",
            "a": "Living Room",
            "pts": 15,
            "type": "question"
          },
          {
            "q": "MYSTERY BOX: Polly found bonus treasure for your team!",
            "a": "You won 20 points!",
            "pts": 20,
            "type": "bonus"
          },
          {
            "q": "TPR CHALLENGE: Act out the theme 'Homes Around the World & Building Materials' for 5 seconds!",
            "a": "Demonstrated by team with cheers",
            "pts": 10,
            "type": "action"
          },
          {
            "q": "How do you spell the word 'Bedroom'?",
            "a": "B - E - D - R - O - O - M",
            "pts": 15,
            "type": "question"
          },
          {
            "q": "OOPS! Peppa slipped in a muddy puddle! Lose 10 points.",
            "a": "Lost 10 points!",
            "pts": -10,
            "type": "penalty"
          },
          {
            "q": "TEAM ACTION: Stand up and give your teammates a high five!",
            "a": "High fives completed!",
            "pts": 10,
            "type": "action"
          },
          {
            "q": "STEAL! Steal 15 points from another team!",
            "a": "15 points transferred!",
            "pts": 15,
            "type": "steal"
          },
          {
            "q": "Name three things connected to 'Home Sweet Home'!",
            "a": "Living Room, Bedroom, and Kitchen",
            "pts": 20,
            "type": "question"
          },
          {
            "q": "Say 'Good job team!' in a funny robot voice!",
            "a": "Beep boop performed!",
            "pts": 10,
            "type": "action"
          },
          {
            "q": "SWAP SCORES! Swap points with the leading team!",
            "a": "Scores swapped!",
            "pts": 0,
            "type": "swap"
          },
          {
            "q": "What does 'Kitchen' mean in Turkish?",
            "a": "Mutfak",
            "pts": 15,
            "type": "question"
          },
          {
            "q": "GALAXY WIN: Bluey awards 25 bonus points!",
            "a": "Gained 25 points!",
            "pts": 25,
            "type": "bonus"
          },
          {
            "q": "Use the word 'Living Room' in an English sentence!",
            "a": "Example: I like this living room.",
            "pts": 20,
            "type": "question"
          },
          {
            "q": "BLACK HOLE: Lose 15 points into space!",
            "a": "Lost 15 points!",
            "pts": -15,
            "type": "penalty"
          },
          {
            "q": "DOUBLE BONUS: Answer correctly: Is school fun?",
            "a": "Yes, learning with friends is super fun!",
            "pts": 30,
            "type": "question"
          },
          {
            "q": "TEAM VICTORY: Everyone shout 'Polly!' together!",
            "a": "Polly!",
            "pts": 10,
            "type": "action"
          }
        ],
        "lessonPlan": {
          "weeklyGoal": "Students can communicate confidently about 'Home Sweet Home' (Homes Around the World & Building Materials), identify core vocabulary, and participate in collaborative smartboard games.",
          "dailyPlan": [
            {
              "day": "Monday (Day 1)",
              "focus": "Vocabulary Exploration: Living Room, Bedroom",
              "warmUp": "Polly's Morning Song & Mascot Welcome Chant",
              "presentation": "Smartboard interactive visual flashcards with GIPHY animations & real photos (No emojis).",
              "practice": "Pair matching card drill & natural character pronunciation practice.",
              "production": "Role-play dialogue: Ask peers about living room.",
              "wrapUp": "Quick-fire exit ticket check before lineup."
            },
            {
              "day": "Wednesday (Day 2)",
              "focus": "Grammar & Phonics Focus (Diphthongs /aʊ/ in house, /ɔɪ/...)",
              "warmUp": "TPR Simon Says: Follow teacher's movement commands.",
              "presentation": "Interactive smartboard sorting and spelling drill.",
              "practice": "Baamboozle 4-Team Championship Round on Smartboard.",
              "production": "Student drawing portfolio & sentence builder.",
              "wrapUp": "Star badge award and team points celebration."
            }
          ],
          "teacherResources": {
            "physicalGames": [
              "Flyswatter Board Relay: Stick photo flashcards of Living Room on the whiteboard. Two teams race to slap the called word.",
              "Magic Bag Mystery: Place real classroom props or word cards in a bag. Students feel without looking and describe the item."
            ],
            "smartboardActivities": [
              "Baamboozle 4-Team Interactive Arena for Home Sweet Home with mystery cards and sound effects.",
              "GIF & Real Photo Carousel Drill: Tap the moving GIPHY sticker to hear character pronunciation."
            ]
          }
        }
      },
      {
        "id": "stage2_u9",
        "number": 9,
        "title": "Inside and Outside Cities",
        "cefr": "A1",
        "theme": "City Life vs Countryside & Navigating Roads",
        "grammar": "Directions: turn left, turn right, go straight ahead",
        "phonics": "Silent letters /k/ in knee, /w/ in wrist; Compound words",
        "vocabulary": [
          {
            "word": "Traffic Light",
            "meaning": "Signals of red, amber, green for traffic",
            "turkish": "Trafik ışığı",
            "realPhoto": "https://images.unsplash.com/photo-1515694346937-94d85e41e6f0?w=600&auto=format&fit=crop&q=80",
            "gifUrl": "https://media.giphy.com/media/3o7TKSjRrfIPjeiVyM/giphy.gif",
            "characterVoice": "chase",
            "voiceLine": "Red means stop! Green means go!"
          },
          {
            "word": "Zebra Crossing",
            "meaning": "Marked black and white path for pedestrians",
            "turkish": "Yaya geçidi",
            "realPhoto": "https://images.unsplash.com/photo-1508873696983-2df5293cb32f?w=600&auto=format&fit=crop&q=80",
            "gifUrl": "https://media.giphy.com/media/26FPJGjhefSJuaR0Y/giphy.gif",
            "characterVoice": "polly",
            "voiceLine": "Hold hands and look both ways before crossing!"
          },
          {
            "word": "Turn Left",
            "meaning": "Changing direction towards the left hand side",
            "turkish": "Sola dön",
            "realPhoto": "https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?w=600&auto=format&fit=crop&q=80",
            "gifUrl": "https://media.giphy.com/media/l41lFw057lAJQMwg0/giphy.gif",
            "characterVoice": "bluey",
            "voiceLine": "Turn left at the tall clock tower!"
          },
          {
            "word": "Turn Right",
            "meaning": "Changing direction towards the right hand side",
            "turkish": "Sağa dön",
            "realPhoto": "https://images.unsplash.com/photo-1503602642458-232111445657?w=600&auto=format&fit=crop&q=80",
            "gifUrl": "https://media.giphy.com/media/3o7TKDkDbIDJieKbVm/giphy.gif",
            "characterVoice": "chase",
            "voiceLine": "Turn right next to the bakery!"
          },
          {
            "word": "Museum",
            "meaning": "A building exhibiting historical or art objects",
            "turkish": "Müze",
            "realPhoto": "https://images.unsplash.com/photo-1566127444979-b3d2b654e3d7?w=600&auto=format&fit=crop&q=80",
            "gifUrl": "https://media.giphy.com/media/13HgwGsXF0aiGY/giphy.gif",
            "characterVoice": "peppa",
            "voiceLine": "See dinosaur bones at the grand city museum!"
          },
          {
            "word": "Bridge",
            "meaning": "A structure carrying a pathway over water",
            "turkish": "Köprü",
            "realPhoto": "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=600&auto=format&fit=crop&q=80",
            "gifUrl": "https://media.giphy.com/media/3o7btPCcdNniyf0ArS/giphy.gif",
            "characterVoice": "polly",
            "voiceLine": "Cross the stone bridge over the sparkling canal!"
          }
        ],
        "baamboozleQuestions": [
          {
            "q": "What is the English word for 'Trafik ışığı'?",
            "a": "Traffic Light",
            "pts": 15,
            "type": "question"
          },
          {
            "q": "MYSTERY BOX: Polly found bonus treasure for your team!",
            "a": "You won 20 points!",
            "pts": 20,
            "type": "bonus"
          },
          {
            "q": "TPR CHALLENGE: Act out the theme 'City Life vs Countryside & Navigating Roads' for 5 seconds!",
            "a": "Demonstrated by team with cheers",
            "pts": 10,
            "type": "action"
          },
          {
            "q": "How do you spell the word 'Zebra Crossing'?",
            "a": "Z - E - B - R - A -   - C - R - O - S - S - I - N - G",
            "pts": 15,
            "type": "question"
          },
          {
            "q": "OOPS! Peppa slipped in a muddy puddle! Lose 10 points.",
            "a": "Lost 10 points!",
            "pts": -10,
            "type": "penalty"
          },
          {
            "q": "TEAM ACTION: Stand up and give your teammates a high five!",
            "a": "High fives completed!",
            "pts": 10,
            "type": "action"
          },
          {
            "q": "STEAL! Steal 15 points from another team!",
            "a": "15 points transferred!",
            "pts": 15,
            "type": "steal"
          },
          {
            "q": "Name three things connected to 'Inside and Outside Cities'!",
            "a": "Traffic Light, Zebra Crossing, and Turn Left",
            "pts": 20,
            "type": "question"
          },
          {
            "q": "Say 'Good job team!' in a funny robot voice!",
            "a": "Beep boop performed!",
            "pts": 10,
            "type": "action"
          },
          {
            "q": "SWAP SCORES! Swap points with the leading team!",
            "a": "Scores swapped!",
            "pts": 0,
            "type": "swap"
          },
          {
            "q": "What does 'Turn Left' mean in Turkish?",
            "a": "Sola dön",
            "pts": 15,
            "type": "question"
          },
          {
            "q": "GALAXY WIN: Bluey awards 25 bonus points!",
            "a": "Gained 25 points!",
            "pts": 25,
            "type": "bonus"
          },
          {
            "q": "Use the word 'Traffic Light' in an English sentence!",
            "a": "Example: I like this traffic light.",
            "pts": 20,
            "type": "question"
          },
          {
            "q": "BLACK HOLE: Lose 15 points into space!",
            "a": "Lost 15 points!",
            "pts": -15,
            "type": "penalty"
          },
          {
            "q": "DOUBLE BONUS: Answer correctly: Is school fun?",
            "a": "Yes, learning with friends is super fun!",
            "pts": 30,
            "type": "question"
          },
          {
            "q": "TEAM VICTORY: Everyone shout 'Polly!' together!",
            "a": "Polly!",
            "pts": 10,
            "type": "action"
          }
        ],
        "lessonPlan": {
          "weeklyGoal": "Students can communicate confidently about 'Inside and Outside Cities' (City Life vs Countryside & Navigating Roads), identify core vocabulary, and participate in collaborative smartboard games.",
          "dailyPlan": [
            {
              "day": "Monday (Day 1)",
              "focus": "Vocabulary Exploration: Traffic Light, Zebra Crossing",
              "warmUp": "Polly's Morning Song & Mascot Welcome Chant",
              "presentation": "Smartboard interactive visual flashcards with GIPHY animations & real photos (No emojis).",
              "practice": "Pair matching card drill & natural character pronunciation practice.",
              "production": "Role-play dialogue: Ask peers about traffic light.",
              "wrapUp": "Quick-fire exit ticket check before lineup."
            },
            {
              "day": "Wednesday (Day 2)",
              "focus": "Grammar & Phonics Focus (Silent letters /k/ in knee, /w...)",
              "warmUp": "TPR Simon Says: Follow teacher's movement commands.",
              "presentation": "Interactive smartboard sorting and spelling drill.",
              "practice": "Baamboozle 4-Team Championship Round on Smartboard.",
              "production": "Student drawing portfolio & sentence builder.",
              "wrapUp": "Star badge award and team points celebration."
            }
          ],
          "teacherResources": {
            "physicalGames": [
              "Flyswatter Board Relay: Stick photo flashcards of Traffic Light on the whiteboard. Two teams race to slap the called word.",
              "Magic Bag Mystery: Place real classroom props or word cards in a bag. Students feel without looking and describe the item."
            ],
            "smartboardActivities": [
              "Baamboozle 4-Team Interactive Arena for Inside and Outside Cities with mystery cards and sound effects.",
              "GIF & Real Photo Carousel Drill: Tap the moving GIPHY sticker to hear character pronunciation."
            ]
          }
        }
      }
    ]
  },
  "stage3": {
    "title": "Stage 3 (Primary 3 / A1+)",
    "description": "Expanding communication: Teamwork, ecosystems, desert habitats, healthy foods, recipes, and past events.",
    "units": [
      {
        "id": "stage3_u1",
        "number": 1,
        "title": "Working Together",
        "cefr": "A1+",
        "theme": "Cooperation, School Rules & Projects",
        "grammar": "Present continuous (We are helping) & Modal Must / Mustn't",
        "phonics": "Consonant blends /str/ street, strong; /spr/ spring",
        "vocabulary": [
          {
            "word": "Teamwork",
            "meaning": "Collaborative effort of a group to achieve a goal",
            "turkish": "Takım çalışması",
            "realPhoto": "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&auto=format&fit=crop&q=80",
            "gifUrl": "https://media.giphy.com/media/l0MYt5jPR6QX5pnqM/giphy.gif",
            "characterVoice": "chase",
            "voiceLine": "PAW Patrol is on a roll! Teamwork makes the dream work!"
          },
          {
            "word": "Cooperate",
            "meaning": "To act or work together with shared purpose",
            "turkish": "İş birliği yapmak",
            "realPhoto": "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=600&auto=format&fit=crop&q=80",
            "gifUrl": "https://media.giphy.com/media/26BRv0ThflsDTjDUs/giphy.gif",
            "characterVoice": "polly",
            "voiceLine": "When we cooperate, every challenge is easy!"
          },
          {
            "word": "Project",
            "meaning": "A planned piece of work undertaken collaboratively",
            "turkish": "Proje",
            "realPhoto": "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=600&auto=format&fit=crop&q=80",
            "gifUrl": "https://media.giphy.com/media/xT9IgzoKnwFNmISR8I/giphy.gif",
            "characterVoice": "bluey",
            "voiceLine": "Let us build the grandest cardboard castle project!"
          },
          {
            "word": "Respect",
            "meaning": "Due regard for the feelings and rights of others",
            "turkish": "Saygı göstermek",
            "realPhoto": "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600&auto=format&fit=crop&q=80",
            "gifUrl": "https://media.giphy.com/media/3o7TKMt1VVNkHV2PaE/giphy.gif",
            "characterVoice": "peppa",
            "voiceLine": "Listen politely when your classmate speaks!"
          },
          {
            "word": "Goal",
            "meaning": "The object of an ambition or desired result",
            "turkish": "Hedef / Amaç",
            "realPhoto": "https://images.unsplash.com/photo-1511886929837-354d827aae26?w=600&auto=format&fit=crop&q=80",
            "gifUrl": "https://media.giphy.com/media/26FPJGjhefSJuaR0Y/giphy.gif",
            "characterVoice": "chase",
            "voiceLine": "Keep your eyes on the goal and work hard!"
          },
          {
            "word": "Rule",
            "meaning": "One of an authoritative set of regulations",
            "turkish": "Kural",
            "realPhoto": "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=600&auto=format&fit=crop&q=80",
            "gifUrl": "https://media.giphy.com/media/l41lFw057lAJQMwg0/giphy.gif",
            "characterVoice": "polly",
            "voiceLine": "Raise your hand before speaking in class!"
          }
        ],
        "baamboozleQuestions": [
          {
            "q": "What is the English word for 'Takım çalışması'?",
            "a": "Teamwork",
            "pts": 15,
            "type": "question"
          },
          {
            "q": "MYSTERY BOX: Polly found bonus treasure for your team!",
            "a": "You won 20 points!",
            "pts": 20,
            "type": "bonus"
          },
          {
            "q": "TPR CHALLENGE: Act out the theme 'Cooperation, School Rules & Projects' for 5 seconds!",
            "a": "Demonstrated by team with cheers",
            "pts": 10,
            "type": "action"
          },
          {
            "q": "How do you spell the word 'Cooperate'?",
            "a": "C - O - O - P - E - R - A - T - E",
            "pts": 15,
            "type": "question"
          },
          {
            "q": "OOPS! Peppa slipped in a muddy puddle! Lose 10 points.",
            "a": "Lost 10 points!",
            "pts": -10,
            "type": "penalty"
          },
          {
            "q": "TEAM ACTION: Stand up and give your teammates a high five!",
            "a": "High fives completed!",
            "pts": 10,
            "type": "action"
          },
          {
            "q": "STEAL! Steal 15 points from another team!",
            "a": "15 points transferred!",
            "pts": 15,
            "type": "steal"
          },
          {
            "q": "Name three things connected to 'Working Together'!",
            "a": "Teamwork, Cooperate, and Project",
            "pts": 20,
            "type": "question"
          },
          {
            "q": "Say 'Good job team!' in a funny robot voice!",
            "a": "Beep boop performed!",
            "pts": 10,
            "type": "action"
          },
          {
            "q": "SWAP SCORES! Swap points with the leading team!",
            "a": "Scores swapped!",
            "pts": 0,
            "type": "swap"
          },
          {
            "q": "What does 'Project' mean in Turkish?",
            "a": "Proje",
            "pts": 15,
            "type": "question"
          },
          {
            "q": "GALAXY WIN: Bluey awards 25 bonus points!",
            "a": "Gained 25 points!",
            "pts": 25,
            "type": "bonus"
          },
          {
            "q": "Use the word 'Teamwork' in an English sentence!",
            "a": "Example: I like this teamwork.",
            "pts": 20,
            "type": "question"
          },
          {
            "q": "BLACK HOLE: Lose 15 points into space!",
            "a": "Lost 15 points!",
            "pts": -15,
            "type": "penalty"
          },
          {
            "q": "DOUBLE BONUS: Answer correctly: Is school fun?",
            "a": "Yes, learning with friends is super fun!",
            "pts": 30,
            "type": "question"
          },
          {
            "q": "TEAM VICTORY: Everyone shout 'Polly!' together!",
            "a": "Polly!",
            "pts": 10,
            "type": "action"
          }
        ],
        "lessonPlan": {
          "weeklyGoal": "Students can communicate confidently about 'Working Together' (Cooperation, School Rules & Projects), identify core vocabulary, and participate in collaborative smartboard games.",
          "dailyPlan": [
            {
              "day": "Monday (Day 1)",
              "focus": "Vocabulary Exploration: Teamwork, Cooperate",
              "warmUp": "Polly's Morning Song & Mascot Welcome Chant",
              "presentation": "Smartboard interactive visual flashcards with GIPHY animations & real photos (No emojis).",
              "practice": "Pair matching card drill & natural character pronunciation practice.",
              "production": "Role-play dialogue: Ask peers about teamwork.",
              "wrapUp": "Quick-fire exit ticket check before lineup."
            },
            {
              "day": "Wednesday (Day 2)",
              "focus": "Grammar & Phonics Focus (Consonant blends /str/ street,...)",
              "warmUp": "TPR Simon Says: Follow teacher's movement commands.",
              "presentation": "Interactive smartboard sorting and spelling drill.",
              "practice": "Baamboozle 4-Team Championship Round on Smartboard.",
              "production": "Student drawing portfolio & sentence builder.",
              "wrapUp": "Star badge award and team points celebration."
            }
          ],
          "teacherResources": {
            "physicalGames": [
              "Flyswatter Board Relay: Stick photo flashcards of Teamwork on the whiteboard. Two teams race to slap the called word.",
              "Magic Bag Mystery: Place real classroom props or word cards in a bag. Students feel without looking and describe the item."
            ],
            "smartboardActivities": [
              "Baamboozle 4-Team Interactive Arena for Working Together with mystery cards and sound effects.",
              "GIF & Real Photo Carousel Drill: Tap the moving GIPHY sticker to hear character pronunciation."
            ]
          }
        }
      },
      {
        "id": "stage3_u2",
        "number": 2,
        "title": "Family and Community",
        "cefr": "A1+",
        "theme": "Celebrations, Traditions & Helpers",
        "grammar": "Past simple irregular verbs (came, saw, ate, had, made)",
        "phonics": "Soft c /s/ in city, soft g /dʒ/ in giant, gentle",
        "vocabulary": [
          {
            "word": "Festival",
            "meaning": "A celebration marked by special observances",
            "turkish": "Festival / Bayram",
            "realPhoto": "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=600&auto=format&fit=crop&q=80",
            "gifUrl": "https://media.giphy.com/media/3o7TKSjRrfIPjeiVyM/giphy.gif",
            "characterVoice": "bluey",
            "voiceLine": "Music, laughter, and dancing at the autumn festival!"
          },
          {
            "word": "Tradition",
            "meaning": "Transmission of customs from generation to generation",
            "turkish": "Gelenek",
            "realPhoto": "https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=600&auto=format&fit=crop&q=80",
            "gifUrl": "https://media.giphy.com/media/26FPJGjhefSJuaR0Y/giphy.gif",
            "characterVoice": "polly",
            "voiceLine": "Sharing holiday meals is our favorite tradition!"
          },
          {
            "word": "Costume",
            "meaning": "Clothes worn to look like someone or something else",
            "turkish": "Kostüm",
            "realPhoto": "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=600&auto=format&fit=crop&q=80",
            "gifUrl": "https://media.giphy.com/media/l41lFw057lAJQMwg0/giphy.gif",
            "characterVoice": "peppa",
            "voiceLine": "Peppa is wearing a shiny fairy princess costume!"
          },
          {
            "word": "Lantern",
            "meaning": "A lamp with a transparent case protecting flame",
            "turkish": "Fener",
            "realPhoto": "https://images.unsplash.com/photo-1513151233558-d860c5398176?w=600&auto=format&fit=crop&q=80",
            "gifUrl": "https://media.giphy.com/media/3o7TKDkDbIDJieKbVm/giphy.gif",
            "characterVoice": "chase",
            "voiceLine": "Glowing paper lanterns brighten up the night sky!"
          },
          {
            "word": "Fireworks",
            "meaning": "Pyrotechnic devices producing sparks and flashes",
            "turkish": "Havai fişek",
            "realPhoto": "https://images.unsplash.com/photo-1498931299472-f7a63a5a1cfa?w=600&auto=format&fit=crop&q=80",
            "gifUrl": "https://media.giphy.com/media/13HgwGsXF0aiGY/giphy.gif",
            "characterVoice": "bluey",
            "voiceLine": "Ooh! Aah! Sparkling bursts of color across the dark sky!"
          },
          {
            "word": "Feast",
            "meaning": "A large meal, typically in celebration of something",
            "turkish": "Ziyafet",
            "realPhoto": "https://images.unsplash.com/photo-1555244162-803834f70033?w=600&auto=format&fit=crop&q=80",
            "gifUrl": "https://media.giphy.com/media/xT0xeJpnrWC4XWblEk/giphy.gif",
            "characterVoice": "peppa",
            "voiceLine": "Delicious food for everyone at the family table!"
          }
        ],
        "baamboozleQuestions": [
          {
            "q": "What is the English word for 'Festival / Bayram'?",
            "a": "Festival",
            "pts": 15,
            "type": "question"
          },
          {
            "q": "MYSTERY BOX: Polly found bonus treasure for your team!",
            "a": "You won 20 points!",
            "pts": 20,
            "type": "bonus"
          },
          {
            "q": "TPR CHALLENGE: Act out the theme 'Celebrations, Traditions & Helpers' for 5 seconds!",
            "a": "Demonstrated by team with cheers",
            "pts": 10,
            "type": "action"
          },
          {
            "q": "How do you spell the word 'Tradition'?",
            "a": "T - R - A - D - I - T - I - O - N",
            "pts": 15,
            "type": "question"
          },
          {
            "q": "OOPS! Peppa slipped in a muddy puddle! Lose 10 points.",
            "a": "Lost 10 points!",
            "pts": -10,
            "type": "penalty"
          },
          {
            "q": "TEAM ACTION: Stand up and give your teammates a high five!",
            "a": "High fives completed!",
            "pts": 10,
            "type": "action"
          },
          {
            "q": "STEAL! Steal 15 points from another team!",
            "a": "15 points transferred!",
            "pts": 15,
            "type": "steal"
          },
          {
            "q": "Name three things connected to 'Family and Community'!",
            "a": "Festival, Tradition, and Costume",
            "pts": 20,
            "type": "question"
          },
          {
            "q": "Say 'Good job team!' in a funny robot voice!",
            "a": "Beep boop performed!",
            "pts": 10,
            "type": "action"
          },
          {
            "q": "SWAP SCORES! Swap points with the leading team!",
            "a": "Scores swapped!",
            "pts": 0,
            "type": "swap"
          },
          {
            "q": "What does 'Costume' mean in Turkish?",
            "a": "Kostüm",
            "pts": 15,
            "type": "question"
          },
          {
            "q": "GALAXY WIN: Bluey awards 25 bonus points!",
            "a": "Gained 25 points!",
            "pts": 25,
            "type": "bonus"
          },
          {
            "q": "Use the word 'Festival' in an English sentence!",
            "a": "Example: I like this festival.",
            "pts": 20,
            "type": "question"
          },
          {
            "q": "BLACK HOLE: Lose 15 points into space!",
            "a": "Lost 15 points!",
            "pts": -15,
            "type": "penalty"
          },
          {
            "q": "DOUBLE BONUS: Answer correctly: Is school fun?",
            "a": "Yes, learning with friends is super fun!",
            "pts": 30,
            "type": "question"
          },
          {
            "q": "TEAM VICTORY: Everyone shout 'Polly!' together!",
            "a": "Polly!",
            "pts": 10,
            "type": "action"
          }
        ],
        "lessonPlan": {
          "weeklyGoal": "Students can communicate confidently about 'Family and Community' (Celebrations, Traditions & Helpers), identify core vocabulary, and participate in collaborative smartboard games.",
          "dailyPlan": [
            {
              "day": "Monday (Day 1)",
              "focus": "Vocabulary Exploration: Festival, Tradition",
              "warmUp": "Polly's Morning Song & Mascot Welcome Chant",
              "presentation": "Smartboard interactive visual flashcards with GIPHY animations & real photos (No emojis).",
              "practice": "Pair matching card drill & natural character pronunciation practice.",
              "production": "Role-play dialogue: Ask peers about festival.",
              "wrapUp": "Quick-fire exit ticket check before lineup."
            },
            {
              "day": "Wednesday (Day 2)",
              "focus": "Grammar & Phonics Focus (Soft c /s/ in city, soft g /dʒ...)",
              "warmUp": "TPR Simon Says: Follow teacher's movement commands.",
              "presentation": "Interactive smartboard sorting and spelling drill.",
              "practice": "Baamboozle 4-Team Championship Round on Smartboard.",
              "production": "Student drawing portfolio & sentence builder.",
              "wrapUp": "Star badge award and team points celebration."
            }
          ],
          "teacherResources": {
            "physicalGames": [
              "Flyswatter Board Relay: Stick photo flashcards of Festival on the whiteboard. Two teams race to slap the called word.",
              "Magic Bag Mystery: Place real classroom props or word cards in a bag. Students feel without looking and describe the item."
            ],
            "smartboardActivities": [
              "Baamboozle 4-Team Interactive Arena for Family and Community with mystery cards and sound effects.",
              "GIF & Real Photo Carousel Drill: Tap the moving GIPHY sticker to hear character pronunciation."
            ]
          }
        }
      },
      {
        "id": "stage3_u3",
        "number": 3,
        "title": "The Desert",
        "cefr": "A1+",
        "theme": "Desert Ecosystems, Camels & Climate",
        "grammar": "Conjunctions: because, so, although; Desert adjectives",
        "phonics": "Triple consonant blends /spl/ splash, /scr/ scream",
        "vocabulary": [
          {
            "word": "Desert",
            "meaning": "A barren dry area of land with little water",
            "turkish": "Çöl",
            "realPhoto": "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?w=600&auto=format&fit=crop&q=80",
            "gifUrl": "https://media.giphy.com/media/3o7btQ8jDTPGDpgc6I/giphy.gif",
            "characterVoice": "chase",
            "voiceLine": "Rolling sand dunes stretch across the sunny desert!"
          },
          {
            "word": "Camel",
            "meaning": "A large animal with humps adapted to deserts",
            "turkish": "Deve",
            "realPhoto": "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=600&auto=format&fit=crop&q=80",
            "gifUrl": "https://media.giphy.com/media/3o7TKSjRrfIPjeiVyM/giphy.gif",
            "characterVoice": "polly",
            "voiceLine": "Camels can walk for miles across scorching sands!"
          },
          {
            "word": "Oasis",
            "meaning": "A fertile spot in a desert where water is found",
            "turkish": "Vaha",
            "realPhoto": "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=600&auto=format&fit=crop&q=80",
            "gifUrl": "https://media.giphy.com/media/26FPJGjhefSJuaR0Y/giphy.gif",
            "characterVoice": "bluey",
            "voiceLine": "Cool palm trees and fresh water at the oasis!"
          },
          {
            "word": "Sand Dune",
            "meaning": "A hill of sand built by wind in the desert",
            "turkish": "Kum tepesi",
            "realPhoto": "https://images.unsplash.com/photo-1473580044384-7ba9967e16a0?w=600&auto=format&fit=crop&q=80",
            "gifUrl": "https://media.giphy.com/media/l41lFw057lAJQMwg0/giphy.gif",
            "characterVoice": "peppa",
            "voiceLine": "Slide down the soft golden sand dune!"
          },
          {
            "word": "Cactus",
            "meaning": "A succulent spiny plant adapted to dry climates",
            "turkish": "Kaktüs",
            "realPhoto": "https://images.unsplash.com/photo-1509223197845-458d87318791?w=600&auto=format&fit=crop&q=80",
            "gifUrl": "https://media.giphy.com/media/13HgwGsXF0aiGY/giphy.gif",
            "characterVoice": "chase",
            "voiceLine": "Cactus spines store water in desert heat!"
          },
          {
            "word": "Lizard",
            "meaning": "A cold-blooded reptile with scaly skin",
            "turkish": "Kertenkele",
            "realPhoto": "https://images.unsplash.com/photo-1504450874802-0ba2bcd9b5ae?w=600&auto=format&fit=crop&q=80",
            "gifUrl": "https://media.giphy.com/media/3o7TKDkDbIDJieKbVm/giphy.gif",
            "characterVoice": "polly",
            "voiceLine": "A fast desert lizard basking on warm rocks!"
          }
        ],
        "baamboozleQuestions": [
          {
            "q": "What is the English word for 'Çöl'?",
            "a": "Desert",
            "pts": 15,
            "type": "question"
          },
          {
            "q": "MYSTERY BOX: Polly found bonus treasure for your team!",
            "a": "You won 20 points!",
            "pts": 20,
            "type": "bonus"
          },
          {
            "q": "TPR CHALLENGE: Act out the theme 'Desert Ecosystems, Camels & Climate' for 5 seconds!",
            "a": "Demonstrated by team with cheers",
            "pts": 10,
            "type": "action"
          },
          {
            "q": "How do you spell the word 'Camel'?",
            "a": "C - A - M - E - L",
            "pts": 15,
            "type": "question"
          },
          {
            "q": "OOPS! Peppa slipped in a muddy puddle! Lose 10 points.",
            "a": "Lost 10 points!",
            "pts": -10,
            "type": "penalty"
          },
          {
            "q": "TEAM ACTION: Stand up and give your teammates a high five!",
            "a": "High fives completed!",
            "pts": 10,
            "type": "action"
          },
          {
            "q": "STEAL! Steal 15 points from another team!",
            "a": "15 points transferred!",
            "pts": 15,
            "type": "steal"
          },
          {
            "q": "Name three things connected to 'The Desert'!",
            "a": "Desert, Camel, and Oasis",
            "pts": 20,
            "type": "question"
          },
          {
            "q": "Say 'Good job team!' in a funny robot voice!",
            "a": "Beep boop performed!",
            "pts": 10,
            "type": "action"
          },
          {
            "q": "SWAP SCORES! Swap points with the leading team!",
            "a": "Scores swapped!",
            "pts": 0,
            "type": "swap"
          },
          {
            "q": "What does 'Oasis' mean in Turkish?",
            "a": "Vaha",
            "pts": 15,
            "type": "question"
          },
          {
            "q": "GALAXY WIN: Bluey awards 25 bonus points!",
            "a": "Gained 25 points!",
            "pts": 25,
            "type": "bonus"
          },
          {
            "q": "Use the word 'Desert' in an English sentence!",
            "a": "Example: I like this desert.",
            "pts": 20,
            "type": "question"
          },
          {
            "q": "BLACK HOLE: Lose 15 points into space!",
            "a": "Lost 15 points!",
            "pts": -15,
            "type": "penalty"
          },
          {
            "q": "DOUBLE BONUS: Answer correctly: Is school fun?",
            "a": "Yes, learning with friends is super fun!",
            "pts": 30,
            "type": "question"
          },
          {
            "q": "TEAM VICTORY: Everyone shout 'Polly!' together!",
            "a": "Polly!",
            "pts": 10,
            "type": "action"
          }
        ],
        "lessonPlan": {
          "weeklyGoal": "Students can communicate confidently about 'The Desert' (Desert Ecosystems, Camels & Climate), identify core vocabulary, and participate in collaborative smartboard games.",
          "dailyPlan": [
            {
              "day": "Monday (Day 1)",
              "focus": "Vocabulary Exploration: Desert, Camel",
              "warmUp": "Polly's Morning Song & Mascot Welcome Chant",
              "presentation": "Smartboard interactive visual flashcards with GIPHY animations & real photos (No emojis).",
              "practice": "Pair matching card drill & natural character pronunciation practice.",
              "production": "Role-play dialogue: Ask peers about desert.",
              "wrapUp": "Quick-fire exit ticket check before lineup."
            },
            {
              "day": "Wednesday (Day 2)",
              "focus": "Grammar & Phonics Focus (Triple consonant blends /spl/ ...)",
              "warmUp": "TPR Simon Says: Follow teacher's movement commands.",
              "presentation": "Interactive smartboard sorting and spelling drill.",
              "practice": "Baamboozle 4-Team Championship Round on Smartboard.",
              "production": "Student drawing portfolio & sentence builder.",
              "wrapUp": "Star badge award and team points celebration."
            }
          ],
          "teacherResources": {
            "physicalGames": [
              "Flyswatter Board Relay: Stick photo flashcards of Desert on the whiteboard. Two teams race to slap the called word.",
              "Magic Bag Mystery: Place real classroom props or word cards in a bag. Students feel without looking and describe the item."
            ],
            "smartboardActivities": [
              "Baamboozle 4-Team Interactive Arena for The Desert with mystery cards and sound effects.",
              "GIF & Real Photo Carousel Drill: Tap the moving GIPHY sticker to hear character pronunciation."
            ]
          }
        }
      },
      {
        "id": "stage3_u4",
        "number": 4,
        "title": "Look What We Can Make!",
        "cefr": "A1+",
        "theme": "Inventions, Crafts & Ancient Tools",
        "grammar": "Passive voice: is made of, are used for / Sequencers",
        "phonics": "Prefixes un- in unhappy, re- in rebuild, recycle",
        "vocabulary": [
          {
            "word": "Invention",
            "meaning": "A useful new device or process created by human",
            "turkish": "İcat / Buluş",
            "realPhoto": "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&auto=format&fit=crop&q=80",
            "gifUrl": "https://media.giphy.com/media/3o7TKMt1VVNkHV2PaE/giphy.gif",
            "characterVoice": "polly",
            "voiceLine": "Inventions help people travel, communicate and learn!"
          },
          {
            "word": "Wheel",
            "meaning": "A circular component that rotates on an axle",
            "turkish": "Tekerlek",
            "realPhoto": "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?w=600&auto=format&fit=crop&q=80",
            "gifUrl": "https://media.giphy.com/media/26u4cqiYI30juCOGY/giphy.gif",
            "characterVoice": "chase",
            "voiceLine": "The wheel is one of humankind's greatest inventions!"
          },
          {
            "word": "Compass",
            "meaning": "An instrument showing magnetic direction",
            "turkish": "Pusula",
            "realPhoto": "https://images.unsplash.com/photo-1518609878373-06d740f60d8b?w=600&auto=format&fit=crop&q=80",
            "gifUrl": "https://media.giphy.com/media/26FPJGjhefSJuaR0Y/giphy.gif",
            "characterVoice": "bluey",
            "voiceLine": "The needle always points north!"
          },
          {
            "word": "Pottery",
            "meaning": "Pots and dishes made from clay and baked",
            "turkish": "Çömlekçilik",
            "realPhoto": "https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=600&auto=format&fit=crop&q=80",
            "gifUrl": "https://media.giphy.com/media/l41lFw057lAJQMwg0/giphy.gif",
            "characterVoice": "peppa",
            "voiceLine": "Shape the wet clay on the spinning wheel!"
          },
          {
            "word": "Metal",
            "meaning": "A solid material that conducts heat and electricity",
            "turkish": "Metal",
            "realPhoto": "https://images.unsplash.com/photo-1504917599217-d4dc5ebe6122?w=600&auto=format&fit=crop&q=80",
            "gifUrl": "https://media.giphy.com/media/13HgwGsXF0aiGY/giphy.gif",
            "characterVoice": "chase",
            "voiceLine": "Strong metal beams hold up bridges and towers!"
          },
          {
            "word": "Craft",
            "meaning": "An activity involving skill in making things by hand",
            "turkish": "El sanatı",
            "realPhoto": "https://images.unsplash.com/photo-1452860606245-08befc0ff44b?w=600&auto=format&fit=crop&q=80",
            "gifUrl": "https://media.giphy.com/media/3o7TKDkDbIDJieKbVm/giphy.gif",
            "characterVoice": "polly",
            "voiceLine": "Paper folding and weaving are wonderful crafts!"
          }
        ],
        "baamboozleQuestions": [
          {
            "q": "What is the English word for 'İcat / Buluş'?",
            "a": "Invention",
            "pts": 15,
            "type": "question"
          },
          {
            "q": "MYSTERY BOX: Polly found bonus treasure for your team!",
            "a": "You won 20 points!",
            "pts": 20,
            "type": "bonus"
          },
          {
            "q": "TPR CHALLENGE: Act out the theme 'Inventions, Crafts & Ancient Tools' for 5 seconds!",
            "a": "Demonstrated by team with cheers",
            "pts": 10,
            "type": "action"
          },
          {
            "q": "How do you spell the word 'Wheel'?",
            "a": "W - H - E - E - L",
            "pts": 15,
            "type": "question"
          },
          {
            "q": "OOPS! Peppa slipped in a muddy puddle! Lose 10 points.",
            "a": "Lost 10 points!",
            "pts": -10,
            "type": "penalty"
          },
          {
            "q": "TEAM ACTION: Stand up and give your teammates a high five!",
            "a": "High fives completed!",
            "pts": 10,
            "type": "action"
          },
          {
            "q": "STEAL! Steal 15 points from another team!",
            "a": "15 points transferred!",
            "pts": 15,
            "type": "steal"
          },
          {
            "q": "Name three things connected to 'Look What We Can Make!'!",
            "a": "Invention, Wheel, and Compass",
            "pts": 20,
            "type": "question"
          },
          {
            "q": "Say 'Good job team!' in a funny robot voice!",
            "a": "Beep boop performed!",
            "pts": 10,
            "type": "action"
          },
          {
            "q": "SWAP SCORES! Swap points with the leading team!",
            "a": "Scores swapped!",
            "pts": 0,
            "type": "swap"
          },
          {
            "q": "What does 'Compass' mean in Turkish?",
            "a": "Pusula",
            "pts": 15,
            "type": "question"
          },
          {
            "q": "GALAXY WIN: Bluey awards 25 bonus points!",
            "a": "Gained 25 points!",
            "pts": 25,
            "type": "bonus"
          },
          {
            "q": "Use the word 'Invention' in an English sentence!",
            "a": "Example: I like this invention.",
            "pts": 20,
            "type": "question"
          },
          {
            "q": "BLACK HOLE: Lose 15 points into space!",
            "a": "Lost 15 points!",
            "pts": -15,
            "type": "penalty"
          },
          {
            "q": "DOUBLE BONUS: Answer correctly: Is school fun?",
            "a": "Yes, learning with friends is super fun!",
            "pts": 30,
            "type": "question"
          },
          {
            "q": "TEAM VICTORY: Everyone shout 'Polly!' together!",
            "a": "Polly!",
            "pts": 10,
            "type": "action"
          }
        ],
        "lessonPlan": {
          "weeklyGoal": "Students can communicate confidently about 'Look What We Can Make!' (Inventions, Crafts & Ancient Tools), identify core vocabulary, and participate in collaborative smartboard games.",
          "dailyPlan": [
            {
              "day": "Monday (Day 1)",
              "focus": "Vocabulary Exploration: Invention, Wheel",
              "warmUp": "Polly's Morning Song & Mascot Welcome Chant",
              "presentation": "Smartboard interactive visual flashcards with GIPHY animations & real photos (No emojis).",
              "practice": "Pair matching card drill & natural character pronunciation practice.",
              "production": "Role-play dialogue: Ask peers about invention.",
              "wrapUp": "Quick-fire exit ticket check before lineup."
            },
            {
              "day": "Wednesday (Day 2)",
              "focus": "Grammar & Phonics Focus (Prefixes un- in unhappy, re- i...)",
              "warmUp": "TPR Simon Says: Follow teacher's movement commands.",
              "presentation": "Interactive smartboard sorting and spelling drill.",
              "practice": "Baamboozle 4-Team Championship Round on Smartboard.",
              "production": "Student drawing portfolio & sentence builder.",
              "wrapUp": "Star badge award and team points celebration."
            }
          ],
          "teacherResources": {
            "physicalGames": [
              "Flyswatter Board Relay: Stick photo flashcards of Invention on the whiteboard. Two teams race to slap the called word.",
              "Magic Bag Mystery: Place real classroom props or word cards in a bag. Students feel without looking and describe the item."
            ],
            "smartboardActivities": [
              "Baamboozle 4-Team Interactive Arena for Look What We Can Make! with mystery cards and sound effects.",
              "GIF & Real Photo Carousel Drill: Tap the moving GIPHY sticker to hear character pronunciation."
            ]
          }
        }
      },
      {
        "id": "stage3_u5",
        "number": 5,
        "title": "The World of Animals",
        "cefr": "A1+",
        "theme": "Wildlife Habitats, Carnivores & Diets",
        "grammar": "Comparative & Superlative adjectives (faster than, the biggest)",
        "phonics": "Suffixes -ful in helpful, -less in helpless",
        "vocabulary": [
          {
            "word": "Habitat",
            "meaning": "The natural home or environment of an animal",
            "turkish": "Yaşam alanı",
            "realPhoto": "https://images.unsplash.com/photo-1448375240586-882707db888b?w=600&auto=format&fit=crop&q=80",
            "gifUrl": "https://media.giphy.com/media/3o7TKSjRrfIPjeiVyM/giphy.gif",
            "characterVoice": "polly",
            "voiceLine": "Polar bears live in the icy Arctic habitat!"
          },
          {
            "word": "Predator",
            "meaning": "An animal that naturally preys on others",
            "turkish": "Yırtıcı / Avcı",
            "realPhoto": "https://images.unsplash.com/photo-1534188753412-3e26d0d618d6?w=600&auto=format&fit=crop&q=80",
            "gifUrl": "https://media.giphy.com/media/26FPJGjhefSJuaR0Y/giphy.gif",
            "characterVoice": "chase",
            "voiceLine": "The tiger is a powerful and silent predator!"
          },
          {
            "word": "Prey",
            "meaning": "An animal hunted and killed by another for food",
            "turkish": "Av",
            "realPhoto": "https://images.unsplash.com/photo-1484557052118-f32bd25b45b5?w=600&auto=format&fit=crop&q=80",
            "gifUrl": "https://media.giphy.com/media/l41lFw057lAJQMwg0/giphy.gif",
            "characterVoice": "bluey",
            "voiceLine": "The deer stays alert and runs fast to escape!"
          },
          {
            "word": "Herbivore",
            "meaning": "An animal that feeds mainly on plants",
            "turkish": "Otobur",
            "realPhoto": "https://images.unsplash.com/photo-1534567153574-2b12153a87f0?w=600&auto=format&fit=crop&q=80",
            "gifUrl": "https://media.giphy.com/media/13HgwGsXF0aiGY/giphy.gif",
            "characterVoice": "peppa",
            "voiceLine": "Elephants and pandas are gentle herbivores!"
          },
          {
            "word": "Feather",
            "meaning": "Flat structures growing from bird skin",
            "turkish": "Tüy",
            "realPhoto": "https://images.unsplash.com/photo-1520763185298-1b434c919102?w=600&auto=format&fit=crop&q=80",
            "gifUrl": "https://media.giphy.com/media/3o7TKDkDbIDJieKbVm/giphy.gif",
            "characterVoice": "polly",
            "voiceLine": "Polly's parrot feathers are yellow, red and green!"
          },
          {
            "word": "Fur",
            "meaning": "The short, fine, soft hair of certain animals",
            "turkish": "Kürk",
            "realPhoto": "https://images.unsplash.com/photo-1543466835-00a7907e9de1?w=600&auto=format&fit=crop&q=80",
            "gifUrl": "https://media.giphy.com/media/26u4cqiYI30juCOGY/giphy.gif",
            "characterVoice": "chase",
            "voiceLine": "Thick warm fur protects husky dogs in winter!"
          }
        ],
        "baamboozleQuestions": [
          {
            "q": "What is the English word for 'Yaşam alanı'?",
            "a": "Habitat",
            "pts": 15,
            "type": "question"
          },
          {
            "q": "MYSTERY BOX: Polly found bonus treasure for your team!",
            "a": "You won 20 points!",
            "pts": 20,
            "type": "bonus"
          },
          {
            "q": "TPR CHALLENGE: Act out the theme 'Wildlife Habitats, Carnivores & Diets' for 5 seconds!",
            "a": "Demonstrated by team with cheers",
            "pts": 10,
            "type": "action"
          },
          {
            "q": "How do you spell the word 'Predator'?",
            "a": "P - R - E - D - A - T - O - R",
            "pts": 15,
            "type": "question"
          },
          {
            "q": "OOPS! Peppa slipped in a muddy puddle! Lose 10 points.",
            "a": "Lost 10 points!",
            "pts": -10,
            "type": "penalty"
          },
          {
            "q": "TEAM ACTION: Stand up and give your teammates a high five!",
            "a": "High fives completed!",
            "pts": 10,
            "type": "action"
          },
          {
            "q": "STEAL! Steal 15 points from another team!",
            "a": "15 points transferred!",
            "pts": 15,
            "type": "steal"
          },
          {
            "q": "Name three things connected to 'The World of Animals'!",
            "a": "Habitat, Predator, and Prey",
            "pts": 20,
            "type": "question"
          },
          {
            "q": "Say 'Good job team!' in a funny robot voice!",
            "a": "Beep boop performed!",
            "pts": 10,
            "type": "action"
          },
          {
            "q": "SWAP SCORES! Swap points with the leading team!",
            "a": "Scores swapped!",
            "pts": 0,
            "type": "swap"
          },
          {
            "q": "What does 'Prey' mean in Turkish?",
            "a": "Av",
            "pts": 15,
            "type": "question"
          },
          {
            "q": "GALAXY WIN: Bluey awards 25 bonus points!",
            "a": "Gained 25 points!",
            "pts": 25,
            "type": "bonus"
          },
          {
            "q": "Use the word 'Habitat' in an English sentence!",
            "a": "Example: I like this habitat.",
            "pts": 20,
            "type": "question"
          },
          {
            "q": "BLACK HOLE: Lose 15 points into space!",
            "a": "Lost 15 points!",
            "pts": -15,
            "type": "penalty"
          },
          {
            "q": "DOUBLE BONUS: Answer correctly: Is school fun?",
            "a": "Yes, learning with friends is super fun!",
            "pts": 30,
            "type": "question"
          },
          {
            "q": "TEAM VICTORY: Everyone shout 'Polly!' together!",
            "a": "Polly!",
            "pts": 10,
            "type": "action"
          }
        ],
        "lessonPlan": {
          "weeklyGoal": "Students can communicate confidently about 'The World of Animals' (Wildlife Habitats, Carnivores & Diets), identify core vocabulary, and participate in collaborative smartboard games.",
          "dailyPlan": [
            {
              "day": "Monday (Day 1)",
              "focus": "Vocabulary Exploration: Habitat, Predator",
              "warmUp": "Polly's Morning Song & Mascot Welcome Chant",
              "presentation": "Smartboard interactive visual flashcards with GIPHY animations & real photos (No emojis).",
              "practice": "Pair matching card drill & natural character pronunciation practice.",
              "production": "Role-play dialogue: Ask peers about habitat.",
              "wrapUp": "Quick-fire exit ticket check before lineup."
            },
            {
              "day": "Wednesday (Day 2)",
              "focus": "Grammar & Phonics Focus (Suffixes -ful in helpful, -les...)",
              "warmUp": "TPR Simon Says: Follow teacher's movement commands.",
              "presentation": "Interactive smartboard sorting and spelling drill.",
              "practice": "Baamboozle 4-Team Championship Round on Smartboard.",
              "production": "Student drawing portfolio & sentence builder.",
              "wrapUp": "Star badge award and team points celebration."
            }
          ],
          "teacherResources": {
            "physicalGames": [
              "Flyswatter Board Relay: Stick photo flashcards of Habitat on the whiteboard. Two teams race to slap the called word.",
              "Magic Bag Mystery: Place real classroom props or word cards in a bag. Students feel without looking and describe the item."
            ],
            "smartboardActivities": [
              "Baamboozle 4-Team Interactive Arena for The World of Animals with mystery cards and sound effects.",
              "GIF & Real Photo Carousel Drill: Tap the moving GIPHY sticker to hear character pronunciation."
            ]
          }
        }
      },
      {
        "id": "stage3_u6",
        "number": 6,
        "title": "Food and Fun",
        "cefr": "A1+",
        "theme": "Healthy Eating, Recipes & Cooking Science",
        "grammar": "Countable & uncountable nouns, some/any, How much/many",
        "phonics": "Silent letters /k/ in knife, /w/ in wrap, /b/ in crumb",
        "vocabulary": [
          {
            "word": "Recipe",
            "meaning": "A set of instructions for preparing a dish",
            "turkish": "Yemek tarifi",
            "realPhoto": "https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=600&auto=format&fit=crop&q=80",
            "gifUrl": "https://media.giphy.com/media/3o7TKMt1VVNkHV2PaE/giphy.gif",
            "characterVoice": "peppa",
            "voiceLine": "Follow the recipe to bake sweet berry muffins!"
          },
          {
            "word": "Ingredient",
            "meaning": "Any of the foods that are combined to make a dish",
            "turkish": "Malzeme",
            "realPhoto": "https://images.unsplash.com/photo-1498837167922-ddd27525d352?w=600&auto=format&fit=crop&q=80",
            "gifUrl": "https://media.giphy.com/media/26FPJGjhefSJuaR0Y/giphy.gif",
            "characterVoice": "bluey",
            "voiceLine": "Flour, eggs, and milk are key pancake ingredients!"
          },
          {
            "word": "Delicious",
            "meaning": "Highly pleasant to the taste",
            "turkish": "Lezzetli",
            "realPhoto": "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&auto=format&fit=crop&q=80",
            "gifUrl": "https://media.giphy.com/media/l41lFw057lAJQMwg0/giphy.gif",
            "characterVoice": "peppa",
            "voiceLine": "Mmm! This fresh fruit salad tastes delicious!"
          },
          {
            "word": "Vegetable",
            "meaning": "A plant or part of plant used as food",
            "turkish": "Sebze",
            "realPhoto": "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=600&auto=format&fit=crop&q=80",
            "gifUrl": "https://media.giphy.com/media/13HgwGsXF0aiGY/giphy.gif",
            "characterVoice": "chase",
            "voiceLine": "Carrots, broccoli and peppers keep you strong!"
          },
          {
            "word": "Nutrition",
            "meaning": "Food necessary for health and growth",
            "turkish": "Beslenme",
            "realPhoto": "https://images.unsplash.com/photo-1490818387583-1baba5e638af?w=600&auto=format&fit=crop&q=80",
            "gifUrl": "https://media.giphy.com/media/3o7TKDkDbIDJieKbVm/giphy.gif",
            "characterVoice": "polly",
            "voiceLine": "A rainbow plate gives your body full nutrition!"
          },
          {
            "word": "Oven",
            "meaning": "An enclosed compartment for baking and roasting",
            "turkish": "Fırın",
            "realPhoto": "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=600&auto=format&fit=crop&q=80",
            "gifUrl": "https://media.giphy.com/media/26u4cqiYI30juCOGY/giphy.gif",
            "characterVoice": "peppa",
            "voiceLine": "Careful, the warm oven is baking pizza crust!"
          }
        ],
        "baamboozleQuestions": [
          {
            "q": "What is the English word for 'Yemek tarifi'?",
            "a": "Recipe",
            "pts": 15,
            "type": "question"
          },
          {
            "q": "MYSTERY BOX: Polly found bonus treasure for your team!",
            "a": "You won 20 points!",
            "pts": 20,
            "type": "bonus"
          },
          {
            "q": "TPR CHALLENGE: Act out the theme 'Healthy Eating, Recipes & Cooking Science' for 5 seconds!",
            "a": "Demonstrated by team with cheers",
            "pts": 10,
            "type": "action"
          },
          {
            "q": "How do you spell the word 'Ingredient'?",
            "a": "I - N - G - R - E - D - I - E - N - T",
            "pts": 15,
            "type": "question"
          },
          {
            "q": "OOPS! Peppa slipped in a muddy puddle! Lose 10 points.",
            "a": "Lost 10 points!",
            "pts": -10,
            "type": "penalty"
          },
          {
            "q": "TEAM ACTION: Stand up and give your teammates a high five!",
            "a": "High fives completed!",
            "pts": 10,
            "type": "action"
          },
          {
            "q": "STEAL! Steal 15 points from another team!",
            "a": "15 points transferred!",
            "pts": 15,
            "type": "steal"
          },
          {
            "q": "Name three things connected to 'Food and Fun'!",
            "a": "Recipe, Ingredient, and Delicious",
            "pts": 20,
            "type": "question"
          },
          {
            "q": "Say 'Good job team!' in a funny robot voice!",
            "a": "Beep boop performed!",
            "pts": 10,
            "type": "action"
          },
          {
            "q": "SWAP SCORES! Swap points with the leading team!",
            "a": "Scores swapped!",
            "pts": 0,
            "type": "swap"
          },
          {
            "q": "What does 'Delicious' mean in Turkish?",
            "a": "Lezzetli",
            "pts": 15,
            "type": "question"
          },
          {
            "q": "GALAXY WIN: Bluey awards 25 bonus points!",
            "a": "Gained 25 points!",
            "pts": 25,
            "type": "bonus"
          },
          {
            "q": "Use the word 'Recipe' in an English sentence!",
            "a": "Example: I like this recipe.",
            "pts": 20,
            "type": "question"
          },
          {
            "q": "BLACK HOLE: Lose 15 points into space!",
            "a": "Lost 15 points!",
            "pts": -15,
            "type": "penalty"
          },
          {
            "q": "DOUBLE BONUS: Answer correctly: Is school fun?",
            "a": "Yes, learning with friends is super fun!",
            "pts": 30,
            "type": "question"
          },
          {
            "q": "TEAM VICTORY: Everyone shout 'Polly!' together!",
            "a": "Polly!",
            "pts": 10,
            "type": "action"
          }
        ],
        "lessonPlan": {
          "weeklyGoal": "Students can communicate confidently about 'Food and Fun' (Healthy Eating, Recipes & Cooking Science), identify core vocabulary, and participate in collaborative smartboard games.",
          "dailyPlan": [
            {
              "day": "Monday (Day 1)",
              "focus": "Vocabulary Exploration: Recipe, Ingredient",
              "warmUp": "Polly's Morning Song & Mascot Welcome Chant",
              "presentation": "Smartboard interactive visual flashcards with GIPHY animations & real photos (No emojis).",
              "practice": "Pair matching card drill & natural character pronunciation practice.",
              "production": "Role-play dialogue: Ask peers about recipe.",
              "wrapUp": "Quick-fire exit ticket check before lineup."
            },
            {
              "day": "Wednesday (Day 2)",
              "focus": "Grammar & Phonics Focus (Silent letters /k/ in knife, /...)",
              "warmUp": "TPR Simon Says: Follow teacher's movement commands.",
              "presentation": "Interactive smartboard sorting and spelling drill.",
              "practice": "Baamboozle 4-Team Championship Round on Smartboard.",
              "production": "Student drawing portfolio & sentence builder.",
              "wrapUp": "Star badge award and team points celebration."
            }
          ],
          "teacherResources": {
            "physicalGames": [
              "Flyswatter Board Relay: Stick photo flashcards of Recipe on the whiteboard. Two teams race to slap the called word.",
              "Magic Bag Mystery: Place real classroom props or word cards in a bag. Students feel without looking and describe the item."
            ],
            "smartboardActivities": [
              "Baamboozle 4-Team Interactive Arena for Food and Fun with mystery cards and sound effects.",
              "GIF & Real Photo Carousel Drill: Tap the moving GIPHY sticker to hear character pronunciation."
            ]
          }
        }
      },
      {
        "id": "stage3_u7",
        "number": 7,
        "title": "Stories and Legends",
        "cefr": "A1+",
        "theme": "Fables, Myths & Moral Tales",
        "grammar": "Past continuous (was walking) with past simple (saw)",
        "phonics": "Homophones: hear/here, sea/see, right/write",
        "vocabulary": [
          {
            "word": "Legend",
            "meaning": "A traditional story regarded as historical",
            "turkish": "Efsane",
            "realPhoto": "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=600&auto=format&fit=crop&q=80",
            "gifUrl": "https://media.giphy.com/media/3o7TKSjRrfIPjeiVyM/giphy.gif",
            "characterVoice": "polly",
            "voiceLine": "Tales of King Arthur and the knights of the realm!"
          },
          {
            "word": "Hero",
            "meaning": "A person admired for courage or outstanding achievements",
            "turkish": "Kahraman",
            "realPhoto": "https://images.unsplash.com/photo-1534447677768-be436bb09401?w=600&auto=format&fit=crop&q=80",
            "gifUrl": "https://media.giphy.com/media/26FPJGjhefSJuaR0Y/giphy.gif",
            "characterVoice": "chase",
            "voiceLine": "Every brave friend can be a community hero!"
          },
          {
            "word": "Dragon",
            "meaning": "A mythical creature resembling a giant reptile",
            "turkish": "Ejderha",
            "realPhoto": "https://images.unsplash.com/photo-1579783902614-a3fb3927b675?w=600&auto=format&fit=crop&q=80",
            "gifUrl": "https://media.giphy.com/media/l41lFw057lAJQMwg0/giphy.gif",
            "characterVoice": "bluey",
            "voiceLine": "The gentle emerald dragon guards the castle treasure!"
          },
          {
            "word": "Moral",
            "meaning": "A lesson taught by a story or fable",
            "turkish": "Kıssadan hisse / Ders",
            "realPhoto": "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=600&auto=format&fit=crop&q=80",
            "gifUrl": "https://media.giphy.com/media/13HgwGsXF0aiGY/giphy.gif",
            "characterVoice": "polly",
            "voiceLine": "Slow and steady wins the race in Aesop's fable!"
          },
          {
            "word": "Fable",
            "meaning": "A short story with animal characters conveying a moral",
            "turkish": "Fabl",
            "realPhoto": "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=600&auto=format&fit=crop&q=80",
            "gifUrl": "https://media.giphy.com/media/3o7TKDkDbIDJieKbVm/giphy.gif",
            "characterVoice": "peppa",
            "voiceLine": "The Tortoise and the Hare taught us perseverance!"
          },
          {
            "word": "Mystery",
            "meaning": "Something difficult or impossible to explain",
            "turkish": "Gizem",
            "realPhoto": "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&auto=format&fit=crop&q=80",
            "gifUrl": "https://media.giphy.com/media/26u4cqiYI30juCOGY/giphy.gif",
            "characterVoice": "chase",
            "voiceLine": "Follow the footprints to solve the mystery!"
          }
        ],
        "baamboozleQuestions": [
          {
            "q": "What is the English word for 'Efsane'?",
            "a": "Legend",
            "pts": 15,
            "type": "question"
          },
          {
            "q": "MYSTERY BOX: Polly found bonus treasure for your team!",
            "a": "You won 20 points!",
            "pts": 20,
            "type": "bonus"
          },
          {
            "q": "TPR CHALLENGE: Act out the theme 'Fables, Myths & Moral Tales' for 5 seconds!",
            "a": "Demonstrated by team with cheers",
            "pts": 10,
            "type": "action"
          },
          {
            "q": "How do you spell the word 'Hero'?",
            "a": "H - E - R - O",
            "pts": 15,
            "type": "question"
          },
          {
            "q": "OOPS! Peppa slipped in a muddy puddle! Lose 10 points.",
            "a": "Lost 10 points!",
            "pts": -10,
            "type": "penalty"
          },
          {
            "q": "TEAM ACTION: Stand up and give your teammates a high five!",
            "a": "High fives completed!",
            "pts": 10,
            "type": "action"
          },
          {
            "q": "STEAL! Steal 15 points from another team!",
            "a": "15 points transferred!",
            "pts": 15,
            "type": "steal"
          },
          {
            "q": "Name three things connected to 'Stories and Legends'!",
            "a": "Legend, Hero, and Dragon",
            "pts": 20,
            "type": "question"
          },
          {
            "q": "Say 'Good job team!' in a funny robot voice!",
            "a": "Beep boop performed!",
            "pts": 10,
            "type": "action"
          },
          {
            "q": "SWAP SCORES! Swap points with the leading team!",
            "a": "Scores swapped!",
            "pts": 0,
            "type": "swap"
          },
          {
            "q": "What does 'Dragon' mean in Turkish?",
            "a": "Ejderha",
            "pts": 15,
            "type": "question"
          },
          {
            "q": "GALAXY WIN: Bluey awards 25 bonus points!",
            "a": "Gained 25 points!",
            "pts": 25,
            "type": "bonus"
          },
          {
            "q": "Use the word 'Legend' in an English sentence!",
            "a": "Example: I like this legend.",
            "pts": 20,
            "type": "question"
          },
          {
            "q": "BLACK HOLE: Lose 15 points into space!",
            "a": "Lost 15 points!",
            "pts": -15,
            "type": "penalty"
          },
          {
            "q": "DOUBLE BONUS: Answer correctly: Is school fun?",
            "a": "Yes, learning with friends is super fun!",
            "pts": 30,
            "type": "question"
          },
          {
            "q": "TEAM VICTORY: Everyone shout 'Polly!' together!",
            "a": "Polly!",
            "pts": 10,
            "type": "action"
          }
        ],
        "lessonPlan": {
          "weeklyGoal": "Students can communicate confidently about 'Stories and Legends' (Fables, Myths & Moral Tales), identify core vocabulary, and participate in collaborative smartboard games.",
          "dailyPlan": [
            {
              "day": "Monday (Day 1)",
              "focus": "Vocabulary Exploration: Legend, Hero",
              "warmUp": "Polly's Morning Song & Mascot Welcome Chant",
              "presentation": "Smartboard interactive visual flashcards with GIPHY animations & real photos (No emojis).",
              "practice": "Pair matching card drill & natural character pronunciation practice.",
              "production": "Role-play dialogue: Ask peers about legend.",
              "wrapUp": "Quick-fire exit ticket check before lineup."
            },
            {
              "day": "Wednesday (Day 2)",
              "focus": "Grammar & Phonics Focus (Homophones: hear/here, sea/see...)",
              "warmUp": "TPR Simon Says: Follow teacher's movement commands.",
              "presentation": "Interactive smartboard sorting and spelling drill.",
              "practice": "Baamboozle 4-Team Championship Round on Smartboard.",
              "production": "Student drawing portfolio & sentence builder.",
              "wrapUp": "Star badge award and team points celebration."
            }
          ],
          "teacherResources": {
            "physicalGames": [
              "Flyswatter Board Relay: Stick photo flashcards of Legend on the whiteboard. Two teams race to slap the called word.",
              "Magic Bag Mystery: Place real classroom props or word cards in a bag. Students feel without looking and describe the item."
            ],
            "smartboardActivities": [
              "Baamboozle 4-Team Interactive Arena for Stories and Legends with mystery cards and sound effects.",
              "GIF & Real Photo Carousel Drill: Tap the moving GIPHY sticker to hear character pronunciation."
            ]
          }
        }
      },
      {
        "id": "stage3_u8",
        "number": 8,
        "title": "Inventions and Discoveries",
        "cefr": "A1+",
        "theme": "Science, Technology & Modern Gadgets",
        "grammar": "Future with will / won't for predictions and promises",
        "phonics": "Suffixes -tion in invention, -sion in television",
        "vocabulary": [
          {
            "word": "Telescope",
            "meaning": "An optical instrument for viewing distant stars",
            "turkish": "Teleskop",
            "realPhoto": "https://images.unsplash.com/photo-1516339901601-2e1b62dc0c45?w=600&auto=format&fit=crop&q=80",
            "gifUrl": "https://media.giphy.com/media/3o7TKMt1VVNkHV2PaE/giphy.gif",
            "characterVoice": "polly",
            "voiceLine": "Look through the telescope to see Saturn's rings!"
          },
          {
            "word": "Microscope",
            "meaning": "An optical instrument for viewing tiny cells",
            "turkish": "Mikroskop",
            "realPhoto": "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=600&auto=format&fit=crop&q=80",
            "gifUrl": "https://media.giphy.com/media/26FPJGjhefSJuaR0Y/giphy.gif",
            "characterVoice": "chase",
            "voiceLine": "Discover hidden cells under the microscope lens!"
          },
          {
            "word": "Satellite",
            "meaning": "An artificial body placed in orbit around earth",
            "turkish": "Uydu",
            "realPhoto": "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=600&auto=format&fit=crop&q=80",
            "gifUrl": "https://media.giphy.com/media/l41lFw057lAJQMwg0/giphy.gif",
            "characterVoice": "bluey",
            "voiceLine": "Satellites send GPS signals across continents!"
          },
          {
            "word": "Battery",
            "meaning": "A device producing electrical energy from chemicals",
            "turkish": "Pil / Batarya",
            "realPhoto": "https://images.unsplash.com/photo-1589330694653-dad6d3240a91?w=600&auto=format&fit=crop&q=80",
            "gifUrl": "https://media.giphy.com/media/13HgwGsXF0aiGY/giphy.gif",
            "characterVoice": "peppa",
            "voiceLine": "Recharge the battery to power the electric toy!"
          },
          {
            "word": "Electricity",
            "meaning": "Energy resulting from existence of charged particles",
            "turkish": "Elektrik",
            "realPhoto": "https://images.unsplash.com/photo-1509228468518-180dd4864904?w=600&auto=format&fit=crop&q=80",
            "gifUrl": "https://media.giphy.com/media/3o7TKDkDbIDJieKbVm/giphy.gif",
            "characterVoice": "chase",
            "voiceLine": "Solar panels convert sunshine into clean electricity!"
          },
          {
            "word": "Engine",
            "meaning": "A machine with moving parts that produces power",
            "turkish": "Motor",
            "realPhoto": "https://images.unsplash.com/photo-1486218119243-13883505764c?w=600&auto=format&fit=crop&q=80",
            "gifUrl": "https://media.giphy.com/media/26u4cqiYI30juCOGY/giphy.gif",
            "characterVoice": "polly",
            "voiceLine": "The train engine pulls heavy carriages uphill!"
          }
        ],
        "baamboozleQuestions": [
          {
            "q": "What is the English word for 'Teleskop'?",
            "a": "Telescope",
            "pts": 15,
            "type": "question"
          },
          {
            "q": "MYSTERY BOX: Polly found bonus treasure for your team!",
            "a": "You won 20 points!",
            "pts": 20,
            "type": "bonus"
          },
          {
            "q": "TPR CHALLENGE: Act out the theme 'Science, Technology & Modern Gadgets' for 5 seconds!",
            "a": "Demonstrated by team with cheers",
            "pts": 10,
            "type": "action"
          },
          {
            "q": "How do you spell the word 'Microscope'?",
            "a": "M - I - C - R - O - S - C - O - P - E",
            "pts": 15,
            "type": "question"
          },
          {
            "q": "OOPS! Peppa slipped in a muddy puddle! Lose 10 points.",
            "a": "Lost 10 points!",
            "pts": -10,
            "type": "penalty"
          },
          {
            "q": "TEAM ACTION: Stand up and give your teammates a high five!",
            "a": "High fives completed!",
            "pts": 10,
            "type": "action"
          },
          {
            "q": "STEAL! Steal 15 points from another team!",
            "a": "15 points transferred!",
            "pts": 15,
            "type": "steal"
          },
          {
            "q": "Name three things connected to 'Inventions and Discoveries'!",
            "a": "Telescope, Microscope, and Satellite",
            "pts": 20,
            "type": "question"
          },
          {
            "q": "Say 'Good job team!' in a funny robot voice!",
            "a": "Beep boop performed!",
            "pts": 10,
            "type": "action"
          },
          {
            "q": "SWAP SCORES! Swap points with the leading team!",
            "a": "Scores swapped!",
            "pts": 0,
            "type": "swap"
          },
          {
            "q": "What does 'Satellite' mean in Turkish?",
            "a": "Uydu",
            "pts": 15,
            "type": "question"
          },
          {
            "q": "GALAXY WIN: Bluey awards 25 bonus points!",
            "a": "Gained 25 points!",
            "pts": 25,
            "type": "bonus"
          },
          {
            "q": "Use the word 'Telescope' in an English sentence!",
            "a": "Example: I like this telescope.",
            "pts": 20,
            "type": "question"
          },
          {
            "q": "BLACK HOLE: Lose 15 points into space!",
            "a": "Lost 15 points!",
            "pts": -15,
            "type": "penalty"
          },
          {
            "q": "DOUBLE BONUS: Answer correctly: Is school fun?",
            "a": "Yes, learning with friends is super fun!",
            "pts": 30,
            "type": "question"
          },
          {
            "q": "TEAM VICTORY: Everyone shout 'Polly!' together!",
            "a": "Polly!",
            "pts": 10,
            "type": "action"
          }
        ],
        "lessonPlan": {
          "weeklyGoal": "Students can communicate confidently about 'Inventions and Discoveries' (Science, Technology & Modern Gadgets), identify core vocabulary, and participate in collaborative smartboard games.",
          "dailyPlan": [
            {
              "day": "Monday (Day 1)",
              "focus": "Vocabulary Exploration: Telescope, Microscope",
              "warmUp": "Polly's Morning Song & Mascot Welcome Chant",
              "presentation": "Smartboard interactive visual flashcards with GIPHY animations & real photos (No emojis).",
              "practice": "Pair matching card drill & natural character pronunciation practice.",
              "production": "Role-play dialogue: Ask peers about telescope.",
              "wrapUp": "Quick-fire exit ticket check before lineup."
            },
            {
              "day": "Wednesday (Day 2)",
              "focus": "Grammar & Phonics Focus (Suffixes -tion in invention, -...)",
              "warmUp": "TPR Simon Says: Follow teacher's movement commands.",
              "presentation": "Interactive smartboard sorting and spelling drill.",
              "practice": "Baamboozle 4-Team Championship Round on Smartboard.",
              "production": "Student drawing portfolio & sentence builder.",
              "wrapUp": "Star badge award and team points celebration."
            }
          ],
          "teacherResources": {
            "physicalGames": [
              "Flyswatter Board Relay: Stick photo flashcards of Telescope on the whiteboard. Two teams race to slap the called word.",
              "Magic Bag Mystery: Place real classroom props or word cards in a bag. Students feel without looking and describe the item."
            ],
            "smartboardActivities": [
              "Baamboozle 4-Team Interactive Arena for Inventions and Discoveries with mystery cards and sound effects.",
              "GIF & Real Photo Carousel Drill: Tap the moving GIPHY sticker to hear character pronunciation."
            ]
          }
        }
      },
      {
        "id": "stage3_u9",
        "number": 9,
        "title": "What a Day!",
        "cefr": "A1+",
        "theme": "Daily Adventures, Diary & Reflection",
        "grammar": "Question tags & Time clauses (when, while, before, after)",
        "phonics": "Sentence stress & rising/falling intonation",
        "vocabulary": [
          {
            "word": "Adventure",
            "meaning": "An unusual and exciting experience",
            "turkish": "Macera",
            "realPhoto": "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=600&auto=format&fit=crop&q=80",
            "gifUrl": "https://media.giphy.com/media/3o7TKSjRrfIPjeiVyM/giphy.gif",
            "characterVoice": "chase",
            "voiceLine": "What an incredible wilderness adventure today!"
          },
          {
            "word": "Journey",
            "meaning": "An act of travelling from one place to another",
            "turkish": "Yolculuk",
            "realPhoto": "https://images.unsplash.com/photo-1474487548417-781cb71495f3?w=600&auto=format&fit=crop&q=80",
            "gifUrl": "https://media.giphy.com/media/26FPJGjhefSJuaR0Y/giphy.gif",
            "characterVoice": "bluey",
            "voiceLine": "Pack your bags and enjoy the learning journey!"
          },
          {
            "word": "Passport",
            "meaning": "Official document issued by a government for travel",
            "turkish": "Pasaport",
            "realPhoto": "https://images.unsplash.com/photo-1544717305-2782549b5136?w=600&auto=format&fit=crop&q=80",
            "gifUrl": "https://media.giphy.com/media/l41lFw057lAJQMwg0/giphy.gif",
            "characterVoice": "peppa",
            "voiceLine": "Stamp your learning passport with shiny stars!"
          },
          {
            "word": "Diary",
            "meaning": "A book in which one keeps a daily record of events",
            "turkish": "Günlük",
            "realPhoto": "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=600&auto=format&fit=crop&q=80",
            "gifUrl": "https://media.giphy.com/media/13HgwGsXF0aiGY/giphy.gif",
            "characterVoice": "polly",
            "voiceLine": "Write your favorite memory in your daily diary!"
          },
          {
            "word": "Sunrise",
            "meaning": "The time in morning when the sun appears",
            "turkish": "Gündoğumu",
            "realPhoto": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&auto=format&fit=crop&q=80",
            "gifUrl": "https://media.giphy.com/media/3o7TKDkDbIDJieKbVm/giphy.gif",
            "characterVoice": "peppa",
            "voiceLine": "Golden rays shining early at sunrise!"
          },
          {
            "word": "Memory",
            "meaning": "Something remembered from the past",
            "turkish": "Anı / Hatıra",
            "realPhoto": "https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=600&auto=format&fit=crop&q=80",
            "gifUrl": "https://media.giphy.com/media/26u4cqiYI30juCOGY/giphy.gif",
            "characterVoice": "bluey",
            "voiceLine": "Cherish warm happy memories with great friends!"
          }
        ],
        "baamboozleQuestions": [
          {
            "q": "What is the English word for 'Macera'?",
            "a": "Adventure",
            "pts": 15,
            "type": "question"
          },
          {
            "q": "MYSTERY BOX: Polly found bonus treasure for your team!",
            "a": "You won 20 points!",
            "pts": 20,
            "type": "bonus"
          },
          {
            "q": "TPR CHALLENGE: Act out the theme 'Daily Adventures, Diary & Reflection' for 5 seconds!",
            "a": "Demonstrated by team with cheers",
            "pts": 10,
            "type": "action"
          },
          {
            "q": "How do you spell the word 'Journey'?",
            "a": "J - O - U - R - N - E - Y",
            "pts": 15,
            "type": "question"
          },
          {
            "q": "OOPS! Peppa slipped in a muddy puddle! Lose 10 points.",
            "a": "Lost 10 points!",
            "pts": -10,
            "type": "penalty"
          },
          {
            "q": "TEAM ACTION: Stand up and give your teammates a high five!",
            "a": "High fives completed!",
            "pts": 10,
            "type": "action"
          },
          {
            "q": "STEAL! Steal 15 points from another team!",
            "a": "15 points transferred!",
            "pts": 15,
            "type": "steal"
          },
          {
            "q": "Name three things connected to 'What a Day!'!",
            "a": "Adventure, Journey, and Passport",
            "pts": 20,
            "type": "question"
          },
          {
            "q": "Say 'Good job team!' in a funny robot voice!",
            "a": "Beep boop performed!",
            "pts": 10,
            "type": "action"
          },
          {
            "q": "SWAP SCORES! Swap points with the leading team!",
            "a": "Scores swapped!",
            "pts": 0,
            "type": "swap"
          },
          {
            "q": "What does 'Passport' mean in Turkish?",
            "a": "Pasaport",
            "pts": 15,
            "type": "question"
          },
          {
            "q": "GALAXY WIN: Bluey awards 25 bonus points!",
            "a": "Gained 25 points!",
            "pts": 25,
            "type": "bonus"
          },
          {
            "q": "Use the word 'Adventure' in an English sentence!",
            "a": "Example: I like this adventure.",
            "pts": 20,
            "type": "question"
          },
          {
            "q": "BLACK HOLE: Lose 15 points into space!",
            "a": "Lost 15 points!",
            "pts": -15,
            "type": "penalty"
          },
          {
            "q": "DOUBLE BONUS: Answer correctly: Is school fun?",
            "a": "Yes, learning with friends is super fun!",
            "pts": 30,
            "type": "question"
          },
          {
            "q": "TEAM VICTORY: Everyone shout 'Polly!' together!",
            "a": "Polly!",
            "pts": 10,
            "type": "action"
          }
        ],
        "lessonPlan": {
          "weeklyGoal": "Students can communicate confidently about 'What a Day!' (Daily Adventures, Diary & Reflection), identify core vocabulary, and participate in collaborative smartboard games.",
          "dailyPlan": [
            {
              "day": "Monday (Day 1)",
              "focus": "Vocabulary Exploration: Adventure, Journey",
              "warmUp": "Polly's Morning Song & Mascot Welcome Chant",
              "presentation": "Smartboard interactive visual flashcards with GIPHY animations & real photos (No emojis).",
              "practice": "Pair matching card drill & natural character pronunciation practice.",
              "production": "Role-play dialogue: Ask peers about adventure.",
              "wrapUp": "Quick-fire exit ticket check before lineup."
            },
            {
              "day": "Wednesday (Day 2)",
              "focus": "Grammar & Phonics Focus (Sentence stress & rising/falli...)",
              "warmUp": "TPR Simon Says: Follow teacher's movement commands.",
              "presentation": "Interactive smartboard sorting and spelling drill.",
              "practice": "Baamboozle 4-Team Championship Round on Smartboard.",
              "production": "Student drawing portfolio & sentence builder.",
              "wrapUp": "Star badge award and team points celebration."
            }
          ],
          "teacherResources": {
            "physicalGames": [
              "Flyswatter Board Relay: Stick photo flashcards of Adventure on the whiteboard. Two teams race to slap the called word.",
              "Magic Bag Mystery: Place real classroom props or word cards in a bag. Students feel without looking and describe the item."
            ],
            "smartboardActivities": [
              "Baamboozle 4-Team Interactive Arena for What a Day! with mystery cards and sound effects.",
              "GIF & Real Photo Carousel Drill: Tap the moving GIPHY sticker to hear character pronunciation."
            ]
          }
        }
      }
    ]
  },
  "stage4": {
    "title": "Stage 4 (Primary 4 / A2)",
    "description": "Critical thinking and discourse: World habitats, marine life, exploration, space, and media.",
    "units": [
      {
        "id": "stage4_u1",
        "number": 1,
        "title": "Family and Home",
        "cefr": "A2",
        "theme": "Global Living, Heritage & Roles",
        "grammar": "Present perfect simple with already, just, yet, ever",
        "phonics": "Complex vowel digraphs /eə/ in bear, /ɪə/ in cheer",
        "vocabulary": [
          {
            "word": "Heritage",
            "meaning": "Valued objects and qualities passed down from ancestors",
            "turkish": "Miras / Kültürel Miras",
            "realPhoto": "https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=600&auto=format&fit=crop&q=80",
            "gifUrl": "https://media.giphy.com/media/3o7TKMt1VVNkHV2PaE/giphy.gif",
            "characterVoice": "polly",
            "voiceLine": "Celebrate traditional folk songs and family heritage!"
          },
          {
            "word": "Generation",
            "meaning": "All people born and living about the same time",
            "turkish": "Kuşak / Nesil",
            "realPhoto": "https://images.unsplash.com/photo-1544717305-2782549b5136?w=600&auto=format&fit=crop&q=80",
            "gifUrl": "https://media.giphy.com/media/26FPJGjhefSJuaR0Y/giphy.gif",
            "characterVoice": "bluey",
            "voiceLine": "Grandparents, parents and children: three generations!"
          },
          {
            "word": "Ancestor",
            "meaning": "A person from whom one is descended",
            "turkish": "Ata",
            "realPhoto": "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=600&auto=format&fit=crop&q=80",
            "gifUrl": "https://media.giphy.com/media/l41lFw057lAJQMwg0/giphy.gif",
            "characterVoice": "peppa",
            "voiceLine": "Learn history through stories of our brave ancestors!"
          },
          {
            "word": "Tradition",
            "meaning": "A long-established custom or practice",
            "turkish": "Gelenek",
            "realPhoto": "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=600&auto=format&fit=crop&q=80",
            "gifUrl": "https://media.giphy.com/media/13HgwGsXF0aiGY/giphy.gif",
            "characterVoice": "polly",
            "voiceLine": "Baking holiday bread is an honored family tradition!"
          },
          {
            "word": "Shelter",
            "meaning": "A place giving temporary protection from danger",
            "turkish": "Barınak",
            "realPhoto": "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=600&auto=format&fit=crop&q=80",
            "gifUrl": "https://media.giphy.com/media/3o7TKDkDbIDJieKbVm/giphy.gif",
            "characterVoice": "chase",
            "voiceLine": "A warm cosy home gives shelter from winter winds!"
          },
          {
            "word": "Relative",
            "meaning": "A person connected by blood or marriage",
            "turkish": "Akraba",
            "realPhoto": "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600&auto=format&fit=crop&q=80",
            "gifUrl": "https://media.giphy.com/media/26u4cqiYI30juCOGY/giphy.gif",
            "characterVoice": "peppa",
            "voiceLine": "Uncles, aunts and cousins gathered together!"
          }
        ],
        "baamboozleQuestions": [
          {
            "q": "What is the English word for 'Miras / Kültürel Miras'?",
            "a": "Heritage",
            "pts": 15,
            "type": "question"
          },
          {
            "q": "MYSTERY BOX: Polly found bonus treasure for your team!",
            "a": "You won 20 points!",
            "pts": 20,
            "type": "bonus"
          },
          {
            "q": "TPR CHALLENGE: Act out the theme 'Global Living, Heritage & Roles' for 5 seconds!",
            "a": "Demonstrated by team with cheers",
            "pts": 10,
            "type": "action"
          },
          {
            "q": "How do you spell the word 'Generation'?",
            "a": "G - E - N - E - R - A - T - I - O - N",
            "pts": 15,
            "type": "question"
          },
          {
            "q": "OOPS! Peppa slipped in a muddy puddle! Lose 10 points.",
            "a": "Lost 10 points!",
            "pts": -10,
            "type": "penalty"
          },
          {
            "q": "TEAM ACTION: Stand up and give your teammates a high five!",
            "a": "High fives completed!",
            "pts": 10,
            "type": "action"
          },
          {
            "q": "STEAL! Steal 15 points from another team!",
            "a": "15 points transferred!",
            "pts": 15,
            "type": "steal"
          },
          {
            "q": "Name three things connected to 'Family and Home'!",
            "a": "Heritage, Generation, and Ancestor",
            "pts": 20,
            "type": "question"
          },
          {
            "q": "Say 'Good job team!' in a funny robot voice!",
            "a": "Beep boop performed!",
            "pts": 10,
            "type": "action"
          },
          {
            "q": "SWAP SCORES! Swap points with the leading team!",
            "a": "Scores swapped!",
            "pts": 0,
            "type": "swap"
          },
          {
            "q": "What does 'Ancestor' mean in Turkish?",
            "a": "Ata",
            "pts": 15,
            "type": "question"
          },
          {
            "q": "GALAXY WIN: Bluey awards 25 bonus points!",
            "a": "Gained 25 points!",
            "pts": 25,
            "type": "bonus"
          },
          {
            "q": "Use the word 'Heritage' in an English sentence!",
            "a": "Example: I like this heritage.",
            "pts": 20,
            "type": "question"
          },
          {
            "q": "BLACK HOLE: Lose 15 points into space!",
            "a": "Lost 15 points!",
            "pts": -15,
            "type": "penalty"
          },
          {
            "q": "DOUBLE BONUS: Answer correctly: Is school fun?",
            "a": "Yes, learning with friends is super fun!",
            "pts": 30,
            "type": "question"
          },
          {
            "q": "TEAM VICTORY: Everyone shout 'Polly!' together!",
            "a": "Polly!",
            "pts": 10,
            "type": "action"
          }
        ],
        "lessonPlan": {
          "weeklyGoal": "Students can communicate confidently about 'Family and Home' (Global Living, Heritage & Roles), identify core vocabulary, and participate in collaborative smartboard games.",
          "dailyPlan": [
            {
              "day": "Monday (Day 1)",
              "focus": "Vocabulary Exploration: Heritage, Generation",
              "warmUp": "Polly's Morning Song & Mascot Welcome Chant",
              "presentation": "Smartboard interactive visual flashcards with GIPHY animations & real photos (No emojis).",
              "practice": "Pair matching card drill & natural character pronunciation practice.",
              "production": "Role-play dialogue: Ask peers about heritage.",
              "wrapUp": "Quick-fire exit ticket check before lineup."
            },
            {
              "day": "Wednesday (Day 2)",
              "focus": "Grammar & Phonics Focus (Complex vowel digraphs /eə/ in...)",
              "warmUp": "TPR Simon Says: Follow teacher's movement commands.",
              "presentation": "Interactive smartboard sorting and spelling drill.",
              "practice": "Baamboozle 4-Team Championship Round on Smartboard.",
              "production": "Student drawing portfolio & sentence builder.",
              "wrapUp": "Star badge award and team points celebration."
            }
          ],
          "teacherResources": {
            "physicalGames": [
              "Flyswatter Board Relay: Stick photo flashcards of Heritage on the whiteboard. Two teams race to slap the called word.",
              "Magic Bag Mystery: Place real classroom props or word cards in a bag. Students feel without looking and describe the item."
            ],
            "smartboardActivities": [
              "Baamboozle 4-Team Interactive Arena for Family and Home with mystery cards and sound effects.",
              "GIF & Real Photo Carousel Drill: Tap the moving GIPHY sticker to hear character pronunciation."
            ]
          }
        }
      },
      {
        "id": "stage4_u2",
        "number": 2,
        "title": "Earth and Beyond",
        "cefr": "A2",
        "theme": "Astronomy, Solar System & Planets",
        "grammar": "Superlatives & Future with going to / will for science",
        "phonics": "Silent letters /b/ in climb, /l/ in calm, half",
        "vocabulary": [
          {
            "word": "Solar System",
            "meaning": "The sun and all planets orbiting it",
            "turkish": "Güneş Sistemi",
            "realPhoto": "https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?w=600&auto=format&fit=crop&q=80",
            "gifUrl": "https://media.giphy.com/media/3o7btQ8jDTPGDpgc6I/giphy.gif",
            "characterVoice": "polly",
            "voiceLine": "Eight planets orbiting our glowing yellow star!"
          },
          {
            "word": "Astronaut",
            "meaning": "A trained person travelling into space",
            "turkish": "Astronot",
            "realPhoto": "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=600&auto=format&fit=crop&q=80",
            "gifUrl": "https://media.giphy.com/media/26AHPxxnSw1L9T1rW/giphy.gif",
            "characterVoice": "chase",
            "voiceLine": "Astronauts float weightless in the space station!"
          },
          {
            "word": "Orbit",
            "meaning": "The curved path of a celestial object around a star",
            "turkish": "Yörünge",
            "realPhoto": "https://images.unsplash.com/photo-1506703719100-a0f3a48c0f86?w=600&auto=format&fit=crop&q=80",
            "gifUrl": "https://media.giphy.com/media/26FPJGjhefSJuaR0Y/giphy.gif",
            "characterVoice": "bluey",
            "voiceLine": "The Moon completes an orbit around Earth each month!"
          },
          {
            "word": "Gravity",
            "meaning": "The force pulling bodies towards center of earth",
            "turkish": "Yerçekimi",
            "realPhoto": "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&auto=format&fit=crop&q=80",
            "gifUrl": "https://media.giphy.com/media/l41lFw057lAJQMwg0/giphy.gif",
            "characterVoice": "polly",
            "voiceLine": "Gravity keeps our feet on the ground and air around us!"
          },
          {
            "word": "Galaxy",
            "meaning": "A system of millions or billions of stars",
            "turkish": "Galaksi",
            "realPhoto": "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=600&auto=format&fit=crop&q=80",
            "gifUrl": "https://media.giphy.com/media/13HgwGsXF0aiGY/giphy.gif",
            "characterVoice": "chase",
            "voiceLine": "Our solar system lives in the spiral Milky Way galaxy!"
          },
          {
            "word": "Meteor",
            "meaning": "A small body entering atmosphere from space",
            "turkish": "Meteor / Göktaşı",
            "realPhoto": "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=600&auto=format&fit=crop&q=80",
            "gifUrl": "https://media.giphy.com/media/3o7TKDkDbIDJieKbVm/giphy.gif",
            "characterVoice": "peppa",
            "voiceLine": "Make a wish on a shooting meteor streak!"
          }
        ],
        "baamboozleQuestions": [
          {
            "q": "What is the English word for 'Güneş Sistemi'?",
            "a": "Solar System",
            "pts": 15,
            "type": "question"
          },
          {
            "q": "MYSTERY BOX: Polly found bonus treasure for your team!",
            "a": "You won 20 points!",
            "pts": 20,
            "type": "bonus"
          },
          {
            "q": "TPR CHALLENGE: Act out the theme 'Astronomy, Solar System & Planets' for 5 seconds!",
            "a": "Demonstrated by team with cheers",
            "pts": 10,
            "type": "action"
          },
          {
            "q": "How do you spell the word 'Astronaut'?",
            "a": "A - S - T - R - O - N - A - U - T",
            "pts": 15,
            "type": "question"
          },
          {
            "q": "OOPS! Peppa slipped in a muddy puddle! Lose 10 points.",
            "a": "Lost 10 points!",
            "pts": -10,
            "type": "penalty"
          },
          {
            "q": "TEAM ACTION: Stand up and give your teammates a high five!",
            "a": "High fives completed!",
            "pts": 10,
            "type": "action"
          },
          {
            "q": "STEAL! Steal 15 points from another team!",
            "a": "15 points transferred!",
            "pts": 15,
            "type": "steal"
          },
          {
            "q": "Name three things connected to 'Earth and Beyond'!",
            "a": "Solar System, Astronaut, and Orbit",
            "pts": 20,
            "type": "question"
          },
          {
            "q": "Say 'Good job team!' in a funny robot voice!",
            "a": "Beep boop performed!",
            "pts": 10,
            "type": "action"
          },
          {
            "q": "SWAP SCORES! Swap points with the leading team!",
            "a": "Scores swapped!",
            "pts": 0,
            "type": "swap"
          },
          {
            "q": "What does 'Orbit' mean in Turkish?",
            "a": "Yörünge",
            "pts": 15,
            "type": "question"
          },
          {
            "q": "GALAXY WIN: Bluey awards 25 bonus points!",
            "a": "Gained 25 points!",
            "pts": 25,
            "type": "bonus"
          },
          {
            "q": "Use the word 'Solar System' in an English sentence!",
            "a": "Example: I like this solar system.",
            "pts": 20,
            "type": "question"
          },
          {
            "q": "BLACK HOLE: Lose 15 points into space!",
            "a": "Lost 15 points!",
            "pts": -15,
            "type": "penalty"
          },
          {
            "q": "DOUBLE BONUS: Answer correctly: Is school fun?",
            "a": "Yes, learning with friends is super fun!",
            "pts": 30,
            "type": "question"
          },
          {
            "q": "TEAM VICTORY: Everyone shout 'Polly!' together!",
            "a": "Polly!",
            "pts": 10,
            "type": "action"
          }
        ],
        "lessonPlan": {
          "weeklyGoal": "Students can communicate confidently about 'Earth and Beyond' (Astronomy, Solar System & Planets), identify core vocabulary, and participate in collaborative smartboard games.",
          "dailyPlan": [
            {
              "day": "Monday (Day 1)",
              "focus": "Vocabulary Exploration: Solar System, Astronaut",
              "warmUp": "Polly's Morning Song & Mascot Welcome Chant",
              "presentation": "Smartboard interactive visual flashcards with GIPHY animations & real photos (No emojis).",
              "practice": "Pair matching card drill & natural character pronunciation practice.",
              "production": "Role-play dialogue: Ask peers about solar system.",
              "wrapUp": "Quick-fire exit ticket check before lineup."
            },
            {
              "day": "Wednesday (Day 2)",
              "focus": "Grammar & Phonics Focus (Silent letters /b/ in climb, /...)",
              "warmUp": "TPR Simon Says: Follow teacher's movement commands.",
              "presentation": "Interactive smartboard sorting and spelling drill.",
              "practice": "Baamboozle 4-Team Championship Round on Smartboard.",
              "production": "Student drawing portfolio & sentence builder.",
              "wrapUp": "Star badge award and team points celebration."
            }
          ],
          "teacherResources": {
            "physicalGames": [
              "Flyswatter Board Relay: Stick photo flashcards of Solar System on the whiteboard. Two teams race to slap the called word.",
              "Magic Bag Mystery: Place real classroom props or word cards in a bag. Students feel without looking and describe the item."
            ],
            "smartboardActivities": [
              "Baamboozle 4-Team Interactive Arena for Earth and Beyond with mystery cards and sound effects.",
              "GIF & Real Photo Carousel Drill: Tap the moving GIPHY sticker to hear character pronunciation."
            ]
          }
        }
      },
      {
        "id": "stage4_u3",
        "number": 3,
        "title": "Ready, Set, Go!",
        "cefr": "A2",
        "theme": "Athletics, Olympics & Fitness",
        "grammar": "Modals of obligation: have to / don't have to, should",
        "phonics": "Stress patterns in multi-syllable athletic words",
        "vocabulary": [
          {
            "word": "Athlete",
            "meaning": "A person proficient in sports and exercises",
            "turkish": "Sporcu / Atlet",
            "realPhoto": "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=600&auto=format&fit=crop&q=80",
            "gifUrl": "https://media.giphy.com/media/3o7TKSjRrfIPjeiVyM/giphy.gif",
            "characterVoice": "chase",
            "voiceLine": "Dedicated athletes train every day for speed!"
          },
          {
            "word": "Tournament",
            "meaning": "A series of contests in a competition",
            "turkish": "Turnuva",
            "realPhoto": "https://images.unsplash.com/photo-1511886929837-354d827aae26?w=600&auto=format&fit=crop&q=80",
            "gifUrl": "https://media.giphy.com/media/26FPJGjhefSJuaR0Y/giphy.gif",
            "characterVoice": "bluey",
            "voiceLine": "The school soccer tournament kicks off today!"
          },
          {
            "word": "Champion",
            "meaning": "A person who has surpassed all rivals in a contest",
            "turkish": "Şampiyon",
            "realPhoto": "https://images.unsplash.com/photo-1568832359672-e36cf5d74f54?w=600&auto=format&fit=crop&q=80",
            "gifUrl": "https://media.giphy.com/media/l41lFw057lAJQMwg0/giphy.gif",
            "characterVoice": "polly",
            "voiceLine": "Hold up the trophy, you are the world champion!"
          },
          {
            "word": "Medal",
            "meaning": "A metal disc awarded as a distinction for victory",
            "turkish": "Madalya",
            "realPhoto": "https://images.unsplash.com/photo-1579783902614-a3fb3927b675?w=600&auto=format&fit=crop&q=80",
            "gifUrl": "https://media.giphy.com/media/13HgwGsXF0aiGY/giphy.gif",
            "characterVoice": "peppa",
            "voiceLine": "Gold, silver, and bronze Olympic medals!"
          },
          {
            "word": "Marathon",
            "meaning": "A long-distance running race (42.195 km)",
            "turkish": "Maraton",
            "realPhoto": "https://images.unsplash.com/photo-1486218119243-13883505764c?w=600&auto=format&fit=crop&q=80",
            "gifUrl": "https://media.giphy.com/media/3o7TKDkDbIDJieKbVm/giphy.gif",
            "characterVoice": "chase",
            "voiceLine": "Patience and stamina help runners finish the marathon!"
          },
          {
            "word": "Endurance",
            "meaning": "The capacity of something to withstand wear or fatigue",
            "turkish": "Dayanıklılık",
            "realPhoto": "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?w=600&auto=format&fit=crop&q=80",
            "gifUrl": "https://media.giphy.com/media/26u4cqiYI30juCOGY/giphy.gif",
            "characterVoice": "bluey",
            "voiceLine": "Regular jogging builds great cardiovascular endurance!"
          }
        ],
        "baamboozleQuestions": [
          {
            "q": "What is the English word for 'Sporcu / Atlet'?",
            "a": "Athlete",
            "pts": 15,
            "type": "question"
          },
          {
            "q": "MYSTERY BOX: Polly found bonus treasure for your team!",
            "a": "You won 20 points!",
            "pts": 20,
            "type": "bonus"
          },
          {
            "q": "TPR CHALLENGE: Act out the theme 'Athletics, Olympics & Fitness' for 5 seconds!",
            "a": "Demonstrated by team with cheers",
            "pts": 10,
            "type": "action"
          },
          {
            "q": "How do you spell the word 'Tournament'?",
            "a": "T - O - U - R - N - A - M - E - N - T",
            "pts": 15,
            "type": "question"
          },
          {
            "q": "OOPS! Peppa slipped in a muddy puddle! Lose 10 points.",
            "a": "Lost 10 points!",
            "pts": -10,
            "type": "penalty"
          },
          {
            "q": "TEAM ACTION: Stand up and give your teammates a high five!",
            "a": "High fives completed!",
            "pts": 10,
            "type": "action"
          },
          {
            "q": "STEAL! Steal 15 points from another team!",
            "a": "15 points transferred!",
            "pts": 15,
            "type": "steal"
          },
          {
            "q": "Name three things connected to 'Ready, Set, Go!'!",
            "a": "Athlete, Tournament, and Champion",
            "pts": 20,
            "type": "question"
          },
          {
            "q": "Say 'Good job team!' in a funny robot voice!",
            "a": "Beep boop performed!",
            "pts": 10,
            "type": "action"
          },
          {
            "q": "SWAP SCORES! Swap points with the leading team!",
            "a": "Scores swapped!",
            "pts": 0,
            "type": "swap"
          },
          {
            "q": "What does 'Champion' mean in Turkish?",
            "a": "Şampiyon",
            "pts": 15,
            "type": "question"
          },
          {
            "q": "GALAXY WIN: Bluey awards 25 bonus points!",
            "a": "Gained 25 points!",
            "pts": 25,
            "type": "bonus"
          },
          {
            "q": "Use the word 'Athlete' in an English sentence!",
            "a": "Example: I like this athlete.",
            "pts": 20,
            "type": "question"
          },
          {
            "q": "BLACK HOLE: Lose 15 points into space!",
            "a": "Lost 15 points!",
            "pts": -15,
            "type": "penalty"
          },
          {
            "q": "DOUBLE BONUS: Answer correctly: Is school fun?",
            "a": "Yes, learning with friends is super fun!",
            "pts": 30,
            "type": "question"
          },
          {
            "q": "TEAM VICTORY: Everyone shout 'Polly!' together!",
            "a": "Polly!",
            "pts": 10,
            "type": "action"
          }
        ],
        "lessonPlan": {
          "weeklyGoal": "Students can communicate confidently about 'Ready, Set, Go!' (Athletics, Olympics & Fitness), identify core vocabulary, and participate in collaborative smartboard games.",
          "dailyPlan": [
            {
              "day": "Monday (Day 1)",
              "focus": "Vocabulary Exploration: Athlete, Tournament",
              "warmUp": "Polly's Morning Song & Mascot Welcome Chant",
              "presentation": "Smartboard interactive visual flashcards with GIPHY animations & real photos (No emojis).",
              "practice": "Pair matching card drill & natural character pronunciation practice.",
              "production": "Role-play dialogue: Ask peers about athlete.",
              "wrapUp": "Quick-fire exit ticket check before lineup."
            },
            {
              "day": "Wednesday (Day 2)",
              "focus": "Grammar & Phonics Focus (Stress patterns in multi-sylla...)",
              "warmUp": "TPR Simon Says: Follow teacher's movement commands.",
              "presentation": "Interactive smartboard sorting and spelling drill.",
              "practice": "Baamboozle 4-Team Championship Round on Smartboard.",
              "production": "Student drawing portfolio & sentence builder.",
              "wrapUp": "Star badge award and team points celebration."
            }
          ],
          "teacherResources": {
            "physicalGames": [
              "Flyswatter Board Relay: Stick photo flashcards of Athlete on the whiteboard. Two teams race to slap the called word.",
              "Magic Bag Mystery: Place real classroom props or word cards in a bag. Students feel without looking and describe the item."
            ],
            "smartboardActivities": [
              "Baamboozle 4-Team Interactive Arena for Ready, Set, Go! with mystery cards and sound effects.",
              "GIF & Real Photo Carousel Drill: Tap the moving GIPHY sticker to hear character pronunciation."
            ]
          }
        }
      },
      {
        "id": "stage4_u4",
        "number": 4,
        "title": "Under the Sea",
        "cefr": "A2",
        "theme": "Marine Biology, Corals & Oceans",
        "grammar": "First conditional: If we pollute the ocean, corals die",
        "phonics": "Hard & soft ch: /tʃ/ in chair vs /k/ in school",
        "vocabulary": [
          {
            "word": "Coral Reef",
            "meaning": "A ridge of rock in the sea formed by growth of coral",
            "turkish": "Mercan resifi",
            "realPhoto": "https://images.unsplash.com/photo-1546026423-cc4642628d2b?w=600&auto=format&fit=crop&q=80",
            "gifUrl": "https://media.giphy.com/media/3o7TKMt1VVNkHV2PaE/giphy.gif",
            "characterVoice": "polly",
            "voiceLine": "Vibrant coral reefs are ocean underwater cities!"
          },
          {
            "word": "Dolphin",
            "meaning": "An intelligent gregarious toothed sea mammal",
            "turkish": "Yunus",
            "realPhoto": "https://images.unsplash.com/photo-1570481662006-a3a1374699e8?w=600&auto=format&fit=crop&q=80",
            "gifUrl": "https://media.giphy.com/media/26FPy3QZLnLCyHIJa/giphy.gif",
            "characterVoice": "bluey",
            "voiceLine": "Friendly dolphins leaping through sparkling waves!"
          },
          {
            "word": "Submarine",
            "meaning": "A warship designed to operate completely submerged",
            "turkish": "Denizaltı",
            "realPhoto": "https://images.unsplash.com/photo-1505705694340-019e1e335916?w=600&auto=format&fit=crop&q=80",
            "gifUrl": "https://media.giphy.com/media/26FPJGjhefSJuaR0Y/giphy.gif",
            "characterVoice": "chase",
            "voiceLine": "Dive deep into the abyss inside a yellow submarine!"
          },
          {
            "word": "Shark",
            "meaning": "A long-bodied marine predator with a cartilaginous skeleton",
            "turkish": "Köpekbalığı",
            "realPhoto": "https://images.unsplash.com/photo-1560275619-4662e36fa65c?w=600&auto=format&fit=crop&q=80",
            "gifUrl": "https://media.giphy.com/media/l41lFw057lAJQMwg0/giphy.gif",
            "characterVoice": "peppa",
            "voiceLine": "Baby shark swimming fast in deep waters!"
          },
          {
            "word": "Sea Turtle",
            "meaning": "A large marine reptile with flippers",
            "turkish": "Deniz kaplumbağası",
            "realPhoto": "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=600&auto=format&fit=crop&q=80",
            "gifUrl": "https://media.giphy.com/media/13HgwGsXF0aiGY/giphy.gif",
            "characterVoice": "polly",
            "voiceLine": "Sea turtles glide gracefully over coral gardens!"
          },
          {
            "word": "Ocean Trench",
            "meaning": "Deep narrow depression in the ocean bed",
            "turkish": "Okyanus hendeği",
            "realPhoto": "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=600&auto=format&fit=crop&q=80",
            "gifUrl": "https://media.giphy.com/media/3o7TKDkDbIDJieKbVm/giphy.gif",
            "characterVoice": "chase",
            "voiceLine": "The Mariana Trench is the deepest place on Earth!"
          }
        ],
        "baamboozleQuestions": [
          {
            "q": "What is the English word for 'Mercan resifi'?",
            "a": "Coral Reef",
            "pts": 15,
            "type": "question"
          },
          {
            "q": "MYSTERY BOX: Polly found bonus treasure for your team!",
            "a": "You won 20 points!",
            "pts": 20,
            "type": "bonus"
          },
          {
            "q": "TPR CHALLENGE: Act out the theme 'Marine Biology, Corals & Oceans' for 5 seconds!",
            "a": "Demonstrated by team with cheers",
            "pts": 10,
            "type": "action"
          },
          {
            "q": "How do you spell the word 'Dolphin'?",
            "a": "D - O - L - P - H - I - N",
            "pts": 15,
            "type": "question"
          },
          {
            "q": "OOPS! Peppa slipped in a muddy puddle! Lose 10 points.",
            "a": "Lost 10 points!",
            "pts": -10,
            "type": "penalty"
          },
          {
            "q": "TEAM ACTION: Stand up and give your teammates a high five!",
            "a": "High fives completed!",
            "pts": 10,
            "type": "action"
          },
          {
            "q": "STEAL! Steal 15 points from another team!",
            "a": "15 points transferred!",
            "pts": 15,
            "type": "steal"
          },
          {
            "q": "Name three things connected to 'Under the Sea'!",
            "a": "Coral Reef, Dolphin, and Submarine",
            "pts": 20,
            "type": "question"
          },
          {
            "q": "Say 'Good job team!' in a funny robot voice!",
            "a": "Beep boop performed!",
            "pts": 10,
            "type": "action"
          },
          {
            "q": "SWAP SCORES! Swap points with the leading team!",
            "a": "Scores swapped!",
            "pts": 0,
            "type": "swap"
          },
          {
            "q": "What does 'Submarine' mean in Turkish?",
            "a": "Denizaltı",
            "pts": 15,
            "type": "question"
          },
          {
            "q": "GALAXY WIN: Bluey awards 25 bonus points!",
            "a": "Gained 25 points!",
            "pts": 25,
            "type": "bonus"
          },
          {
            "q": "Use the word 'Coral Reef' in an English sentence!",
            "a": "Example: I like this coral reef.",
            "pts": 20,
            "type": "question"
          },
          {
            "q": "BLACK HOLE: Lose 15 points into space!",
            "a": "Lost 15 points!",
            "pts": -15,
            "type": "penalty"
          },
          {
            "q": "DOUBLE BONUS: Answer correctly: Is school fun?",
            "a": "Yes, learning with friends is super fun!",
            "pts": 30,
            "type": "question"
          },
          {
            "q": "TEAM VICTORY: Everyone shout 'Polly!' together!",
            "a": "Polly!",
            "pts": 10,
            "type": "action"
          }
        ],
        "lessonPlan": {
          "weeklyGoal": "Students can communicate confidently about 'Under the Sea' (Marine Biology, Corals & Oceans), identify core vocabulary, and participate in collaborative smartboard games.",
          "dailyPlan": [
            {
              "day": "Monday (Day 1)",
              "focus": "Vocabulary Exploration: Coral Reef, Dolphin",
              "warmUp": "Polly's Morning Song & Mascot Welcome Chant",
              "presentation": "Smartboard interactive visual flashcards with GIPHY animations & real photos (No emojis).",
              "practice": "Pair matching card drill & natural character pronunciation practice.",
              "production": "Role-play dialogue: Ask peers about coral reef.",
              "wrapUp": "Quick-fire exit ticket check before lineup."
            },
            {
              "day": "Wednesday (Day 2)",
              "focus": "Grammar & Phonics Focus (Hard & soft ch: /tʃ/ in chair ...)",
              "warmUp": "TPR Simon Says: Follow teacher's movement commands.",
              "presentation": "Interactive smartboard sorting and spelling drill.",
              "practice": "Baamboozle 4-Team Championship Round on Smartboard.",
              "production": "Student drawing portfolio & sentence builder.",
              "wrapUp": "Star badge award and team points celebration."
            }
          ],
          "teacherResources": {
            "physicalGames": [
              "Flyswatter Board Relay: Stick photo flashcards of Coral Reef on the whiteboard. Two teams race to slap the called word.",
              "Magic Bag Mystery: Place real classroom props or word cards in a bag. Students feel without looking and describe the item."
            ],
            "smartboardActivities": [
              "Baamboozle 4-Team Interactive Arena for Under the Sea with mystery cards and sound effects.",
              "GIF & Real Photo Carousel Drill: Tap the moving GIPHY sticker to hear character pronunciation."
            ]
          }
        }
      },
      {
        "id": "stage4_u5",
        "number": 5,
        "title": "Amazing Animals",
        "cefr": "A2",
        "theme": "Endangered Species & Wildlife Rescue",
        "grammar": "Relative pronouns: who, which, where, that",
        "phonics": "Prefixes dis- in disappear, mis- in misunderstand",
        "vocabulary": [
          {
            "word": "Endangered",
            "meaning": "Seriously at risk of extinction in the wild",
            "turkish": "Nesli tükenmekte olan",
            "realPhoto": "https://images.unsplash.com/photo-1534188753412-3e26d0d618d6?w=600&auto=format&fit=crop&q=80",
            "gifUrl": "https://media.giphy.com/media/3o7TKSjRrfIPjeiVyM/giphy.gif",
            "characterVoice": "chase",
            "voiceLine": "We must protect endangered pandas and tigers!"
          },
          {
            "word": "Extinct",
            "meaning": "Having no living members left on the planet",
            "turkish": "Nesli tükenmiş",
            "realPhoto": "https://images.unsplash.com/photo-1579783902614-a3fb3927b675?w=600&auto=format&fit=crop&q=80",
            "gifUrl": "https://media.giphy.com/media/26FPJGjhefSJuaR0Y/giphy.gif",
            "characterVoice": "polly",
            "voiceLine": "Dinosaurs and dodo birds are now extinct!"
          },
          {
            "word": "Conservation",
            "meaning": "Protection and preservation of natural resources",
            "turkish": "Doğa koruma",
            "realPhoto": "https://images.unsplash.com/photo-1448375240586-882707db888b?w=600&auto=format&fit=crop&q=80",
            "gifUrl": "https://media.giphy.com/media/l41lFw057lAJQMwg0/giphy.gif",
            "characterVoice": "bluey",
            "voiceLine": "Wildlife conservation preserves habitats for all!"
          },
          {
            "word": "Rainforest",
            "meaning": "Dense forest rich in biodiversity with high rainfall",
            "turkish": "Yağmur ormanı",
            "realPhoto": "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?w=600&auto=format&fit=crop&q=80",
            "gifUrl": "https://media.giphy.com/media/13HgwGsXF0aiGY/giphy.gif",
            "characterVoice": "peppa",
            "voiceLine": "Toucans and jaguars live in lush green rainforests!"
          },
          {
            "word": "Sanctuary",
            "meaning": "A safe place where animals are protected from hunting",
            "turkish": "Doğal koruma alanı",
            "realPhoto": "https://images.unsplash.com/photo-1534567153574-2b12153a87f0?w=600&auto=format&fit=crop&q=80",
            "gifUrl": "https://media.giphy.com/media/3o7TKDkDbIDJieKbVm/giphy.gif",
            "characterVoice": "chase",
            "voiceLine": "Rescued baby elephants recover in the sanctuary!"
          },
          {
            "word": "Biodiversity",
            "meaning": "Variety of plant and animal life in a particular habitat",
            "turkish": "Biyoçeşitlilik",
            "realPhoto": "https://images.unsplash.com/photo-1526336024174-e58f5cdd8e13?w=600&auto=format&fit=crop&q=80",
            "gifUrl": "https://media.giphy.com/media/26u4cqiYI30juCOGY/giphy.gif",
            "characterVoice": "polly",
            "voiceLine": "Healthy biodiversity keeps ecosystems balanced!"
          }
        ],
        "baamboozleQuestions": [
          {
            "q": "What is the English word for 'Nesli tükenmekte olan'?",
            "a": "Endangered",
            "pts": 15,
            "type": "question"
          },
          {
            "q": "MYSTERY BOX: Polly found bonus treasure for your team!",
            "a": "You won 20 points!",
            "pts": 20,
            "type": "bonus"
          },
          {
            "q": "TPR CHALLENGE: Act out the theme 'Endangered Species & Wildlife Rescue' for 5 seconds!",
            "a": "Demonstrated by team with cheers",
            "pts": 10,
            "type": "action"
          },
          {
            "q": "How do you spell the word 'Extinct'?",
            "a": "E - X - T - I - N - C - T",
            "pts": 15,
            "type": "question"
          },
          {
            "q": "OOPS! Peppa slipped in a muddy puddle! Lose 10 points.",
            "a": "Lost 10 points!",
            "pts": -10,
            "type": "penalty"
          },
          {
            "q": "TEAM ACTION: Stand up and give your teammates a high five!",
            "a": "High fives completed!",
            "pts": 10,
            "type": "action"
          },
          {
            "q": "STEAL! Steal 15 points from another team!",
            "a": "15 points transferred!",
            "pts": 15,
            "type": "steal"
          },
          {
            "q": "Name three things connected to 'Amazing Animals'!",
            "a": "Endangered, Extinct, and Conservation",
            "pts": 20,
            "type": "question"
          },
          {
            "q": "Say 'Good job team!' in a funny robot voice!",
            "a": "Beep boop performed!",
            "pts": 10,
            "type": "action"
          },
          {
            "q": "SWAP SCORES! Swap points with the leading team!",
            "a": "Scores swapped!",
            "pts": 0,
            "type": "swap"
          },
          {
            "q": "What does 'Conservation' mean in Turkish?",
            "a": "Doğa koruma",
            "pts": 15,
            "type": "question"
          },
          {
            "q": "GALAXY WIN: Bluey awards 25 bonus points!",
            "a": "Gained 25 points!",
            "pts": 25,
            "type": "bonus"
          },
          {
            "q": "Use the word 'Endangered' in an English sentence!",
            "a": "Example: I like this endangered.",
            "pts": 20,
            "type": "question"
          },
          {
            "q": "BLACK HOLE: Lose 15 points into space!",
            "a": "Lost 15 points!",
            "pts": -15,
            "type": "penalty"
          },
          {
            "q": "DOUBLE BONUS: Answer correctly: Is school fun?",
            "a": "Yes, learning with friends is super fun!",
            "pts": 30,
            "type": "question"
          },
          {
            "q": "TEAM VICTORY: Everyone shout 'Polly!' together!",
            "a": "Polly!",
            "pts": 10,
            "type": "action"
          }
        ],
        "lessonPlan": {
          "weeklyGoal": "Students can communicate confidently about 'Amazing Animals' (Endangered Species & Wildlife Rescue), identify core vocabulary, and participate in collaborative smartboard games.",
          "dailyPlan": [
            {
              "day": "Monday (Day 1)",
              "focus": "Vocabulary Exploration: Endangered, Extinct",
              "warmUp": "Polly's Morning Song & Mascot Welcome Chant",
              "presentation": "Smartboard interactive visual flashcards with GIPHY animations & real photos (No emojis).",
              "practice": "Pair matching card drill & natural character pronunciation practice.",
              "production": "Role-play dialogue: Ask peers about endangered.",
              "wrapUp": "Quick-fire exit ticket check before lineup."
            },
            {
              "day": "Wednesday (Day 2)",
              "focus": "Grammar & Phonics Focus (Prefixes dis- in disappear, mi...)",
              "warmUp": "TPR Simon Says: Follow teacher's movement commands.",
              "presentation": "Interactive smartboard sorting and spelling drill.",
              "practice": "Baamboozle 4-Team Championship Round on Smartboard.",
              "production": "Student drawing portfolio & sentence builder.",
              "wrapUp": "Star badge award and team points celebration."
            }
          ],
          "teacherResources": {
            "physicalGames": [
              "Flyswatter Board Relay: Stick photo flashcards of Endangered on the whiteboard. Two teams race to slap the called word.",
              "Magic Bag Mystery: Place real classroom props or word cards in a bag. Students feel without looking and describe the item."
            ],
            "smartboardActivities": [
              "Baamboozle 4-Team Interactive Arena for Amazing Animals with mystery cards and sound effects.",
              "GIF & Real Photo Carousel Drill: Tap the moving GIPHY sticker to hear character pronunciation."
            ]
          }
        }
      },
      {
        "id": "stage4_u6",
        "number": 6,
        "title": "Helping Hands",
        "cefr": "A2",
        "theme": "Volunteering, Charity & Kindness",
        "grammar": "Reported speech basics: She said that..., He asked if...",
        "phonics": "Suffixes -ment in excitement, -ness in kindness",
        "vocabulary": [
          {
            "word": "Volunteer",
            "meaning": "A person who freely offers to take part in an enterprise",
            "turkish": "Gönüllü",
            "realPhoto": "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=600&auto=format&fit=crop&q=80",
            "gifUrl": "https://media.giphy.com/media/3o7TKMt1VVNkHV2PaE/giphy.gif",
            "characterVoice": "polly",
            "voiceLine": "Volunteers plant trees and clean local beaches!"
          },
          {
            "word": "Community",
            "meaning": "A group of people living in same place or with common trait",
            "turkish": "Topluluk",
            "realPhoto": "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600&auto=format&fit=crop&q=80",
            "gifUrl": "https://media.giphy.com/media/26FPJGjhefSJuaR0Y/giphy.gif",
            "characterVoice": "bluey",
            "voiceLine": "Working together strengthens our vibrant community!"
          },
          {
            "word": "Charity",
            "meaning": "An organization set up to provide help to those in need",
            "turkish": "Yardım kuruluşu",
            "realPhoto": "https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?w=600&auto=format&fit=crop&q=80",
            "gifUrl": "https://media.giphy.com/media/l41lFw057lAJQMwg0/giphy.gif",
            "characterVoice": "peppa",
            "voiceLine": "Donate books and warm clothes to charity!"
          },
          {
            "word": "Kindness",
            "meaning": "The quality of being friendly, generous, and considerate",
            "turkish": "İyilik / Nezaket",
            "realPhoto": "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=600&auto=format&fit=crop&q=80",
            "gifUrl": "https://media.giphy.com/media/13HgwGsXF0aiGY/giphy.gif",
            "characterVoice": "chase",
            "voiceLine": "A simple act of kindness brightens someone's day!"
          },
          {
            "word": "Donation",
            "meaning": "Something that is given to a charity, especially money",
            "turkish": "Bağış",
            "realPhoto": "https://images.unsplash.com/photo-1579208575657-c595a05383b7?w=600&auto=format&fit=crop&q=80",
            "gifUrl": "https://media.giphy.com/media/3o7TKDkDbIDJieKbVm/giphy.gif",
            "characterVoice": "polly",
            "voiceLine": "Every little donation helps provide school supplies!"
          },
          {
            "word": "Fundraiser",
            "meaning": "An event held to raise money for charity",
            "turkish": "Yardım toplama etkinliği",
            "realPhoto": "https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=600&auto=format&fit=crop&q=80",
            "gifUrl": "https://media.giphy.com/media/26u4cqiYI30juCOGY/giphy.gif",
            "characterVoice": "bluey",
            "voiceLine": "Our bake sale fundraiser raised funds for animal shelters!"
          }
        ],
        "baamboozleQuestions": [
          {
            "q": "What is the English word for 'Gönüllü'?",
            "a": "Volunteer",
            "pts": 15,
            "type": "question"
          },
          {
            "q": "MYSTERY BOX: Polly found bonus treasure for your team!",
            "a": "You won 20 points!",
            "pts": 20,
            "type": "bonus"
          },
          {
            "q": "TPR CHALLENGE: Act out the theme 'Volunteering, Charity & Kindness' for 5 seconds!",
            "a": "Demonstrated by team with cheers",
            "pts": 10,
            "type": "action"
          },
          {
            "q": "How do you spell the word 'Community'?",
            "a": "C - O - M - M - U - N - I - T - Y",
            "pts": 15,
            "type": "question"
          },
          {
            "q": "OOPS! Peppa slipped in a muddy puddle! Lose 10 points.",
            "a": "Lost 10 points!",
            "pts": -10,
            "type": "penalty"
          },
          {
            "q": "TEAM ACTION: Stand up and give your teammates a high five!",
            "a": "High fives completed!",
            "pts": 10,
            "type": "action"
          },
          {
            "q": "STEAL! Steal 15 points from another team!",
            "a": "15 points transferred!",
            "pts": 15,
            "type": "steal"
          },
          {
            "q": "Name three things connected to 'Helping Hands'!",
            "a": "Volunteer, Community, and Charity",
            "pts": 20,
            "type": "question"
          },
          {
            "q": "Say 'Good job team!' in a funny robot voice!",
            "a": "Beep boop performed!",
            "pts": 10,
            "type": "action"
          },
          {
            "q": "SWAP SCORES! Swap points with the leading team!",
            "a": "Scores swapped!",
            "pts": 0,
            "type": "swap"
          },
          {
            "q": "What does 'Charity' mean in Turkish?",
            "a": "Yardım kuruluşu",
            "pts": 15,
            "type": "question"
          },
          {
            "q": "GALAXY WIN: Bluey awards 25 bonus points!",
            "a": "Gained 25 points!",
            "pts": 25,
            "type": "bonus"
          },
          {
            "q": "Use the word 'Volunteer' in an English sentence!",
            "a": "Example: I like this volunteer.",
            "pts": 20,
            "type": "question"
          },
          {
            "q": "BLACK HOLE: Lose 15 points into space!",
            "a": "Lost 15 points!",
            "pts": -15,
            "type": "penalty"
          },
          {
            "q": "DOUBLE BONUS: Answer correctly: Is school fun?",
            "a": "Yes, learning with friends is super fun!",
            "pts": 30,
            "type": "question"
          },
          {
            "q": "TEAM VICTORY: Everyone shout 'Polly!' together!",
            "a": "Polly!",
            "pts": 10,
            "type": "action"
          }
        ],
        "lessonPlan": {
          "weeklyGoal": "Students can communicate confidently about 'Helping Hands' (Volunteering, Charity & Kindness), identify core vocabulary, and participate in collaborative smartboard games.",
          "dailyPlan": [
            {
              "day": "Monday (Day 1)",
              "focus": "Vocabulary Exploration: Volunteer, Community",
              "warmUp": "Polly's Morning Song & Mascot Welcome Chant",
              "presentation": "Smartboard interactive visual flashcards with GIPHY animations & real photos (No emojis).",
              "practice": "Pair matching card drill & natural character pronunciation practice.",
              "production": "Role-play dialogue: Ask peers about volunteer.",
              "wrapUp": "Quick-fire exit ticket check before lineup."
            },
            {
              "day": "Wednesday (Day 2)",
              "focus": "Grammar & Phonics Focus (Suffixes -ment in excitement, ...)",
              "warmUp": "TPR Simon Says: Follow teacher's movement commands.",
              "presentation": "Interactive smartboard sorting and spelling drill.",
              "practice": "Baamboozle 4-Team Championship Round on Smartboard.",
              "production": "Student drawing portfolio & sentence builder.",
              "wrapUp": "Star badge award and team points celebration."
            }
          ],
          "teacherResources": {
            "physicalGames": [
              "Flyswatter Board Relay: Stick photo flashcards of Volunteer on the whiteboard. Two teams race to slap the called word.",
              "Magic Bag Mystery: Place real classroom props or word cards in a bag. Students feel without looking and describe the item."
            ],
            "smartboardActivities": [
              "Baamboozle 4-Team Interactive Arena for Helping Hands with mystery cards and sound effects.",
              "GIF & Real Photo Carousel Drill: Tap the moving GIPHY sticker to hear character pronunciation."
            ]
          }
        }
      },
      {
        "id": "stage4_u7",
        "number": 7,
        "title": "The Living Planet",
        "cefr": "A2",
        "theme": "Climate, Ecosystems & Conservation",
        "grammar": "Zero and First conditionals, Cause and Effect clauses",
        "phonics": "Greek & Latin roots: bio (life), geo (earth), tele (distant)",
        "vocabulary": [
          {
            "word": "Ecosystem",
            "meaning": "A biological community of interacting organisms",
            "turkish": "Ekosistem",
            "realPhoto": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&auto=format&fit=crop&q=80",
            "gifUrl": "https://media.giphy.com/media/3o7TKSjRrfIPjeiVyM/giphy.gif",
            "characterVoice": "chase",
            "voiceLine": "From oceans to deserts, Earth is a network of ecosystems!"
          },
          {
            "word": "Photosynthesis",
            "meaning": "Process by which green plants make food using sunlight",
            "turkish": "Fotosentez",
            "realPhoto": "https://images.unsplash.com/photo-1448375240586-882707db888b?w=600&auto=format&fit=crop&q=80",
            "gifUrl": "https://media.giphy.com/media/26FPJGjhefSJuaR0Y/giphy.gif",
            "characterVoice": "polly",
            "voiceLine": "Leaves absorb sunlight to create fresh oxygen!"
          },
          {
            "word": "Atmosphere",
            "meaning": "The envelope of gases surrounding the earth",
            "turkish": "Atmosfer",
            "realPhoto": "https://images.unsplash.com/photo-1534088568595-a066f410bcda?w=600&auto=format&fit=crop&q=80",
            "gifUrl": "https://media.giphy.com/media/l41lFw057lAJQMwg0/giphy.gif",
            "characterVoice": "bluey",
            "voiceLine": "The protective atmosphere shields us from space rays!"
          },
          {
            "word": "Renewable",
            "meaning": "Natural resource that is not depleted by use (solar/wind)",
            "turkish": "Yenilenebilir",
            "realPhoto": "https://images.unsplash.com/photo-1509391365360-2e959784a276?w=600&auto=format&fit=crop&q=80",
            "gifUrl": "https://media.giphy.com/media/13HgwGsXF0aiGY/giphy.gif",
            "characterVoice": "chase",
            "voiceLine": "Windmills produce clean renewable green power!"
          },
          {
            "word": "Glaciers",
            "meaning": "A slowly moving mass or river of ice",
            "turkish": "Buzullar",
            "realPhoto": "https://images.unsplash.com/photo-1518173946687-a4c8a383392e?w=600&auto=format&fit=crop&q=80",
            "gifUrl": "https://media.giphy.com/media/3o7TKDkDbIDJieKbVm/giphy.gif",
            "characterVoice": "peppa",
            "voiceLine": "Majestic blue glaciers carved ancient mountain valleys!"
          },
          {
            "word": "Climate",
            "meaning": "Weather conditions prevailing in an area over time",
            "turkish": "İklim",
            "realPhoto": "https://images.unsplash.com/photo-1519692933481-e162a57d6721?w=600&auto=format&fit=crop&q=80",
            "gifUrl": "https://media.giphy.com/media/26u4cqiYI30juCOGY/giphy.gif",
            "characterVoice": "polly",
            "voiceLine": "We must protect our climate for future generations!"
          }
        ],
        "baamboozleQuestions": [
          {
            "q": "What is the English word for 'Ekosistem'?",
            "a": "Ecosystem",
            "pts": 15,
            "type": "question"
          },
          {
            "q": "MYSTERY BOX: Polly found bonus treasure for your team!",
            "a": "You won 20 points!",
            "pts": 20,
            "type": "bonus"
          },
          {
            "q": "TPR CHALLENGE: Act out the theme 'Climate, Ecosystems & Conservation' for 5 seconds!",
            "a": "Demonstrated by team with cheers",
            "pts": 10,
            "type": "action"
          },
          {
            "q": "How do you spell the word 'Photosynthesis'?",
            "a": "P - H - O - T - O - S - Y - N - T - H - E - S - I - S",
            "pts": 15,
            "type": "question"
          },
          {
            "q": "OOPS! Peppa slipped in a muddy puddle! Lose 10 points.",
            "a": "Lost 10 points!",
            "pts": -10,
            "type": "penalty"
          },
          {
            "q": "TEAM ACTION: Stand up and give your teammates a high five!",
            "a": "High fives completed!",
            "pts": 10,
            "type": "action"
          },
          {
            "q": "STEAL! Steal 15 points from another team!",
            "a": "15 points transferred!",
            "pts": 15,
            "type": "steal"
          },
          {
            "q": "Name three things connected to 'The Living Planet'!",
            "a": "Ecosystem, Photosynthesis, and Atmosphere",
            "pts": 20,
            "type": "question"
          },
          {
            "q": "Say 'Good job team!' in a funny robot voice!",
            "a": "Beep boop performed!",
            "pts": 10,
            "type": "action"
          },
          {
            "q": "SWAP SCORES! Swap points with the leading team!",
            "a": "Scores swapped!",
            "pts": 0,
            "type": "swap"
          },
          {
            "q": "What does 'Atmosphere' mean in Turkish?",
            "a": "Atmosfer",
            "pts": 15,
            "type": "question"
          },
          {
            "q": "GALAXY WIN: Bluey awards 25 bonus points!",
            "a": "Gained 25 points!",
            "pts": 25,
            "type": "bonus"
          },
          {
            "q": "Use the word 'Ecosystem' in an English sentence!",
            "a": "Example: I like this ecosystem.",
            "pts": 20,
            "type": "question"
          },
          {
            "q": "BLACK HOLE: Lose 15 points into space!",
            "a": "Lost 15 points!",
            "pts": -15,
            "type": "penalty"
          },
          {
            "q": "DOUBLE BONUS: Answer correctly: Is school fun?",
            "a": "Yes, learning with friends is super fun!",
            "pts": 30,
            "type": "question"
          },
          {
            "q": "TEAM VICTORY: Everyone shout 'Polly!' together!",
            "a": "Polly!",
            "pts": 10,
            "type": "action"
          }
        ],
        "lessonPlan": {
          "weeklyGoal": "Students can communicate confidently about 'The Living Planet' (Climate, Ecosystems & Conservation), identify core vocabulary, and participate in collaborative smartboard games.",
          "dailyPlan": [
            {
              "day": "Monday (Day 1)",
              "focus": "Vocabulary Exploration: Ecosystem, Photosynthesis",
              "warmUp": "Polly's Morning Song & Mascot Welcome Chant",
              "presentation": "Smartboard interactive visual flashcards with GIPHY animations & real photos (No emojis).",
              "practice": "Pair matching card drill & natural character pronunciation practice.",
              "production": "Role-play dialogue: Ask peers about ecosystem.",
              "wrapUp": "Quick-fire exit ticket check before lineup."
            },
            {
              "day": "Wednesday (Day 2)",
              "focus": "Grammar & Phonics Focus (Greek & Latin roots: bio (life...)",
              "warmUp": "TPR Simon Says: Follow teacher's movement commands.",
              "presentation": "Interactive smartboard sorting and spelling drill.",
              "practice": "Baamboozle 4-Team Championship Round on Smartboard.",
              "production": "Student drawing portfolio & sentence builder.",
              "wrapUp": "Star badge award and team points celebration."
            }
          ],
          "teacherResources": {
            "physicalGames": [
              "Flyswatter Board Relay: Stick photo flashcards of Ecosystem on the whiteboard. Two teams race to slap the called word.",
              "Magic Bag Mystery: Place real classroom props or word cards in a bag. Students feel without looking and describe the item."
            ],
            "smartboardActivities": [
              "Baamboozle 4-Team Interactive Arena for The Living Planet with mystery cards and sound effects.",
              "GIF & Real Photo Carousel Drill: Tap the moving GIPHY sticker to hear character pronunciation."
            ]
          }
        }
      },
      {
        "id": "stage4_u8",
        "number": 8,
        "title": "In the News",
        "cefr": "A2",
        "theme": "Media, Journalism & Digital Literacy",
        "grammar": "Past continuous vs Past simple for reporting news",
        "phonics": "Silent letters /gh/ in night, daughter, through",
        "vocabulary": [
          {
            "word": "Journalist",
            "meaning": "A person who writes for newspapers or broadcasts news",
            "turkish": "Gazeteci",
            "realPhoto": "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=600&auto=format&fit=crop&q=80",
            "gifUrl": "https://media.giphy.com/media/3o7TKMt1VVNkHV2PaE/giphy.gif",
            "characterVoice": "chase",
            "voiceLine": "The curious journalist asks insightful questions!"
          },
          {
            "word": "Headline",
            "meaning": "A heading at top of an article or page in a newspaper",
            "turkish": "Manşet / Başlık",
            "realPhoto": "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?w=600&auto=format&fit=crop&q=80",
            "gifUrl": "https://media.giphy.com/media/26FPJGjhefSJuaR0Y/giphy.gif",
            "characterVoice": "polly",
            "voiceLine": "Bold front-page headlines catch the reader's eye!"
          },
          {
            "word": "Interview",
            "meaning": "A meeting of people to consult and ask questions",
            "turkish": "Röportaj",
            "realPhoto": "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=600&auto=format&fit=crop&q=80",
            "gifUrl": "https://media.giphy.com/media/l41lFw057lAJQMwg0/giphy.gif",
            "characterVoice": "bluey",
            "voiceLine": "Hold the microphone for a school sports interview!"
          },
          {
            "word": "Broadcast",
            "meaning": "Transmit by radio or television to the public",
            "turkish": "Yayın / Yayınlamak",
            "realPhoto": "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=600&auto=format&fit=crop&q=80",
            "gifUrl": "https://media.giphy.com/media/13HgwGsXF0aiGY/giphy.gif",
            "characterVoice": "peppa",
            "voiceLine": "Live broadcast direct from the city science fair!"
          },
          {
            "word": "Newsflash",
            "meaning": "A single item of important news that is aired immediately",
            "turkish": "Flaş haber",
            "realPhoto": "https://images.unsplash.com/photo-1588681664899-f142ff2dc9b1?w=600&auto=format&fit=crop&q=80",
            "gifUrl": "https://media.giphy.com/media/3o7TKDkDbIDJieKbVm/giphy.gif",
            "characterVoice": "chase",
            "voiceLine": "Breaking newsflash: The missing puppy has been found!"
          },
          {
            "word": "Reporter",
            "meaning": "A person who reports news from live scenes",
            "turkish": "Muhabir",
            "realPhoto": "https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?w=600&auto=format&fit=crop&q=80",
            "gifUrl": "https://media.giphy.com/media/26u4cqiYI30juCOGY/giphy.gif",
            "characterVoice": "polly",
            "voiceLine": "Reporting live from the grand stadium championship!"
          }
        ],
        "baamboozleQuestions": [
          {
            "q": "What is the English word for 'Gazeteci'?",
            "a": "Journalist",
            "pts": 15,
            "type": "question"
          },
          {
            "q": "MYSTERY BOX: Polly found bonus treasure for your team!",
            "a": "You won 20 points!",
            "pts": 20,
            "type": "bonus"
          },
          {
            "q": "TPR CHALLENGE: Act out the theme 'Media, Journalism & Digital Literacy' for 5 seconds!",
            "a": "Demonstrated by team with cheers",
            "pts": 10,
            "type": "action"
          },
          {
            "q": "How do you spell the word 'Headline'?",
            "a": "H - E - A - D - L - I - N - E",
            "pts": 15,
            "type": "question"
          },
          {
            "q": "OOPS! Peppa slipped in a muddy puddle! Lose 10 points.",
            "a": "Lost 10 points!",
            "pts": -10,
            "type": "penalty"
          },
          {
            "q": "TEAM ACTION: Stand up and give your teammates a high five!",
            "a": "High fives completed!",
            "pts": 10,
            "type": "action"
          },
          {
            "q": "STEAL! Steal 15 points from another team!",
            "a": "15 points transferred!",
            "pts": 15,
            "type": "steal"
          },
          {
            "q": "Name three things connected to 'In the News'!",
            "a": "Journalist, Headline, and Interview",
            "pts": 20,
            "type": "question"
          },
          {
            "q": "Say 'Good job team!' in a funny robot voice!",
            "a": "Beep boop performed!",
            "pts": 10,
            "type": "action"
          },
          {
            "q": "SWAP SCORES! Swap points with the leading team!",
            "a": "Scores swapped!",
            "pts": 0,
            "type": "swap"
          },
          {
            "q": "What does 'Interview' mean in Turkish?",
            "a": "Röportaj",
            "pts": 15,
            "type": "question"
          },
          {
            "q": "GALAXY WIN: Bluey awards 25 bonus points!",
            "a": "Gained 25 points!",
            "pts": 25,
            "type": "bonus"
          },
          {
            "q": "Use the word 'Journalist' in an English sentence!",
            "a": "Example: I like this journalist.",
            "pts": 20,
            "type": "question"
          },
          {
            "q": "BLACK HOLE: Lose 15 points into space!",
            "a": "Lost 15 points!",
            "pts": -15,
            "type": "penalty"
          },
          {
            "q": "DOUBLE BONUS: Answer correctly: Is school fun?",
            "a": "Yes, learning with friends is super fun!",
            "pts": 30,
            "type": "question"
          },
          {
            "q": "TEAM VICTORY: Everyone shout 'Polly!' together!",
            "a": "Polly!",
            "pts": 10,
            "type": "action"
          }
        ],
        "lessonPlan": {
          "weeklyGoal": "Students can communicate confidently about 'In the News' (Media, Journalism & Digital Literacy), identify core vocabulary, and participate in collaborative smartboard games.",
          "dailyPlan": [
            {
              "day": "Monday (Day 1)",
              "focus": "Vocabulary Exploration: Journalist, Headline",
              "warmUp": "Polly's Morning Song & Mascot Welcome Chant",
              "presentation": "Smartboard interactive visual flashcards with GIPHY animations & real photos (No emojis).",
              "practice": "Pair matching card drill & natural character pronunciation practice.",
              "production": "Role-play dialogue: Ask peers about journalist.",
              "wrapUp": "Quick-fire exit ticket check before lineup."
            },
            {
              "day": "Wednesday (Day 2)",
              "focus": "Grammar & Phonics Focus (Silent letters /gh/ in night, ...)",
              "warmUp": "TPR Simon Says: Follow teacher's movement commands.",
              "presentation": "Interactive smartboard sorting and spelling drill.",
              "practice": "Baamboozle 4-Team Championship Round on Smartboard.",
              "production": "Student drawing portfolio & sentence builder.",
              "wrapUp": "Star badge award and team points celebration."
            }
          ],
          "teacherResources": {
            "physicalGames": [
              "Flyswatter Board Relay: Stick photo flashcards of Journalist on the whiteboard. Two teams race to slap the called word.",
              "Magic Bag Mystery: Place real classroom props or word cards in a bag. Students feel without looking and describe the item."
            ],
            "smartboardActivities": [
              "Baamboozle 4-Team Interactive Arena for In the News with mystery cards and sound effects.",
              "GIF & Real Photo Carousel Drill: Tap the moving GIPHY sticker to hear character pronunciation."
            ]
          }
        }
      },
      {
        "id": "stage4_u9",
        "number": 9,
        "title": "School's Out!",
        "cefr": "A2",
        "theme": "Holidays, Summer Camps & Aspirations",
        "grammar": "Future plans (present continuous for future), Infinitives",
        "phonics": "Connected speech, elision, and linking /r/",
        "vocabulary": [
          {
            "word": "Graduation",
            "meaning": "Receiving an academic degree or diploma",
            "turkish": "Mezuniyet",
            "realPhoto": "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=600&auto=format&fit=crop&q=80",
            "gifUrl": "https://media.giphy.com/media/3o7TKSjRrfIPjeiVyM/giphy.gif",
            "characterVoice": "polly",
            "voiceLine": "Toss your graduation caps in the air! Congratulations!"
          },
          {
            "word": "Expedition",
            "meaning": "A journey undertaken by group with particular purpose",
            "turkish": "Keşif gezisi",
            "realPhoto": "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=600&auto=format&fit=crop&q=80",
            "gifUrl": "https://media.giphy.com/media/26FPJGjhefSJuaR0Y/giphy.gif",
            "characterVoice": "chase",
            "voiceLine": "Prepare backpacks for the mountain nature expedition!"
          },
          {
            "word": "Milestone",
            "meaning": "An action or event marking significant change or stage",
            "turkish": "Dönüm noktası",
            "realPhoto": "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?w=600&auto=format&fit=crop&q=80",
            "gifUrl": "https://media.giphy.com/media/l41lFw057lAJQMwg0/giphy.gif",
            "characterVoice": "bluey",
            "voiceLine": "Finishing Stage 4 is a proud learning milestone!"
          },
          {
            "word": "Friendship",
            "meaning": "The emotions or conduct of friends",
            "turkish": "Dostluk / Arkadaşlık",
            "realPhoto": "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600&auto=format&fit=crop&q=80",
            "gifUrl": "https://media.giphy.com/media/13HgwGsXF0aiGY/giphy.gif",
            "characterVoice": "peppa",
            "voiceLine": "True school friendships last forever!"
          },
          {
            "word": "Destination",
            "meaning": "The place to which someone is going",
            "turkish": "Varış noktası",
            "realPhoto": "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=600&auto=format&fit=crop&q=80",
            "gifUrl": "https://media.giphy.com/media/3o7TKDkDbIDJieKbVm/giphy.gif",
            "characterVoice": "polly",
            "voiceLine": "Our holiday destination is a sunny seaside beach!"
          },
          {
            "word": "Voyage",
            "meaning": "A long journey involving travel by sea or in space",
            "turkish": "Deniz / Uzay yolculuğu",
            "realPhoto": "https://images.unsplash.com/photo-1505705694340-019e1e335916?w=600&auto=format&fit=crop&q=80",
            "gifUrl": "https://media.giphy.com/media/26u4cqiYI30juCOGY/giphy.gif",
            "characterVoice": "chase",
            "voiceLine": "Embark upon an exciting voyage of lifelong learning!"
          }
        ],
        "baamboozleQuestions": [
          {
            "q": "What is the English word for 'Mezuniyet'?",
            "a": "Graduation",
            "pts": 15,
            "type": "question"
          },
          {
            "q": "MYSTERY BOX: Polly found bonus treasure for your team!",
            "a": "You won 20 points!",
            "pts": 20,
            "type": "bonus"
          },
          {
            "q": "TPR CHALLENGE: Act out the theme 'Holidays, Summer Camps & Aspirations' for 5 seconds!",
            "a": "Demonstrated by team with cheers",
            "pts": 10,
            "type": "action"
          },
          {
            "q": "How do you spell the word 'Expedition'?",
            "a": "E - X - P - E - D - I - T - I - O - N",
            "pts": 15,
            "type": "question"
          },
          {
            "q": "OOPS! Peppa slipped in a muddy puddle! Lose 10 points.",
            "a": "Lost 10 points!",
            "pts": -10,
            "type": "penalty"
          },
          {
            "q": "TEAM ACTION: Stand up and give your teammates a high five!",
            "a": "High fives completed!",
            "pts": 10,
            "type": "action"
          },
          {
            "q": "STEAL! Steal 15 points from another team!",
            "a": "15 points transferred!",
            "pts": 15,
            "type": "steal"
          },
          {
            "q": "Name three things connected to 'School's Out!'!",
            "a": "Graduation, Expedition, and Milestone",
            "pts": 20,
            "type": "question"
          },
          {
            "q": "Say 'Good job team!' in a funny robot voice!",
            "a": "Beep boop performed!",
            "pts": 10,
            "type": "action"
          },
          {
            "q": "SWAP SCORES! Swap points with the leading team!",
            "a": "Scores swapped!",
            "pts": 0,
            "type": "swap"
          },
          {
            "q": "What does 'Milestone' mean in Turkish?",
            "a": "Dönüm noktası",
            "pts": 15,
            "type": "question"
          },
          {
            "q": "GALAXY WIN: Bluey awards 25 bonus points!",
            "a": "Gained 25 points!",
            "pts": 25,
            "type": "bonus"
          },
          {
            "q": "Use the word 'Graduation' in an English sentence!",
            "a": "Example: I like this graduation.",
            "pts": 20,
            "type": "question"
          },
          {
            "q": "BLACK HOLE: Lose 15 points into space!",
            "a": "Lost 15 points!",
            "pts": -15,
            "type": "penalty"
          },
          {
            "q": "DOUBLE BONUS: Answer correctly: Is school fun?",
            "a": "Yes, learning with friends is super fun!",
            "pts": 30,
            "type": "question"
          },
          {
            "q": "TEAM VICTORY: Everyone shout 'Polly!' together!",
            "a": "Polly!",
            "pts": 10,
            "type": "action"
          }
        ],
        "lessonPlan": {
          "weeklyGoal": "Students can communicate confidently about 'School's Out!' (Holidays, Summer Camps & Aspirations), identify core vocabulary, and participate in collaborative smartboard games.",
          "dailyPlan": [
            {
              "day": "Monday (Day 1)",
              "focus": "Vocabulary Exploration: Graduation, Expedition",
              "warmUp": "Polly's Morning Song & Mascot Welcome Chant",
              "presentation": "Smartboard interactive visual flashcards with GIPHY animations & real photos (No emojis).",
              "practice": "Pair matching card drill & natural character pronunciation practice.",
              "production": "Role-play dialogue: Ask peers about graduation.",
              "wrapUp": "Quick-fire exit ticket check before lineup."
            },
            {
              "day": "Wednesday (Day 2)",
              "focus": "Grammar & Phonics Focus (Connected speech, elision, and...)",
              "warmUp": "TPR Simon Says: Follow teacher's movement commands.",
              "presentation": "Interactive smartboard sorting and spelling drill.",
              "practice": "Baamboozle 4-Team Championship Round on Smartboard.",
              "production": "Student drawing portfolio & sentence builder.",
              "wrapUp": "Star badge award and team points celebration."
            }
          ],
          "teacherResources": {
            "physicalGames": [
              "Flyswatter Board Relay: Stick photo flashcards of Graduation on the whiteboard. Two teams race to slap the called word.",
              "Magic Bag Mystery: Place real classroom props or word cards in a bag. Students feel without looking and describe the item."
            ],
            "smartboardActivities": [
              "Baamboozle 4-Team Interactive Arena for School's Out! with mystery cards and sound effects.",
              "GIF & Real Photo Carousel Drill: Tap the moving GIPHY sticker to hear character pronunciation."
            ]
          }
        }
      }
    ]
  }
};

const TONGUE_TWISTERS_DATA = {
  "stage1": [
    {
      "sound": "/p/",
      "difficulty": "Easy",
      "text": "Peter Piper picked a peck of pickled peppers."
    },
    {
      "sound": "/b/",
      "difficulty": "Easy",
      "text": "Big black bug bit a big brown bear."
    },
    {
      "sound": "/s/",
      "difficulty": "Easy",
      "text": "Silas sees seven silly sheep sleeping."
    },
    {
      "sound": "/sh/",
      "difficulty": "Medium",
      "text": "She sells seashells on the sunny seashore."
    },
    {
      "sound": "/t/",
      "difficulty": "Easy",
      "text": "Two tiny tigers take two toy trains to town."
    },
    {
      "sound": "/f/",
      "difficulty": "Easy",
      "text": "Four fine fresh fish for funny Freddy."
    },
    {
      "sound": "/w/",
      "difficulty": "Medium",
      "text": "Which witch wished which wicked wish?"
    },
    {
      "sound": "/r/",
      "difficulty": "Challenging",
      "text": "Red lorry, yellow lorry, red lorry, yellow lorry."
    },
    {
      "sound": "/h/",
      "difficulty": "Easy",
      "text": "Happy Harry hopped on Henry's huge hat."
    },
    {
      "sound": "/k/",
      "difficulty": "Medium",
      "text": "Can you can a can as a canner can can a can?"
    }
  ],
  "stage2": [
    {
      "sound": "/eɪ/",
      "difficulty": "Easy",
      "text": "Bake a big brown birthday cake by the bay."
    },
    {
      "sound": "/iː/",
      "difficulty": "Easy",
      "text": "Green green grass grows by the deep blue sea."
    },
    {
      "sound": "/aɪ/",
      "difficulty": "Medium",
      "text": "Nine nice night nurses nursing nicely nightly."
    },
    {
      "sound": "/əʊ/",
      "difficulty": "Medium",
      "text": "A snowy boat floats slowly down the cold coast."
    },
    {
      "sound": "/uː/",
      "difficulty": "Medium",
      "text": "Blue kangaroos choose cool wooden spoons at the zoo."
    },
    {
      "sound": "/th/",
      "difficulty": "Challenging",
      "text": "Thirty-three thirsty feathers floating through the air."
    },
    {
      "sound": "/ch/",
      "difficulty": "Easy",
      "text": "Charlie chose chunks of cheap cheddar cheese."
    },
    {
      "sound": "/fl/",
      "difficulty": "Medium",
      "text": "Flashy flying flamingos fluttered fast over Florida."
    },
    {
      "sound": "/dr/",
      "difficulty": "Easy",
      "text": "Draw dry drops on the drum with a brown crayon."
    },
    {
      "sound": "/sk/",
      "difficulty": "Challenging",
      "text": "Six slippery snails slid slowly south down the slope."
    }
  ],
  "stage3": [
    {
      "sound": "/str/",
      "difficulty": "Medium",
      "text": "Strong street sweepers stroll straight along the street."
    },
    {
      "sound": "/spr/",
      "difficulty": "Medium",
      "text": "Spring sprinkles sparkling water on the sprout."
    },
    {
      "sound": "/spl/",
      "difficulty": "Challenging",
      "text": "Splendid splashing splashes split the sparkling stream."
    },
    {
      "sound": "/scr/",
      "difficulty": "Challenging",
      "text": "Scratchy screaming squirrels scramble over screens."
    },
    {
      "sound": "/w/ & /v/",
      "difficulty": "Challenging",
      "text": "Very well, Vivian views valuable velvet vests."
    },
    {
      "sound": "/tr/",
      "difficulty": "Easy",
      "text": "Truly rural trails travel through trees and trout."
    },
    {
      "sound": "/gl/",
      "difficulty": "Easy",
      "text": "Glowing glass globes glitter gloriously in the gallery."
    },
    {
      "sound": "/pr/",
      "difficulty": "Medium",
      "text": "Proud pretty princes practice playing pianos properly."
    }
  ],
  "stage4": [
    {
      "sound": "Silent /k/",
      "difficulty": "Challenging",
      "text": "The brave knight knew how to knit knots on his knees."
    },
    {
      "sound": "Silent /w/",
      "difficulty": "Challenging",
      "text": "Writers write wrongful wrongs with wrinkled wrists."
    },
    {
      "sound": "Silent /b/",
      "difficulty": "Medium",
      "text": "The nimble lamb climbed the tomb without a crumb."
    },
    {
      "sound": "/gh/ & /f/",
      "difficulty": "Challenging",
      "text": "Rough tough dough was bought through a draught in the night."
    },
    {
      "sound": "Multi-syllable",
      "difficulty": "Challenging",
      "text": "Unique New York, unique New York, you know you need unique New York."
    },
    {
      "sound": "Complex rhythm",
      "difficulty": "Challenging",
      "text": "How much wood would a woodchuck chuck if a woodchuck could chuck wood?"
    }
  ]
};

const SONGS_DATA = [
  {
    "id": "s1_hello",
    "stage": "Stage 1",
    "title": "Polly's Morning Hello Chant",
    "theme": "Greetings & School",
    "lyrics": [
      "Good morning, good morning, how are you today?",
      "I am happy, I am smiling, let us play and say!",
      "Hello to my teacher, hello to my friends,",
      "The fun at Polly's English never ever ends!"
    ]
  },
  {
    "id": "s1_abc",
    "stage": "Stage 1",
    "title": "The Alphabet Phonics Train",
    "theme": "Alphabet & Sounds",
    "lyrics": [
      "A is for Apple, /æ/ /æ/ apple,",
      "B is for Ball, /b/ /b/ ball,",
      "C is for Cat, /k/ /k/ cat,",
      "D is for Dog, /d/ /d/ dog,",
      "Sing the letter sounds with Polly on the train!"
    ]
  },
  {
    "id": "s1_family",
    "stage": "Stage 1",
    "title": "The Happy Finger Family",
    "theme": "Family Members",
    "lyrics": [
      "Daddy finger, daddy finger, where are you?",
      "Here I am, here I am, how do you do?",
      "Mommy finger, mommy finger, where are you?",
      "Here I am, here I am, how do you do?",
      "Brother finger, sister finger, baby finger too!"
    ]
  },
  {
    "id": "s2_abilities",
    "stage": "Stage 2",
    "title": "Yes, I Can! Action Song",
    "theme": "Talents & Sports",
    "lyrics": [
      "Can you swim like a dolphin in the deep blue sea?",
      "Yes, I can! Yes, I can! Look at me!",
      "Can you ride a bicycle up the grassy hill?",
      "Yes, I can! Yes, I can! What a thrill!",
      "Run and jump and dance with joy, every girl and boy!"
    ]
  },
  {
    "id": "s2_weather",
    "stage": "Stage 2",
    "title": "Sun, Rain, Wind and Snow",
    "theme": "Seasons & Sky",
    "lyrics": [
      "What is the weather like today?",
      "Look outside the window and see,",
      "The golden sun is shining warm and free,",
      "Put on your raincoat when the raindrops fall,",
      "Spin like the wind and catch the big beach ball!"
    ]
  },
  {
    "id": "s3_teamwork",
    "stage": "Stage 3",
    "title": "Together We Stand (Team Song)",
    "theme": "Cooperation",
    "lyrics": [
      "One hand, two hands, helping all the way,",
      "We build our projects brighter day by day,",
      "Listen with respect, cooperate and cheer,",
      "Teamwork makes the magic happen here!"
    ]
  },
  {
    "id": "s4_earth",
    "stage": "Stage 4",
    "title": "Our Planet, Our Future",
    "theme": "Ecology & Space",
    "lyrics": [
      "Eight planets spinning in the starry galaxy,",
      "One precious living planet for you and me,",
      "Guard the green forests, protect the deep blue sea,",
      "Champions of Earth, standing proud and free!"
    ]
  }
];

const VIDEO_LIBRARY_DATA = [
  {
    "id": "v1",
    "stage": "Stage 1",
    "title": "Hello! Nice To Meet You (Super Simple)",
    "topic": "Greetings",
    "channel": "Super Simple Songs",
    "duration": "2:30",
    "embedUrl": "https://www.youtube-nocookie.com/embed/tVlcKp3bWH8"
  },
  {
    "id": "v2",
    "stage": "Stage 1",
    "title": "School Supplies Song (English Singsing)",
    "topic": "Classroom",
    "channel": "English Singsing",
    "duration": "3:15",
    "embedUrl": "https://www.youtube-nocookie.com/embed/AS5nhKzaOqo"
  },
  {
    "id": "v3",
    "stage": "Stage 1",
    "title": "The Finger Family Animal Song",
    "topic": "Family",
    "channel": "The Singing Walrus",
    "duration": "3:40",
    "embedUrl": "https://www.youtube-nocookie.com/embed/g2n9v1M6k-A"
  },
  {
    "id": "v4",
    "stage": "Stage 1",
    "title": "Old MacDonald Had A Farm (Super Simple)",
    "topic": "Farm Animals",
    "channel": "Super Simple Songs",
    "duration": "3:00",
    "embedUrl": "https://www.youtube-nocookie.com/embed/5oYKonYBujg"
  },
  {
    "id": "v5",
    "stage": "Stage 2",
    "title": "What Can You Do? Ability Chant",
    "topic": "Abilities",
    "channel": "English Singsing",
    "duration": "3:10",
    "embedUrl": "https://www.youtube-nocookie.com/embed/7MKmbyfhkkE"
  },
  {
    "id": "v6",
    "stage": "Stage 2",
    "title": "Jobs & Community Helpers Song",
    "topic": "Professions",
    "channel": "The Singing Walrus",
    "duration": "3:45",
    "embedUrl": "https://www.youtube-nocookie.com/embed/ckKQclquAXU"
  },
  {
    "id": "v7",
    "stage": "Stage 2",
    "title": "Seasons Song (Sun Rain Wind Snow)",
    "topic": "Weather",
    "channel": "Super Simple Songs",
    "duration": "3:20",
    "embedUrl": "https://www.youtube-nocookie.com/embed/tfAB4BXSHOA"
  },
  {
    "id": "v8",
    "stage": "Stage 3",
    "title": "Rules in the Classroom (British Council)",
    "topic": "Cooperation",
    "channel": "British Council Kids",
    "duration": "3:50",
    "embedUrl": "https://www.youtube-nocookie.com/embed/P3sF1B8K7-g"
  },
  {
    "id": "v9",
    "stage": "Stage 3",
    "title": "Wild Animals and Habitats for Kids",
    "topic": "Ecosystems",
    "channel": "National Geographic Kids",
    "duration": "4:15",
    "embedUrl": "https://www.youtube-nocookie.com/embed/F41RzNky57g"
  },
  {
    "id": "v10",
    "stage": "Stage 4",
    "title": "Solar System Exploration (SciShow Kids)",
    "topic": "Space Science",
    "channel": "SciShow Kids",
    "duration": "4:30",
    "embedUrl": "https://www.youtube-nocookie.com/embed/iI_x_bYp324"
  },
  {
    "id": "v11",
    "stage": "Stage 4",
    "title": "Life in the Coral Reef (Nat Geo Kids)",
    "topic": "Marine Biology",
    "channel": "National Geographic Kids",
    "duration": "4:50",
    "embedUrl": "https://www.youtube-nocookie.com/embed/6iO2Uq_W8nI"
  }
];

if (typeof window !== 'undefined') {
  window.CURRICULUM_DATA = CURRICULUM_DATA;
  window.TONGUE_TWISTERS_DATA = TONGUE_TWISTERS_DATA;
  window.SONGS_DATA = SONGS_DATA;
  window.VIDEO_LIBRARY_DATA = VIDEO_LIBRARY_DATA;
}
