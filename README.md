![Image description](https://i1.faceprep.in/ProGrad/face-logo-resized.png)

# ProGrad Lab | Angular Custom Directives


## Learning Goals

After this lab, you will be able to:

- Create a static Angular application with Angular CLI.
- Build an Angular application with components.
- Use Angular customer attribute.

## Requirements

- Fork this repo.
- Clone this repo.

## Submission

Upon completion, run the following commands:

```bash
$ git add .
$ git commit -m "done"
$ git push origin master
```

Navigate to your repo and create a pull request from your master branch to the original repository's master branch. In the pull request name, add your ProGrad id, name, and last name separated by a dash "-".

## Deliverables

You need to generate the starter code and fill it with the necessary code to satisfy the requirements described below.

## Starter Code

To generate the starter code, follow the steps given below

- To create a new application,
    - Open your ubuntu or cmd terminal and execute the following command
      - ```ng new app-name```
      - for example, ng new super-wars
    - To create a new component, execute the command 
      - ``` ng generate component component-name```
      - example, ng generate component contacts
      
## How to run

- To run the project go to your ubuntu terminal or VS Code editor
    - open the ubuntu or cmd terminal or inside the vs code editor
    - run the command following command
    - ```ng serve --open or ng serve -o```


## Progression 1: Attribute Directive - ngClass & ngStyle

- Generate a new app using `ng new directive-attribute-app`.
- We will create a custom attribute based directives which will change the color of the selected text on mouseover. For that, we need to first create the directive called as app.directive.ts. Use the below code snippet inside your app.directive.ts
```
import { Directive, ElementRef, Renderer, HostListener, Input } from '@angular/core';  
  
@Directive({  
    selector: '[colorchange]'  
})  
export class ColorChangeDirective {  
    private _defaulColor = 'red';  
    @Input('colorchange') highlightColor: string;  
  
    constructor(private el: ElementRef, private render: Renderer) {  
    }  
  
    @HostListener('mouseenter') onMouseEnter() {  
        console.log(this.highlightColor);  
        this.changecolor(this.highlightColor || this._defaulColor);  
    }  
  
    @HostListener('mouseleave') onMouseLeave() {  
        console.log(this.highlightColor);  
        this.changecolor(null);  
    }  
  
    private changecolor(color: string) {  
        this.render.setElementStyle(this.el.nativeElement, 'color', color);  
    }  
}  
```
- Use app.component.html and app.component.ts to write your logic.
- Inside the app.component.ts, initailize the values given below
```
  public message: string = 'Sample Demostration of Attribute Directives using Custom Directives';  
  public color: string = 'blue';
```
- Define three radio buttons one for each color, your radio button should like the snippet given below
```
<input type="radio" name="colors" (click)="color='blue'">blue 
```
- Finally include the above created custom directive in our AppModule.

## Expected Output:
![output-1](https://i1.faceprep.in/ProGrad/ts-day4-7.png)

## Progression 2: Style
Did you notice that the styles are missing in the above expected output. Styling is a creative aspect and we want you to try and style it all by yourself. However, the objective of this progression is to add styles to the page and make it look appealing.

Happy Coding ProGrad ❤️!
