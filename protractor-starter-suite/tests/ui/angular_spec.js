describe('angularjs homepage', () => {
    it('should greet the named user', () => {
        browser.get('http://www.angularjs.org');
        element(by.model('yourName')).sendKeys('Anu');
        const greeting = element(by.binding('yourName'));
        expect(greeting.getText()).toEqual('Hello Anu!');
        browser.sleep(4000);
    });
});


describe('todo list', function () {
    let todoList;

    beforeEach(function () {
        browser.get('http://www.angularjs.org');
        todoList = element.all(by.repeater('todo in todoList.todos'));
    });

    it('should list todos', function () {
        expect(todoList.count()).toEqual(2);
        expect(todoList.get(1).getText()).toEqual('build an AngularJS app');
    });

    it('should add a todo', function () {
        const addTodo = element(by.model('todoList.todoText'));
        const addButton = element(by.css('[value="add"]'));

        addTodo.sendKeys('write a protractor test');
        addButton.click();

        expect(todoList.count()).toEqual(3);
        expect(todoList.get(2).getText()).toEqual('write a protractor test');
    });
});