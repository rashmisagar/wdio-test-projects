Feature: Simple test
  In order to spread the awesomeness of WebdriverIO
  As a advocate
  I want to have a website

  Scenario: easy test
    Given I go to the API
    When I look at the top
    Then the header should be visible
    And the element ".mainnav" is visible within viewport
    And the element "footer" is not visible within viewport