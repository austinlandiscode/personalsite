import random

# --- Setup ---
word_list = ["aardvark", "baboon", "camel", "dolphin", "elephant", "flamingo", "giraffe", "hippopotamus", "iguana", "jaguar", "kangaroo", "lemur", "meerkat", "narwhal", "octopus", "penguin", "quokka", "rhinoceros", "sloth", "tortoise", "uakari", "vulture", "walrus", "xenops", "yak", "zebra"]
chosen_word = random.choice(word_list)

correct_letters = []
letters_guessed = []
lives = 6
display = "_" * len(chosen_word)
print(display)

# --- Game loop ---
while "_" in display and lives > 0:
    guess = input("Guess a letter: ").lower()

    if len(guess) != 1 or not guess.isalpha():
        print("Please enter a single letter.")
        continue

    if guess in letters_guessed:
        print(f"You already guessed {guess}. Try another letter.")
    elif guess in chosen_word:
        correct_letters.append(guess)
    else:
        lives -= 1

    letters_guessed.append(guess)

    print("Lives:", lives)

    display = ""
    for letter in chosen_word:
        if letter in correct_letters:
            display += letter
        else:
            display += "_"

    print(display)

if "_" not in display:
    print("You win!")
else:
    print(f"The word was {chosen_word}")
    print("You lose!")