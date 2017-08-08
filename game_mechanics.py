class hand(object):
    def __init__(self, card1=[], card2=[], score=0):
        self.card1 = card1
         self.card1 = card2
        self.score = score

    def table(self):
        suits = ['Ace', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K']
        pick1 = []
        pick2 = []
        pick.append(ranks[randint(0, 12)])
        pick2.append(ranks[randint(0, 12)])
        self.card1 = pick
        self.card2 = pick2

    def player_score(self):
        value = self.card[0]
        value = str(value)
        points = 0
        if value.isdigit():
            points += int(value)
        elif value != "Ace":
            points += 10
        else:
            ace_choice = input("Play ace as 11 or 1?")
            while not ace_choice.isdigit():
                try:
            if  ace_choice == "11":
                points +=11
            else:
                points +=1
            self.score += points

    def dealer_score(self):
        value = self.card[0]
        value = str(value)
        points = 0
        if value.isdigit():
            points += int(value)
        elif value != "Ace"
            points += 10
        elif value == "Ace" and self.score >= 11:
            points += 1
        elif value == "Ace" and self.score < 11:
            points += 11
        self.score += points
