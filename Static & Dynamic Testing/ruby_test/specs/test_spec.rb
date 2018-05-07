require 'minitest/autorun'
require 'minitest/rg'
require_relative '../card.rb'
require_relative '../testing_task_2.rb'

class TestCard < Minitest::Test

  def setup
      @card1 = Card.new("D", 1)
      @card2 = Card.new("D", 10)
      @card3 = Card.new("H", 13)
      @card4 = Card.new("H", 4)
      @card5 = Card.new("S", 1)
      @card6 = Card.new("S", 11)
      @card7 = Card.new("C", 2)
      @card8 = Card.new("C", 8)

      @game1 = CardGame.new()
  end

  def test_suit
    assert_equal("D", @card1.suit)
    assert_equal("H", @card3.suit)
    assert_equal("S", @card5.suit)
    assert_equal("C", @card7.suit)
  end

  def test_value
    assert_equal(10, @card2.value)
    assert_equal(4, @card4.value)
    assert_equal(11, @card6.value)
    assert_equal(8, @card8.value)
  end

  def test_checkforAce
    assert_equal(true, @game1.checkforAce(@card1))
    assert_equal(false, @game1.checkforAce(@card2))
  end

  def test_highest_card
    assert_equal(@card3, @game1.highest_card(@card3, @card4))
    assert_equal(@card8, @game1.highest_card(@card7, @card8))
    assert_nil(@game1.highest_card(@card1, @card5))
  end

  def test_cards_total
    cards = [@card1, @card2, @card3]
    result = @game1.cards_total(cards)
    assert_equal("You have a total of 24" ,result)
  end

end
