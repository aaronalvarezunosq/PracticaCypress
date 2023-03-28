Feature: Validate the article price of Items in Table

    Background: "set up the main page of amazon"
        Given 2-1 I navigate to amazon.com for each item 

    Scenario: "Assert prices of Macbook Air M1"
    When 2-1 I type Macbook Air M1 in Searchbar click the Search Button click on the first search result
        |article             |
        |Macbook Air M1      |
    Then 2-1 Assert that the Macbook Air M1 price is not empty, not null, greater than 0 and Log the price in the console

    Scenario: "Assert prices of Iphone 14 Pro Max"
    When 2-2 I type Iphone 14 Pro Max in Searchbar click the Search Button click on the first search result
        |article             |
        |Iphone 14 Pro Max   |
    Then 2-2 Assert that the Iphone 14 Pro Max price is not empty assert that the price is not null assert that the price is greater than 0 Log the price in the console

    Scenario: "Assert prices of Samsung Galaxy S23"
    When 2-3 I type Samsung Galaxy S23 in Searchbar click the Search Button click on the first search result
        |article             |
        |Samsung Galaxy S23  |
    Then 2-3 Assert that the Samsung Galaxy S23 price is not empty assert that the price is not null assert that the price is greater than 0 Log the price in the console