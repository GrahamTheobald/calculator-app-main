# Frontend Mentor - Calculator app solution

This is a solution to the [Calculator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/calculator-app-9lteq5N29). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

### The challenge

Users should be able to:

- See the size of the elements adjust based on their device's screen size
- Perform mathmatical operations like addition, subtraction, multiplication, and division
- Adjust the color theme based on their preference
- **Bonus**: Have their initial theme preference checked using `prefers-color-scheme` and have any additional changes saved in the browser

### Screenshot

![](./Screenshot%202022-11-10%20at%2018.40.37.png)

## My process

I decided to use Tailwind CSS to find out whether implementing skins was doable on that framework. I managed to do it through modification of the tailwind.config.js file. This involved changing the values of CSS variables depending on different classes being applied to certain elements, similar to how one would approach the problem with plain CSS except having to take further steps to make it compatible with Tailwind's framework.

I created a calculator class in a seperate module file in order to keep the calculating seperate from the code dealing with the DOM.
