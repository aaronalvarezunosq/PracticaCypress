Feature: Log item price in console

    Scenario: "Log the price of Iphone 14 Pro Max"
    Given 1-1 I navigate to amazon.com
    When 1-1 I type Iphone 14 Pro Max in Searchbar I click the Search Button I click on the first search result
    Then 1-1 Assert that the price is not empty assert that the price is not null assert that the price is greater than 0 Log the price in the console
    