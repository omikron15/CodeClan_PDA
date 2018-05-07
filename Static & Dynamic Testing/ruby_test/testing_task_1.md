### Testing task 1:

# Carry out static testing on the code below.
# Comment on any errors that you see below.
```ruby
### Testing task 2 code:

# Carry out dynamic testing on the code below.
# Correct the errors below that you spotted in task 1.

#Require relative needs ./ before the ruby file
#also, this class doesnt use the require relative so it can be removed?
require_relative('card.rb')
class CardGame


  def checkforAce(card)
#if statement uses assignment of 1 instead of == to check value
    if card.value = 1
      return true
    else
      return false
    end
  end


#method should be def not dif
#parameters in declaration should be comma separated
  dif highest_card(card1 card2)
  if card1.value > card2.value
#.name is not a method for the card class. should be .value?
#card is not a specific card instance
#this should return card1.value, not card.name
    return card.name
  else
#possibly need a return?
#also should return card2.value
    card2
  end
end
#Extra end line
end

#self. not required
def self.cards_total(cards)
  #total should be set equal to zero
  total
  for card in cards
    total += card.value
    #return line should not be inside the for loop
    return "You have a total of" + total
  end
end

#No end of class
```
