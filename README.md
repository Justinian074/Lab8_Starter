# Lab 8 - Starter
# Justin Lee

1. Where would you fit your automated tests in your Recipe project development pipeline? Select one of the following and explain why. - Within a Github action that runs whenever code is pushed. I would choose this option because this will run the tests automatically instead of manually like option 2 and have multiple tests unlike option 3. It is the most efficient and also tests often.

2. Would you use an end to end test to check if a function is returning the correct output? - No, end to end tests automate test cases that involve emulating user actions from start to finish. It will not be helpful in order to check if a function is returning the correct output.

3. Would you use a unit test to test the “message” feature of a messaging application? Why or why not? - No, because this seems like a too big a feature for unit testing to test the function of. The user is writing the message and then the message must be sent to the other user. If it was one or the other unit testing might be helpful, but since the scope of the feature is big. end to end testing will be better.

4. Would you use a unit test to test the “max message length” feature of a messaging application? Why or why not? - Yes, this seems like an easy and simple feature to test. We are only testing if a message is less than or equal to 80, so it is not a feature that needs to be tested with majority of the program.