Feature: Login as an existing user

	As an existing user
	I want to login to the website
	So that I can work on my website

	@watch
	Scenario: Login from homepage
		Given I am on the Weebly homepage
		When I click the login button
		Then I see the login screen
		And I enter my username in the email field
		Then I enter my password in the password field
		And I click the login button

	Scenario: Login from Sign Up modal
