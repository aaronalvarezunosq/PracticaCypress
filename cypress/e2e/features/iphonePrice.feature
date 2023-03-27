Feature: Log item price in console

    Scenario: "Log the price of Iphone 14 Pro Max"
    Given I navigate to amazon.com
    When I type Iphone 14 Pro Max in Searchbar
        And I click the Search Button
        And I click on the first search result
    Then Assert that the price is not empty
        And Assert that the price is not null
        And Assert that the price is greater than 0
        And Log the price in the console
    