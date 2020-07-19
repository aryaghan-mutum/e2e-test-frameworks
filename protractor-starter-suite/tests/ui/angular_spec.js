const angularHomePage = require('../../ui/pages/angular/angular_page');

describe('angularjs homepage', () => {
    it('should greet the named user', () => {
        angularHomePage.openPage().setName('Anu');
        expect(angularHomePage.getGreeting()).toEqual('Hello Anu!');
    });
});


describe('todo list', () => {
    let todoList;

    beforeEach(function () {
        browser.get('http://www.angularjs.org');
        todoList = element.all(by.repeater('todo in todoList.todos'));
    });

    it('should list todos', () => {
        expect(todoList.count()).toEqual(2);
        expect(todoList.get(1).getText()).toEqual('build an AngularJS app');
    });

    it('should add a todo', () => {
        const addTodo = element(by.model('todoList.todoText'));
        const addButton = element(by.css('[value="add"]'));

        addTodo.sendKeys('write a protractor test');
        addButton.click();

        expect(todoList.count()).toEqual(3);
        expect(todoList.get(2).getText()).toEqual('write a protractor test');
    });
});