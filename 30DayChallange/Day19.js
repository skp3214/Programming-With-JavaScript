// Activity 1: Basic Regular Expressions

// Task 1: Match all occurrences of "JavaScript"
const task1 = () => {
    const regex = /JavaScript/g;
    const text = "I love JavaScript! JavaScript is awesome.";
    const matches = text.match(regex);
    console.log("Task 1 matches:", matches);
  };
  
  // Task 2: Match all digits in a string
  const task2 = () => {
    const regex = /\d/g;
    const text = "There are 42 apples and 7 oranges.";
    const matches = text.match(regex);
    console.log("Task 2 matches:", matches);
  };
  
  // Activity 2: Character Classes and Quantifiers
  
  // Task 3: Match words starting with a capital letter
  const task3 = () => {
    const regex = /\b[A-Z][a-z]*\b/g;
    const text = "The Quick Brown Fox Jumps Over The Lazy Dog.";
    const matches = text.match(regex);
    console.log("Task 3 matches:", matches);
  };
  
  // Task 4: Match sequences of one or more digits
  const task4 = () => {
    const regex = /\d+/g;
    const text = "There are 42 apples, 7 oranges, and 365 days in a year.";
    const matches = text.match(regex);
    console.log("Task 4 matches:", matches);
  };
  
  // Activity 3: Grouping and Capturing
  
  // Task 5: Capture area code, central office code, and line number from US phone number
  const task5 = () => {
    const regex = /\((\d{3})\)\s*(\d{3})-(\d{4})/;
    const phoneNumber = "(123) 456-7890";
    const matches = phoneNumber.match(regex);
    if (matches) {
      console.log("Task 5 captures:", {
        areaCode: matches[1],
        centralOfficeCode: matches[2],
        lineNumber: matches[3]
      });
    }
  };
  
  // Task 6: Capture username and domain from email address
  const task6 = () => {
    const regex = /([a-zA-Z0-9._%+-]+)@([a-zA-Z0-9.-]+\.[a-zA-Z]{2,})/;
    const email = "user.name@example.com";
    const matches = email.match(regex);
    if (matches) {
      console.log("Task 6 captures:", {
        username: matches[1],
        domain: matches[2]
      });
    }
  };
  
  // Activity 4: Assertions and Boundaries
  
  // Task 7: Match a word only at the beginning of a string
  const task7 = () => {
    const regex = /^Hello/;
    const text1 = "Hello world!";
    const text2 = "World, Hello!";
    console.log("Task 7 matches:", {
      text1: regex.test(text1),
      text2: regex.test(text2)
    });
  };
  
  // Task 8: Match a word only at the end of a string
  const task8 = () => {
    const regex = /world!$/;
    const text1 = "Hello world!";
    const text2 = "World, Hello!";
    console.log("Task 8 matches:", {
      text1: regex.test(text1),
      text2: regex.test(text2)
    });
  };
  
  // Activity 5: Practical Applications
  
  // Task 9: Validate a simple password
  const task9 = () => {
    const regex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>?]).{8,}$/;
    const password1 = "StrongP@ss1";
    const password2 = "weakpassword";
    console.log("Task 9 valid passwords:", {
      password1: regex.test(password1),
      password2: regex.test(password2)
    });
  };
  
  // Task 10: Validate a URL
  const task10 = () => {
    const regex = /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/;
    const url1 = "https://www.example.com";
    const url2 = "not-a-valid-url";
    console.log("Task 10 valid URLs:", {
      url1: regex.test(url1),
      url2: regex.test(url2)
    });
  };
  
  // Run all tasks
  task1();
  task2();
  task3();
  task4();
  task5();
  task6();
  task7();
  task8();
  task9();
  task10();