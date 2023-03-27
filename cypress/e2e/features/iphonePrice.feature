Feature: Log item price in console

    Scenario: "Log the price of Iphone 14 Pro Max"
    Given I navigate to amazon.com
    When I type Iphone 14 Pro Max in Searchbar I click the Search Button I click on the first search result
    Then Assert that the price is not empty assert that the price is not null assert that the price is greater than 0 Log the price in the console
    